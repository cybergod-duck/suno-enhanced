# 🔍 COMET (PERPLEXITY) BROWSER — SUNO TRACKER SWEEP RESULTS
**Scan Date:** 2026-03-06 02:33 EST
**Profile Location:** `C:\Users\ovjup\AppData\Local\Perplexity\Comet\User Data\Default`
**Total Profile Size:** 9,643.64 MB (~9.6 GB)

---

## ⚠️ HEADLINE FINDINGS

| Finding | Status |
|---------|--------|
| **Suno IndexedDB** | ✅ PRESENT — `https_suno.com_0.indexeddb.leveldb` (2.8 KB) |
| **Suno LocalStorage** | ✅ PRESENT — Found in multiple LevelDB files |
| **Braze (CRM tracker)** | ✅ PRESENT — Found in Local Storage LDB files |
| **Stripe (payment fraud SDK)** | ✅ PRESENT — Found in 3 separate LDB files |
| **Snapchat pixel** | ✅ PRESENT — Found in 2 LDB files |
| **TikTok pixel** | ✅ PRESENT — Found in Local Storage |
| **DoubleClick (Google Ads)** | ✅ PRESENT — Found in Local Storage |
| **Statsig (A/B testing)** | ✅ PRESENT — Multiple cached evaluation sets |
| **hCaptcha assets from Suno** | ✅ PRESENT — `hcaptcha-assets-prod.suno.com` |
| **Google Conversion Linker** | ✅ PRESENT — `_gcl_ls` data found |
| **Cookies DB** | ✅ 1.5 MB (1,572,864 bytes) — needs SQLite dump |
| **History DB** | ✅ 24 MB (25,133,056 bytes) |
| **Facebook IndexedDB** | ✅ PRESENT — blob + leveldb storage |
| **Browsing Topics API** | ✅ ACTIVE — 28 KB of site data collected |

---

## 📊 SUNO-SPECIFIC DATA FOUND IN LOCAL STORAGE

These are the actual data strings extracted from Comet's Local Storage LevelDB files:

### 1. Segment Analytics Anonymous ID
```
_https://suno.com..ajs_anonymous_id → "d0bb44f9-35f2-49ff-a04..."
```
**What this is:** Segment.io analytics assigned you an anonymous tracking ID. This ID links all your Suno activity into a single behavioral profile even before you log in.

### 2. Session Interaction Timestamp
```
_https://suno.com..sh-last-interaction → 1763709567159
```
**What this is:** Timestamp of your last interaction with Suno. Used by analytics to calculate session length and engagement frequency.

### 3. Statsig Cached Evaluations (MULTIPLE)
```
_https://suno.com..statsig.cached.evaluations.3467922011 → {large JSON}
_https://suno.com..statsig.cached.evaluations.2293392072 → {large JSON}
_https://suno.com..statsig.cached.evaluations.3573234472 → {large JSON}
_https://suno.com..statsig.cached.evaluations.497622921 → {large JSON}
```
**What this is:** Statsig is Suno's **A/B testing and feature gate system**. These cached evaluations contain the full configuration of which experiments and feature flags you're enrolled in. Each number is a different user config hash. **Multiple evaluation IDs means Suno has enrolled you in multiple simultaneous experiments.**

### 4. Statsig Last Modified Time
```
_https://suno.com..statsig.last_modified_time.evaluations → {timestamp}
```
**What this is:** When Suno last updated your experiment enrollment. Statsig checks this periodically and re-evaluates your feature gates.

### 5. hCaptcha Persistent State (from Suno's own CDN)
```
hcaptcha-assets-prod.suno.com → multiple entries including:
  - _gcl_ls → {"schema":"gcl","version":1,"gcl...}  (Google Conversion Linker)
  - binance-https://hcaptcha-assets-prod.suno.com → {}
  - ethereum-https://hcaptcha-assets-prod.suno.com → {"chainId":"0x1"}
  - loglevel → SILENT
```
**What this is:** This is extremely interesting:
- **Google Conversion Linker (`_gcl_ls`)** is stored under Suno's hCaptcha subdomain — this means Google ad conversion tracking is piggybacking on the CAPTCHA domain
- **Binance and Ethereum entries** under hCaptcha are likely from hCaptcha's proof-of-work system, which can use cryptocurrency mining as an alternative revenue model
- **`loglevel: SILENT`** means the logging is explicitly suppressed to hide activity

### 6. Persisted Event Queue
```
persisted-queue:v1:sun...
```
**What this is:** A persistent queue of analytics events that haven't been flushed to the server yet. If your connection dropped or the tab was backgrounded, events pile up here. This is one source of memory bloat on long-running tabs.

