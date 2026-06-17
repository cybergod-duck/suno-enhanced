# SUNO PRODUCTION — AI HANDOFF DOCUMENT
**Shared Communication Tunnel: Perplexity ↔ Google AI (AG)**
**Repo:** https://github.com/cybergod-duck/suno-enhanced
**Last Verified:** 2026-06-17
**Compiled by:** Voss Neural Research LLC (VNR)

---

## ⚠️ CHANGE FLAG STATUS
```
STATUS: NOMINAL — No drift detected
LAST SCAN: 2026-06-17 @ 06:53 EDT
SUSPECTED DRIFT: None
CONFIRMED CHANGES: None
NEXT SCAN TRIGGER: Manual or on degraded output report
```

---

## 🔴 OPEN BUG — ACTION REQUIRED (AG)

### VNR-BUG-004 — Mode Switching (Cover ↔ Extend) React Click Not Registering
**File:** `tampermonkey_scripts/suno_automation_script.user.js`
**Status:** OPEN — Blocked on DOM intel
**Symptom:** Script finds the mode dropdown and calls `.click()`, `MouseEvent` sequences, and `__reactProps$.onClick` — React does not respond. Mode stays on Cover. Affects Steps 2, 3, 5, 6.
**Root cause:** No live DOM snapshot of the mode dropdown in open state. Every selector is a guess. Cannot confirm element shape or React event binding without Inspect screenshot.

**DOM Intel needed (4 right-click → Inspect screenshots):**
1. The mode dropdown ("Cover ▼") when **OPEN** showing all options
2. The **"Get Full Song"** button/menu item on a clip card
3. The **Extend timestamp slider** area (full surrounding markup)
4. The **"Remix"** button on a clip card

**What we DO know (from console diagnostic run on live page):**
```json
{
  "inputs": [
    {"type":"text","ph":"Song Title (Optional)"},
    {"type":"number","ph":"Auto"},
    {"type":"text","ph":"","val":"1"},
    {"type":"range","ph":"","val":"0"},
    {"type":"checkbox","ph":"","val":"on"}
  ],
  "timeText": [
    {"tag":"SPAN","text":"00:00","cls":"css-8hm6ur ehcri1o0"},
    {"tag":"SPAN","text":"03:52","cls":"css-8hm6ur ehcri1o0"},
    {"tag":"DIV","text":"0:00","cls":"min-w-8 text-right text-xs text-(--time-color)"}
  ]
}
```
- The extend timestamp is a **range slider** (`input[type="range"]`, value in seconds as integer)
- The time display is a `DIV` with class containing `time-color` and `min-w-8`
- The range slider and time display exist on the page in **Cover mode too** (not Extend-specific)
- The SPAN `css-8hm6ur ehcri1o0` is the player time display, not the extend field

**Correct approach for range slider injection (do NOT use setReactInputValue for sliders):**
```javascript
function setExtendSliderValue(seconds) {
    const slider = document.querySelector('input[type="range"]');
    if (!slider) return false;
    
    // Try React fiber props first
    const fiberKey = Object.keys(slider).find(k => k.startsWith('__reactProps$'));
    if (fiberKey && slider[fiberKey].onChange) {
        slider[fiberKey].onChange({ target: { value: String(seconds) } });
        return true;
    }
    
    // Fallback: native setter + events
    const nativeSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
    nativeSetter.call(slider, String(seconds));
    slider.dispatchEvent(new Event('input', { bubbles: true }));
    slider.dispatchEvent(new Event('change', { bubbles: true }));
    return true;
}
// For 0:01 use: setExtendSliderValue(1)
// For 0:06 use: setExtendSliderValue(6)
```

**Until DOM screenshots arrive:** Steps 2/3 can be downgraded to semi-manual — script sets slider value, user selects Extend tab manually. Better than silent failure.

---

