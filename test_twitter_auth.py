#!/usr/bin/env python3
import sys
from pathlib import Path
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

def main():
    keys = load_keys()
    
    # Try OAuth 1.0a (Standard for posting)
    print("Testing OAuth 1.0a authentication...")
    auth = tweepy.OAuth1UserHandler(
        keys.get("TWITTER_CONSUMER_KEY"),
        keys.get("TWITTER_CONSUMER_SECRET"),
        keys.get("TWITTER_ACCESS_TOKEN"),
        keys.get("TWITTER_ACCESS_SECRET")
    )
    api = tweepy.API(auth)
    
    try:
        user = api.verify_credentials()
        print(f"OAuth 1.0a Success! Authenticated as: @{user.screen_name}")
        return
    except Exception as e:
        print("OAuth 1.0a verification failed:", e)

    # Try OAuth 2.0 (Client)
    print("\nTesting OAuth 2.0 Client authentication...")
    try:
        client = tweepy.Client(
            bearer_token=keys.get("TWITTER_BEARER_TOKEN"),
            consumer_key=keys.get("TWITTER_CONSUMER_KEY"),
            consumer_secret=keys.get("TWITTER_CONSUMER_SECRET"),
            access_token=keys.get("TWITTER_ACCESS_TOKEN"),
            access_token_secret=keys.get("TWITTER_ACCESS_SECRET")
        )
        me = client.get_me()
        print(f"OAuth 2.0 Success! Authenticated as ID: {me.data.id}")
    except Exception as e:
        print("OAuth 2.0 Client failed:", e)

if __name__ == "__main__":
    main()
