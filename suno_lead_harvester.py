#!/usr/bin/env python3
"""SunoForge AI Lead Harvester & Groq Scopes Engine.
Scrapes Twitter search headlessly, filters for real complaints using Groq,
and outputs a local interactive dashboard for zero-effort replies.
"""

import os
import sys
import json
import time
from pathlib import Path
import requests

# Verify/Install Playwright if missing
try:
    from playwright.sync_api import sync_playwright
except ImportError:
    print("Installing Playwright...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "playwright"])
    subprocess.check_call([sys.executable, "-m", "playwright", "install"])
    from playwright.sync_api import sync_playwright

# Keys & Config
groq_api_key = os.environ.get("GROQ_API_KEY")
if not groq_api_key:
    # Try reading from config/.env
    env_path = Path(__file__).parent / "config" / ".env"
    if env_path.exists():
        with open(env_path, "r", encoding="utf-8") as f:
            for line in f:
                if line.startswith("GROQ_API_KEY="):
                    groq_api_key = line.split("=", 1)[1].strip().strip('"').strip("'")
                    break

if not groq_api_key:
    print("WARNING: GROQ_API_KEY not found in environment or config/.env.")
    groq_api_key = input("Please enter your Groq API Key: ").strip()
checkout_url = "https://buy.stripe.com/9B67sM2E06n20jHceqeAg0p"
dashboard_path = Path("leads_dashboard.html")

def evaluate_lead(tweet_text: str) -> dict:
    """Uses Groq to classify the tweet and return the exact matching template."""
    import random
    
    # Same tracks as userscript
    tracks = [
        "https://soundcloud.com/ducktronikz/sandman-19",
        "https://soundcloud.com/ducktronikz/the-drought-17",
        "https://soundcloud.com/ducktronikz/error-18",
        "https://soundcloud.com/ducktronikz/a-punishing-force-14",
        "https://soundcloud.com/ducktronikz/power-of-karate-16",
        "https://soundcloud.com/ducktronikz/after-these-messages-15",
        "https://soundcloud.com/ducktronikz/codeine-code-20",
        "https://soundcloud.com/ducktronikz/truth-pours-in-23",
        "https://soundcloud.com/ducktronikz/victim-city-25",
        "https://soundcloud.com/ducktronikz/palantir-21",
        "https://soundcloud.com/ducktronikz/sets/cyberg0d"
    ]
    random_track = random.choice(tracks)

    prompt = f"""Classify this tweet from a Suno/Udio AI music user: "{tweet_text}"

1. Is the user actually struggling with or complaining about Suno sound quality, vocals, mix, or settings? (Self-promotional links/sharing are NOT leads. Respond with only true or false for is_lead).
2. If YES, which of these three categories fits best?
   Category 1: Vocal issues, prompts, or how to use the generator.
   Category 2: Mixing, distortion, clipping, or bad sound quality.
   Category 3: General trash-talking of AI music, skepticism, or claims that all AI music is garbage.

Format your response exactly as a JSON object:
{{"is_lead": true/false, "category": 1/2/3}}
"""
    try:
        resp = requests.post(
            "https://api.groq.com/openai/v1/chat/completions",
            headers={
                "Content-Type": "application/json",
                "Authorization": f"Bearer {groq_api_key}"
            },
            json={
                "model": "llama-3.1-8b-instant",
                "messages": [{"role": "user", content: prompt}],
                "temperature": 0.1,
                "response_format": {"type": "json_object"}
            },
            timeout=10
        )
        if resp.status_code == 200:
            res = json.loads(resp.json()["choices"][0]["message"]["content"])
            is_lead = res.get("is_lead", False)
            category = res.get("category", 2)
            
            reply = ""
            if is_lead:
                if category == 1:
                    reply = f"ur not using suno correctly. your prompts literally dont matter. - this is the only correct way to use it - {random_track}"
                elif category == 3:
                    reply = f"i would agree with u in most cases but check this out - AI is capable of creating mindbending production but the companies who own it make more money when it fucks up! - {random_track}"
                else:
                    reply = f"your shit sounds bad bc you don't know how to use it. it's a precise sequence and if you aren't using it, your song isn't going to improve - {random_track}"
            
            return {"is_lead": is_lead, "reply": reply}
    except Exception as e:
        print(f"Groq API Error: {e}")
    return {"is_lead": False, "reply": ""}

def run_harvester():
    search_url = "https://x.com/search?q=suno%20quality%20OR%20suno%20vocals%20OR%20suno%20distortion%20OR%20suno%20sound&f=live"
    print("Launching headless browser to harvest leads...")
    
    leads = []
    
    with sync_playwright() as p:
        # Launch browser (runs headlessly)
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        try:
            page.goto(search_url, timeout=30000)
            print("Loading X search results...")
            page.wait_for_selector('article[data-testid="tweet"]', timeout=15000)
            
            # Scroll down twice to load more tweets
            for _ in range(2):
                page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                time.sleep(3)
                
            # Scrape tweets
            tweets = page.query_selector_all('article[data-testid="tweet"]')
            print(f"Scraped {len(tweets)} tweets. Running AI scoping...")
            
            for tweet in tweets:
                try:
                    text_el = tweet.query_selector('div[data-testid="tweetText"]')
                    user_el = tweet.query_selector('a[href^="/"]')
                    
                    if text_el and user_el:
                        tweet_text = text_el.inner_text()
                        username = user_el.get_attribute('href').replace('/', '')
                        
                        if username in ["home", "notifications", "messages", "search"]:
                            continue
                            
                        # Find tweet status ID to construct reply link
                        status_links = tweet.query_selector_all('a[href*="/status/"]')
                        tweet_id = ""
                        if status_links:
                            href = status_links[0].get_attribute('href')
                            # Format: /username/status/123456
                            tweet_id = href.split('/')[-1]

                        # AI evaluation
                        eval_res = evaluate_lead(tweet_text)
                        if eval_res.get("is_lead"):
                            leads.append({
                                "username": username,
                                "text": tweet_text,
                                "tweet_id": tweet_id,
                                "reply": eval_res.get("reply")
                            })
                            print(f"[LEAD FOUND] @{username}: {tweet_text[:60]}...")
                except Exception as tweet_err:
                    continue
        except Exception as e:
            print(f"Scrape completed or interrupted: {e}")
        finally:
            browser.close()
            
    # Generate Interactive HTML Dashboard
    generate_dashboard(leads)

def generate_dashboard(leads):
    html_template = """<!DOCTYPE html>
<html>
<head>
    <title>SunoForge AI Lead Dashboard</title>
    <style>
        body { background: #0a0a14; color: #fff; font-family: monospace; padding: 2rem; }
        h1 { color: #00ffff; text-shadow: 0 0 10px #00ffff; }
        .lead-card { background: #121225; border: 1px solid #ff00cc; border-radius: 8px; padding: 1.5rem; margin-bottom: 1.5rem; }
        .username { color: #ff00cc; font-weight: bold; }
        .text { color: #ccc; margin: 10px 0; }
        .reply-box { background: #000; padding: 10px; border-left: 3px solid #00ffcc; margin: 10px 0; color: #00ffcc; }
        .btn { display: inline-block; background: #00ffcc; color: #000; font-weight: bold; padding: 8px 16px; text-decoration: none; border-radius: 4px; }
        .btn:hover { box-shadow: 0 0 15px #00ffcc; }
    </style>
</head>
<body>
    <h1>SunoForge AI Harvester - Hot Leads</h1>
    <p>Last updated: """ + time.strftime("%Y-%m-%d %H:%M:%S") + f""" | Found {len(leads)} leads.</p>
    <div>
    """
    
    for lead in leads:
        reply_intent_url = f"https://x.com/intent/tweet?in_reply_to={lead['tweet_id']}&text={requests.utils.quote(lead['reply'])}"
        html_template += f"""
        <div class="lead-card">
            <span class="username">@{lead['username']}</span>
            <div class="text">"{lead['text']}"</div>
            <div class="reply-box"><strong>Draft Pitch:</strong> {lead['reply']}</div>
            <a href="{reply_intent_url}" target="_blank" class="btn">Click to Post Reply</a>
        </div>
        """
        
    html_template += """
    </div>
</body>
</html>
"""
    with open(dashboard_path, "w", encoding="utf-8") as f:
        f.write(html_template)
    print(f"\nDashboard updated! Open: {dashboard_path.resolve()}")

if __name__ == "__main__":
    run_harvester()