### VNR-BUG-005 — SunoShield Extension Conflicts with localStorage State Persistence
**File:** `tampermonkey_scripts/suno_automation_script.user.js`
**Status:** OPEN — Needs detection + defensive code
**Symptom:** `localStorage.setItem()` calls succeed silently but vault state does not persist between steps. Metadata Vault appears empty on next step even after successful grab.
**Root cause:** `SunoShield` browser extension (also running in user's Chrome) intercepts and blocks `localStorage` writes on `suno.com`. Our `try/catch` around localStorage swallows the error silently.

**Fix — add write-verify after every vault save:**
```javascript
function safeLocalStorageSet(key, value) {
    try {
        localStorage.setItem(key, value);
        // Verify write succeeded
        if (localStorage.getItem(key) !== value) {
            showToast("⚠️ Vault save blocked (SunoShield?). Data held in memory only.", "warning");
            // Fallback: hold in JS module-level variable
            vnrMemoryFallback[key] = value;
            return false;
        }
        return true;
    } catch(e) {
        showToast("⚠️ localStorage blocked. Holding session data in memory.", "warning");
        vnrMemoryFallback[key] = value;
        return false;
    }
}

// Add at top of IIFE:
const vnrMemoryFallback = {};

// Update all localStorage.getItem calls to check fallback:
function safeLocalStorageGet(key) {
    try {
        return localStorage.getItem(key) || vnrMemoryFallback[key] || null;
    } catch(e) {
        return vnrMemoryFallback[key] || null;
    }
}
```
Replace all `localStorage.setItem('vnr-original-style', ...)` and `localStorage.setItem('vnr-original-lyrics', ...)` calls with `safeLocalStorageSet()`. Replace all `localStorage.getItem('vnr-original-...')` with `safeLocalStorageGet()`.

---

## ✅ CLOSED BUGS

### VNR-BUG-003 — Step 2 Extend Flow: Panel Won't Open, Mode Won't Switch, Timestamp Doesn't Commit
**Status:** CLOSED — Patched by AG 2026-06-17
**Summary:** Applied three-part fix: (a) Added fallback clip card option menu scanning, (b) Bumped React panel mount timeouts, (c) Added `keydown`/`keyup` dispatches to `setReactInputValue()`. Updated timestamps to `"0:01"` and `"0:06"`.

### VNR-BUG-002 — Vault UI Truncates Lyrics & Style Visually
**Status:** CLOSED — Patched by AG 2026-06-17
**Summary:** CSS 38px height clipped vault preview. Style field was single-line `<input>`. Fixed to `<textarea>` at 80px with vertical resize.

### VNR-BUG-001 — runGenesis() Crops Style + Double-Wraps Lyrics
**Status:** CLOSED — Patched by AG 2026-06-17
**Summary:** Style and lyrics now pass through verbatim without token reconstruction or tag-wrapping.

---

## LIVE DOM MAP (Confirmed from Console Diagnostic)
*Ground-truth selectors from actual Suno.com page. Do not guess beyond this.*

| Element | Confirmed Selector / Class | Notes |
|---------|--------------------------|-------|
| Extend range slider | `input[type="range"]` | Value in seconds (integer). Present in Cover mode too. |
| Time display (extend) | `div.min-w-8.text-right.text-xs` with `text-(--time-color)` | Shows current slider value |
| Player time display | `span.css-8hm6ur.ehcri1o0` | NOT the extend field — do not confuse |
| Song title input | `input[type="text"][placeholder="Song Title (Optional)"]` | Step 1 optional |
| BPM input | `input[type="number"][placeholder="Auto"]` | Optional |
| Mode dropdown | **UNKNOWN — DOM screenshot needed** | React click not registering |
| Get Full Song button | **UNKNOWN — DOM screenshot needed** | Step 4 broken |
| Remix button (clip card) | **UNKNOWN — DOM screenshot needed** | Step 2 entry point |

---

## PRODUCT ROADMAP (Next Phase)
*For AG context only — do not implement until core bugs closed.*

| Feature | Description | Priority |
|---------|-------------|----------|
| Style Pack Picker | Dropdown in Step 1 with 4 LILA genre packs (Happy Hardcore, Dark Ambient, Cinematic Pop Punk, Glitch Breakcore). One-click genre loading from ZIP. | High |
| Theme Switching | Cyberpunk (default), neon, vapor, dark. CSS variable swaps, no logic changes. | Medium |
| AI Songwriter ($1/song) | Grok API integration. User describes song → gets lyrics + style. 2 rewrites. Funnels through simple-as-that.net. | High |
| Premium Tiers | Free (overlay + basic workflow) → Paid (more packs, songwriter chat) | Future |

---

## HOW TO USE THIS FILE

This file is the **single source of truth** passed between Perplexity and Google AI (AG).

**Workflow:**
1. **AG** updates the method, pushes to GitHub, updates the `## CURRENT METHOD STATE` section below
2. **You** pull the file, paste it into Perplexity
3. **Perplexity** scans for platform drift, updates the `⚠️ CHANGE FLAG STATUS` block, hands back
4. **You** paste the updated file back into AG for structural integration
5. **Repeat** when Suno behavior changes or a new session begins

**Rule:** Never edit the method doctrine sections manually. Only Perplexity updates the CHANGE FLAGS. Only AG updates the METHOD STATE.

---

## ROLE ASSIGNMENTS

| AI | Role | What It Touches |
|----|------|----------------|
| **Perplexity** | Surveillance + Change Detection | CHANGE FLAG block only |
| **Google AI (AG)** | Assembly + Structural Reasoning | METHOD STATE + all doctrine sections |
| **You** | Courier + Trigger | Moves file between both, calls scans |

---

## CHANGE DETECTION PROTOCOL

### Trigger Conditions (Perplexity runs a scan when:)
- User reports degraded output quality from the chain
- Suno announces a version update or model change
- Community reports (Reddit r/SunoAI, Discord) show widespread output shifts
- Routine check requested manually

### Signal Classification
| Signal Type | Classification | AG Action |
|-------------|---------------|-----------|
| Official Suno changelog / announcement | `CONFIRMED CHANGE` | Patch affected steps immediately |
| Community reports of degraded output (48–72hr pattern) | `SUSPECTED DRIFT` | Flag for testing; hold on patching |
| Single isolated failure | `NOISE` | No action |
| Silent model weight update (A/B test confirmed) | `CONFIRMED CHANGE` | Patch affected steps immediately |

### Steps Most Vulnerable to Drift
1. **Extend @ 0:01** — most sensitive to model context window changes
2. **Cover: No Style** — waveform remaster behavior can shift with model updates
3. **Step 5 style token weighting** — NLP layer priority order may be reindexed
4. **Remaster** — HF noise stripping behavior tied to model version

---

## CURRENT METHOD STATE
*Maintained by AG. Do not edit manually.*

### Version
`SUNO v5.5 — Master Production System`
Canonical file: [`SUNO v5.5 — Master Production System.md`](https://github.com/cybergod-duck/suno-enhanced/blob/main/SUNO%20v5.5%20%E2%80%94%20Master%20Production%20System.md)

### Active Workflow Path
6-Step Optimal Path (Create workspace only — not Studio tab)

| # | Action | Lyrics | Style | Mechanical Purpose |
|---|--------|--------|-------|--------------------|
| 1 | New Song (Custom Mode) | Tagged structure | Vocal-first sparse (≤2 instrument tokens) | Compositional anchor |
| 2 | Extend @ 0:01 | Identical | **Blank** | Acoustic DNA lock + full regeneration |
| 2.5 | Extend @ 0:06 *(optional)* | New or identical | **Blank** | Vocal performance lock |
| 3 | Cover: No Style | Identical | **Blank** | Waveform-only remaster |
| 4 | Extend from End: Nothing | **Blank** | **Blank** | v5.5 metadata re-index (credits refunded) |
| 5 | Cover: Vocal-First Simple Style | Re-paste identical tagged sheet | Vocal tokens only | Dynamic range ceiling |
| 6 | Remaster | — | — | True export ceiling |

### Hard Timestamp Rules (DO NOT SWAP)
- `0:01` = Style only, NEVER lyrics only
- `0:06` = Lyrics only, NEVER style

### Step 1 Style Template
```
[vocal descriptor], [delivery], upfront — [genre], [BPM], spacious mix, vocal-forward, minimalist production
```
Token limit: ≤2 instrument tokens. Spatial keywords mandatory.

### Step 5 Style Template
```
warm [gender] [voice type], [delivery], clear upfront, compressed vocals — minimal [genre]
```
Zero instrument keywords. Vocal descriptors lead.

### Step 4 Critical Dependency
Must run on a **Get Whole Song compiled output**. Running on an uncompiled Cover registers an incomplete dependency tree — stems, Voices, and v5.5 feature flags inherit from the wrong node.

---

## ACTIVE FAILURE MODE TABLE
*Updated by AG when new failure modes are documented.*

| Symptom | Root Cause | Fix |
|---------|-----------|-----|
| Muddy, compressed mix | Spectral crowding from overloaded instrument list | Step 1: ≤2 instrument tokens + spatial keywords. Step 3: Cover No Style |
| Structure drifts mid-track | Missing/inconsistent section tags | Re-paste identical tagged sheet at every lyrics-bearing step |
| Stems/Voices unavailable on compiled track | End-extend run on wrong node | Re-run end-extend on Get Whole Song compiled output |
| Weak vocal presence | Competing style keywords burying vocal frequency | Step 5: vocal-only style, zero instrument tokens |
| Suno ignores style prompt | Style token overload | Strip to ≤4 total tokens, lead with vocal descriptor |
| Transition artifacts at stitch points | Contrasting-style extensions stitched without smoothing | Cover: No Style on Get Whole Song compiled output |
| Mode switch click does nothing | React not responding to .click() or MouseEvent on mode dropdown | VNR-BUG-004 — blocked on DOM screenshot |
| Vault empty between steps despite successful grab | SunoShield extension blocking localStorage writes silently | VNR-BUG-005 — add safeLocalStorageSet/Get with memory fallback |

---

## SESSION LOG
*Append entries. Never delete.*

| Date | Action | Who | Notes |
|------|--------|-----|-------|
| 2026-06-16 | Repo created | AG | Initial method docs pushed to cybergod-duck/suno-enhanced |
| 2026-06-17 | GitHub connector authorized | User | Perplexity now has live read access to repo |
| 2026-06-17 | Handoff file created | Perplexity | Communication tunnel opened |
| 2026-06-17 | Robust mode-select & element polling implemented | AG | Fixed Extend mode auto-selection via direct tab clicks, scoped element searches, glyph-stripping, and waitForElement polling. Zipped & pushed to GitHub. |
| 2026-06-17 | Fixed runGenesis prompt cropping bugs (VNR-BUG-001) | AG | Updated runGenesis to use prompts and lyrics exactly as-is without token reconstruction or wrapping. Zipped & pushed to GitHub. |
| 2026-06-17 | VNR-BUG-002 diagnosed | Perplexity | Vault textarea 38px CSS clips lyrics visually; style field is <input> and can't show multi-line prompts. localStorage intact. Two-line CSS+HTML fix documented. |
| 2026-06-17 | VNR-BUG-002 patched | AG | Applied style dropdown input to textarea and 80px resizable CSS height fix for both fields. Zipped & pushed to GitHub. |
| 2026-06-17 | VNR-BUG-003 diagnosed | Perplexity | Three-part Step 2 Extend failure: panel entry point, timing race, React keyboard flush. All three fixes documented. |
| 2026-06-17 | VNR-BUG-003 patched | AG | Applied three-part fix (clip card scan, timing bumps, React keyboard state flush), and changed extend inputs to "0:01" and "0:06". Zipped & pushed. |
| 2026-06-17 | Late night brief injected | Perplexity | Full AG brief integrated: DOM map (range slider confirmed, mode dropdown unknown), SunoShield conflict documented as VNR-BUG-005, slider injection pattern corrected, product roadmap added, VNR-BUG-004 (mode switch React failure) formally filed. |

---

*VNR — Compiled 2026-06-17*
