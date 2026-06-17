#!/usr/bin/env python3
"""SunoForge X (Twitter) Broadcaster & Auto-responder Bot.
Posts a high-converting value thread and DMs the Stripe Checkout Link to anyone who replies 'STUDIO'.
"""

import os
import sys
import json
import time
from pathlib import Path

# Verify/Install Tweepy if missing
try:
    import tweepy
except ImportError:
    print("Tweepy library not found. Installing...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "tweepy"])
    import tweepy

def load_keys():
    master_env = Path("C:/Users/ovjup/Desktop/BC PROJECTS/Google AntiPoverty/_config/master.env")
    keys = {}
    if master_env.exists():
        with open(master_env, "r", encoding="utf-8") as f:
            for line in f:
                if "=" in line:
                    parts = line.split("=", 1)
                    k = parts[0].strip()
                    v = parts[1].strip().strip('"').strip("'")
                    if k.startswith("TWITTER_"):
                        keys[k] = v
    return keys

def get_payment_url():
    config_path = Path("suno_product_config.json")
    if config_path.exists():
        with open(config_path, "r", encoding="utf-8") as f:
            config = json.load(f)
            return config.get("payment_url")
    return None

def main():
    keys = load_keys()
    if not keys.get("TWITTER_CONSUMER_KEY") or not keys.get("TWITTER_ACCESS_TOKEN"):
        print("Error: Twitter keys not found in master.env.")
        sys.exit(1)

    payment_url = get_payment_url()
    if not payment_url:
        print("Error: suno_product_config.json not found. Run suno_generate_product.py first.")
        sys.exit(1)

    print("Authenticating with Twitter/X API...")
    
    # Authenticate via Tweepy Client (API v2)
    client = tweepy.Client(
        bearer_token=keys.get("TWITTER_BEARER_TOKEN"),
        consumer_key=keys.get("TWITTER_CONSUMER_KEY"),
        consumer_secret=keys.get("TWITTER_CONSUMER_SECRET"),
        access_token=keys.get("TWITTER_ACCESS_TOKEN"),
        access_token_secret=keys.get("TWITTER_ACCESS_SECRET")
    )
    
    # Standard Tweepy API (v1.1) for DM endpoints if needed
    auth = tweepy.OAuth1UserHandler(
        keys.get("TWITTER_CONSUMER_KEY"),
        keys.get("TWITTER_CONSUMER_SECRET"),
        keys.get("TWITTER_ACCESS_TOKEN"),
        keys.get("TWITTER_ACCESS_SECRET")
    )
    api = tweepy.API(auth)

    try:
        me = client.get_me()
        print(f"Logged in successfully as: @{me.data.username}")
    except Exception as e:
        print("Twitter authentication failed:", e)
        sys.exit(1)

    # Thread Tweets
    tweets = [
        "1/ 🔥 REVERSE-ENGINEERING SUNO AI v5.5: How to get true studio-quality output in 6 deliberate actions.\n\nMost people get muddy, compressed mixes with digital noise. It's not a prompt issue. It's a structural limitation of Suno's autoregressive conditioning. Here is how we fixed it:",
        
        "2/ 🧬 THE SECRET: Extend @ 0:01 with a BLANK style field.\n\nDoing this discards everything after the first downbeat except a 1-second seed. This forces acoustic DNA inheritance (key, tempo, production mix) without re-interpreting style tokens, forcing Suno to rebuild the track clean.",
        
        "3/ 🎚️ STEP 5: Cover (No Style).\n\nWithout a blank-Style Cover, spectral crowding, phase seams, and chain compression survive. Running a cover pass with Style completely cleared acts as a waveform-only remaster, cleaning the frequency headspace before export.",
        
        "4/ 🎛️ STEP 6: Remaster (Mandatory).\n\nRun this on your winning Cover. Set Model to v5.5 and Variations to Normal. This strips high-end synthetic artifacts and chain compression, delivering true studio-grade headroom.",
        
        "5/ 🤖 WANT TO AUTOMATE THIS?\n\nI built a Tampermonkey script that automates this entire 6-step loop directly in your Suno workspace (auto-clears styles, locks 0:01 extend, and guides you).\n\n💬 Reply 'STUDIO' to this tweet and my bot will DM you the checkout link!"
    ]

    print("\nPosting value thread to X...")
    parent_id = None
    
    # Post Thread
    try:
        for i, text in enumerate(tweets):
            if i == 0:
                response = client.create_tweet(text=text)
            else:
                response = client.create_tweet(text=text, in_reply_to_tweet_id=parent_id)
            parent_id = response.data['id']
            print(f"-> Posted Tweet {i+1} (ID: {parent_id})")
            time.sleep(2) # Avoid rate limits
        print("Thread successfully published!")
    except Exception as e:
        print("Error posting thread:", e)
        sys.exit(1)

    # Save target thread ID
    with open("suno_active_thread.json", "w", encoding="utf-8") as f:
        json.dump({"thread_id": parent_id}, f)

    print("\nAuto-responder listener loop starting. Monitoring replies...")
    processed_replies = set()

    try:
        while True:
            print(f"Checking for new replies on Tweet ID {parent_id}...")
            
            # Fetch replies to the thread using search API (tweepy v2)
            query = f"to:{me.data.username} is:reply"
            replies = client.search_recent_tweets(query=query, tweet_fields=['author_id', 'referenced_tweets'], max_results=50)
            
            if replies.data:
                for reply in replies.data:
                    reply_id = reply.id
                    author_id = reply.author_id
                    reply_text = reply.text.upper()
                    
                    # Ensure the reply is targeting our main thread
                    is_for_our_thread = False
                    if reply.referenced_tweets:
                        for ref in reply.referenced_tweets:
                            if ref.id == parent_id or str(ref.id) == str(parent_id):
                                is_for_our_thread = True
                                break
                    
                    if is_for_our_thread and "STUDIO" in reply_text and reply_id not in processed_replies:
                        print(f"New target found! User ID: {author_id} replied 'STUDIO'.")
                        
                        try:
                            # Send Direct Message (API v2 / Direct Messages)
                            # Note: Send DM via v2 requires specific setup, fallback to v1.1 if needed
                            dm_text = f"Here is the link to the SunoForge Studio Quality Automation Suite: {payment_url}"
                            
                            # X API v2 DM creation
                            client.create_direct_message(participant_id=author_id, text=dm_text)
                            print(f"--> Sent checkout link to User {author_id}")
                        except Exception as dm_err:
                            print(f"--> Error sending DM: {dm_err}. Trying v1.1 fallback...")
                            try:
                                api.send_direct_message(recipient_id=author_id, text=dm_text)
                                print("--> Fallback DM sent successfully.")
                            except Exception as fb_err:
                                print(f"--> Fallback failed: {fb_err}. (Note: Ensure your X Developer account has DM permissions enabled.)")
                        
                        processed_replies.add(reply_id)
            
            time.sleep(60) # Poll every 60 seconds
            
    except KeyboardInterrupt:
        print("Broadcaster exited.")

if __name__ == "__main__":
    main()
