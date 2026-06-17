# Suno-Enhanced
### Voss Neural Research LLC — Internal Project Folder

---

## Folder Structure

```
SUNO REVERSE ENGINEERING!/
│
├── config/
│   ├── .env                  ← MASTER keys (Stripe, Together.ai, Groq, all APIs)
│   └── suno_product_config.json  (copy from root)
│
├── suno_enhanced/            ← Chrome Extension source (load unpacked from here)
│   ├── manifest.json
│   ├── suno_automation.js
│   ├── background.js
│   ├── rules.json
│   └── icons/
│
├── tampermonkey_scripts/     ← Tampermonkey versions of the same scripts
│   ├── suno_automation_script.user.js   ← Main plugin (full version)
│   └── suno_x_marketing_assistant.user.js  ← X.com autopilot
│
├── scripts/                  ← Build/utility scripts
│   └── package_extension.py  ← Builds suno_enhanced.zip for Chrome Store
│
├── research/                 ← All research docs from Tried Methods/
│
├── audio/                    ← Drop before.mp3 / after.mp3 here for reference
│
├── Tried Methods/            ← Full research archive (82 files)
│
└── suno_enhanced.zip         ← Latest packaged extension (reload into Chrome)
```

---

## Chrome Extension — How to Reload

1. Open Chrome/Brave → `chrome://extensions`
2. Enable **Developer Mode** (top right toggle)
3. Click **Load Unpacked**
4. Select: `SUNO REVERSE ENGINEERING!\suno_enhanced\`
5. Done — go to `suno.com` — panel appears on the right edge

> **OR** drag `suno_enhanced.zip` onto the extensions page to install as packed.

---

## Website

- **Production:** https://simple-as-that.net
- **Repo:** `C:\Users\ovjup\Desktop\simple-as-that.net\`
- **Deployment:** Vercel (auto-deploys on git push to main)
- **Env for site:** Copy from `config/.env` → Vercel dashboard Environment Variables

---

## Stripe

| Item | Value |
|---|---|
| Checkout URL | https://buy.stripe.com/9B67sM2E06n20jHceqeAg0p |
| Product ID | prod_UiVEJzUnUb68F3 |
| Price ID | price_1Tj4DeL1MpJKJUEPmYkKIsPH |
| Dashboard | https://dashboard.stripe.com |

---

## APIs In Use

| Service | Used For | Key in config/.env |
|---|---|---|
| Together.ai | NUSO chatbot on simple-as-that.net | TOGETHER_API_KEY |
| Groq | X.com Autopilot reply classification | GROQ_API_KEY |
| Stripe | Payment processing | STRIPE_* |
| Supabase | DB (future use) | SUPABASE_* |
| Anthropic | Available / not active | ANTHROPIC_API_KEY |
| xAI (Grok) | Available / not active | XAI_API_KEY |

---

## Audio A/B Demo

Drop files in `C:\Users\ovjup\Desktop\simple-as-that.net\public\`:
- `before.mp3` → raw Suno output (no method) — **needs to be recorded**
- `suno_teaser.mp3` → VNR Method result — **already there**

---

## X.com Autopilot

Install `tampermonkey_scripts/suno_x_marketing_assistant.user.js` via Tampermonkey.
Auto-finds Suno complaints on X, classifies them, replies with a branded pitch + SoundCloud link.
Groq API key is embedded in the script (also stored in `config/.env`).