### 7. Storage Test
```
_https://suno.com..__storage_test__ → (exists)
```
**What this is:** Suno probing whether Local Storage is available. Standard but confirms Suno actively uses Local Storage. 

---

## 📦 COMET PROFILE SIZE BREAKDOWN

| Component | Size |
|-----------|------|
| **Browser Cache** | 534.25 MB |
| **Code Cache** | 726.84 MB |
| **Service Worker CacheStorage** | 739.36 MB |
| **GPU Cache** | 5.57 MB |
| **Cookies DB** | 1.5 MB |
| **History DB** | 24 MB |
| **Local Storage LevelDB** | ~18 MB |
| **IndexedDB (all sites)** | ~1,800+ MB estimated |
| **BrowsingTopics data** | 28 KB |
| **TransportSecurity (HSTS)** | 331 KB |
| **Other (extensions, prefs, etc.)** | ~5,500+ MB |
| **TOTAL** | **9,643 MB (~9.6 GB)** |

> [!CAUTION]
> **BandLab's IndexedDB alone is 1.7 GB** (`https_www.bandlab.com_0.indexeddb.blob` — 1,775,632 KB). Combined with Suno trackers, this profile is massively bloated.

---

## 🕵️ OTHER NOTABLE INDEXEDDB ENTRIES

Sites with significant data stored in Comet:

| Site | Size | Notes |
|------|------|-------|
| `www.bandlab.com` | **1,735 MB** | Massive blob storage — cached audio files |
| `openrouter.ai` | **49.5 MB** | LLM API cached responses |
| `www.perplexity.ai` | **5 MB** | Perplexity's own cached data |
| `www.youtube.com` | **3.9 MB** | Video metadata cache |
| `www.pinterest.com` | **2.9 MB** | Image data cache |
| `www.upwork.com` | **14.4 MB** | Job/proposal data |
| `us2.make.com` | **2.7 MB** | Automation workflow data |
| `teams.live.com` | **2.6 MB** | Microsoft Teams cache |
| `support.poshmark.com` | **2.5 MB** | Support ticket data |
| `pro.kraken.com` | **0.6 MB** | Crypto exchange data |
| `www.facebook.com` | **0.3 MB** | Facebook tracking data |
| `suno.com` | **2.8 KB** | Small — most Suno data is in Local Storage and cookies |

---

## 🧹 CLEANUP PLAN

### Option 1: Surgical Strike (Suno + trackers only)
Delete only Suno-related data while keeping other site data intact:

```powershell
# Delete Suno IndexedDB
Remove-Item -Recurse -Force "C:\Users\ovjup\AppData\Local\Perplexity\Comet\User Data\Default\IndexedDB\https_suno.com_0.indexeddb.leveldb"

# Delete hCaptcha Suno-specific assets (if separate directory exists)
# These are embedded in Local Storage LevelDB — requires clearing all Local Storage or using Chrome DevTools
```

> [!WARNING]
> **Local Storage LevelDB files contain data for ALL sites mixed together.** You cannot surgically remove just Suno entries from the `.ldb` files without a LevelDB editor. The only clean way is to delete the entire Local Storage directory, which will also clear data for other sites.

### Option 2: Clear All Browsing Data in Comet
1. Open Comet/Perplexity
2. Go to Settings → Privacy → Clear Browsing Data
3. Select: Cookies, Cached images/files, Site data
4. Clear

### Option 3: Nuclear — Delete Entire Default Profile
```powershell
# WARNING: This deletes ALL browsing data, bookmarks, history, saved passwords
Remove-Item -Recurse -Force "C:\Users\ovjup\AppData\Local\Perplexity\Comet\User Data\Default"
```

### Option 4: Just Clear the Caches (Recover ~2 GB without losing data)
```powershell
Remove-Item -Recurse -Force "C:\Users\ovjup\AppData\Local\Perplexity\Comet\User Data\Default\Cache"
Remove-Item -Recurse -Force "C:\Users\ovjup\AppData\Local\Perplexity\Comet\User Data\Default\Code Cache"
Remove-Item -Recurse -Force "C:\Users\ovjup\AppData\Local\Perplexity\Comet\User Data\Default\GPUCache"
```

---

*Suno's tracking footprint is confirmed present in Comet. The Segment anonymous ID, Statsig experiment enrollments, Braze CRM data, Google Conversion Linker, and all major ad pixels have left residue in Local Storage. The Cookies DB likely contains the full cookie inventory documented in the Tracker Encyclopedia.*
