#!/usr/bin/env python3
"""SunoForge Product Generation Script.
Connects to your Stripe account to register the product and generate a checkout link.
"""

import os
import sys
import json
import requests
from pathlib import Path

def get_stripe_key():
    # Attempt to load from various locations
    search_paths = [
        Path("C:/Users/ovjup/Desktop/simple-as-that.net/.env"),
        Path("C:/Users/ovjup/Desktop/BC PROJECTS/Google AntiPoverty/_config/master.env"),
        Path("C:/Users/ovjup/Desktop/BC PROJECTS/PRODUCTS/PROFIT_CODING/sunocoach/.env")
    ]
    
    for path in search_paths:
        if path.exists():
            with open(path, "r", encoding="utf-8") as f:
                for line in f:
                    if "STRIPE_SECRET_KEY=" in line or "STRIPE_SECRET_KEY_1=" in line:
                        key = line.split("=")[1].strip().strip('"').strip("'")
                        if key.startswith("sk_"):
                            print(f"Loaded Stripe Key from: {path}")
                            return key
    return None

def main():
    stripe_key = get_stripe_key()
    if not stripe_key:
        print("Error: Could not locate STRIPE_SECRET_KEY in env files.")
        sys.exit(1)

    headers = {
        "Authorization": f"Bearer {stripe_key}",
        "Stripe-Version": "2023-10-16",
    }

    # Product Details
    name = "SunoForge Studio Quality Automation Suite"
    description = "VNR SunoForge Studio Quality Method. Includes the Tampermonkey Automation UserScript for suno.com, and the Master Production System PDF guide."
    price_usd = 29.00

    print(f"Registering product: '{name}' on Stripe...")
    
    # 1. Create Product
    prod_resp = requests.post(
        "https://api.stripe.com/v1/products",
        headers=headers,
        data={"name": name, "description": description}
    )
    if prod_resp.status_code != 200:
        print("Error creating product:", prod_resp.text)
        sys.exit(1)
        
    product = prod_resp.json()
    product_id = product["id"]
    print(f"Product registered! ID: {product_id}")

    # 2. Create Price
    price_cents = int(price_usd * 100)
    price_resp = requests.post(
        "https://api.stripe.com/v1/prices",
        headers=headers,
        data={"product": product_id, "unit_amount": price_cents, "currency": "usd"}
    )
    if price_resp.status_code != 200:
        print("Error creating price:", price_resp.text)
        sys.exit(1)
        
    price = price_resp.json()
    price_id = price["id"]
    print(f"Price created! ID: {price_id}")

    # 3. Create Checkout Payment Link
    link_resp = requests.post(
        "https://api.stripe.com/v1/payment_links",
        headers=headers,
        data={
            "line_items[0][price]": price_id,
            "line_items[0][quantity]": 1,
            "after_completion[type]": "hosted_confirmation",
            "after_completion[hosted_confirmation][custom_message]": "Thank you for purchasing! Download your scripts directly:\n1. Suno Automation: https://simple-as-that.net/suno_automation_script.user.js\n2. X Marketing Assistant: https://simple-as-that.net/suno_x_marketing_assistant.user.js\nCopy the code from these pages and paste them into new Tampermonkey scripts to begin."
        }
    )
    if link_resp.status_code != 200:
        print("Error creating payment link:", link_resp.text)
        sys.exit(1)

    link_data = link_resp.json()
    payment_url = link_data["url"]
    
    print("\n" + "="*50)
    print("      STRIPE CHECKOUT PAYMENT LINK GENERATED")
    print("="*50)
    print(f"URL: {payment_url}")
    print("="*50 + "\n")

    # Save to a local config file for broadcaster
    config = {
        "payment_url": payment_url,
        "product_id": product_id,
        "price_id": price_id
    }
    with open("suno_product_config.json", "w", encoding="utf-8") as f:
        json.dump(config, f, indent=2)
    print("Saved checkout URL to suno_product_config.json")

if __name__ == "__main__":
    main()
