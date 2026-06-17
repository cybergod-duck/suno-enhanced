# SUNO_METHOD.md
# Voss Neural Research — Suno v5.5 Optimal Path
# Verified: June 16, 2026 | the_duck

---

## THE ONE RULE THAT KILLS EVERY EXTEND

**LYRICS FIELD MUST BE RE-PASTED ON EVERY EXTEND AND COVER.**
Leaving the Lyrics field blank = Suno regenerates as instrumental = no vocals.
This is non-negotiable. Every single Extend and Cover step requires the full tagged lyrics.

---

## 6-ACTION OPTIMAL PATH (Studio Ceiling — 25 net credits)

| Step | Action | Lyrics Field | Style Field | Extend From |
|------|--------|-------------|-------------|-------------|
| 1 | Generate (Custom) | Full tagged lyrics | Full style string | — |
| 2 | Pick best of 2 | — | — | — |
| 3 | Extend @ 0:01 — DNA lock | **RE-PASTE full tagged lyrics** | **BLANK** | 00:01.0 |
| 2.5 | Extend @ 0:06 — vocal lock (optional) | **RE-PASTE full tagged lyrics** | **BLANK** | 00:06.0 |
| 4 | No-Style Cover | **RE-PASTE full tagged lyrics** | **BLANK** | — |
| 5 | Remaster — mandatory ceiling | — | v5.5 Normal | — |

---

## WHAT EACH STEP DOES

**0:01 DNA Lock (Step 3)**
Discards everything after the 1-second seed. Forces full regeneration
from clean acoustic conditioning. Lyrics field is the DNA blueprint —
WITHOUT lyrics pasted, Suno generates instrumental only.

**0:06 Vocal Lock (Step 2.5 — optional)**
Keeps the first 6 seconds of established vocal performance.
Use when Step 3 gave good instrumental but weak vocals.
NOT interchangeable with 0:01. Lyrics re-pasted, style blank.

**No-Style Cover (Step 4)**
Strips spectral crowding and rebuilds sonic identity.
Full tagged lyrics MUST be re-pasted or output has no vocals.
Style field BLANK — this is the "No-Style" requirement.

**Remaster (Step 5)**
The true export ceiling. Strips synthetic HF noise and chain compression.
Always run last. Always v5.5, Normal strength. NOT optional.

---

## STEP-BY-STEP UI EXECUTION

### STEP 1 — GENERATE
1. Go to suno.com/create
2. Mode: **Custom** (NEVER Simple)
3. Paste full tagged lyrics into Lyrics field
4. Paste full style string into Styles field
5. Hit Create → 2 clips render
6. Cost: 10 credits

### STEP 2 — PICK BEST CLIP
Listen to both. Pick the better one.

### STEP 3 — EXTEND @ 0:01 (DNA Lock)
**UI Path (verified):**
1. Hover winning clip in workspace → click Remix button
2. Panel loads in Cover mode — click the Cover dropdown
3. Select Extend from the dropdown
4. Waveform appears with KEEP/RECREATE slider

**Fields:**
- Extend from: triple-click field → type 00:01.0 → press Tab
- Lyrics: **RE-PASTE full tagged lyrics** (click field, Ctrl+A, delete, paste)
- Styles: **BLANK** (click field → Ctrl+A → Backspace → grey placeholder only)

Hit Create. Cost: 10 credits. Pick best of 2.

### STEP 2.5 — EXTEND @ 0:06 (Vocal Lock — optional)
Same UI path as Step 3, but:
- Extend from: 00:06.0
- Lyrics: RE-PASTE full tagged lyrics
- Styles: BLANK
Cost: 10 credits. Pick best of 2.

### STEP 4 — NO-STYLE COVER
**UI Path (verified):**
1. Hover winning clip → click Remix button
2. Panel loads in Cover mode — STAY in Cover mode
3. Lyrics: **RE-PASTE full tagged lyrics** (critical)
4. Styles: **BLANK** — clear completely (Ctrl+A → Backspace)
Hit Create. Cost: 10 credits. Pick best of 2.

### STEP 5 — REMASTER (Mandatory)
**UI Path (verified):**
1. Click ... on winning clip
2. Hover Edit → click Remaster (NOT in Remix submenu — Edit only)
3. Model: v5.5
4. Variations strength: Normal
5. Click Remaster
Cost: 5 credits net. Pick best of 2 — this is your final song.

---

## HOW TO ACCESS EXTEND IN THE UI (v5.5)

| Starting point | Path |
|---------------|------|
| Workspace hover (Remix button) | Remix → panel opens in Cover → click Cover dropdown → Extend |
| Song page | Click Remix button (bottom right) → select Extend |
| Already in panel | Click mode dropdown at top of Audio panel → Extend |

⚠️ Remix from workspace ALWAYS loads Cover mode first.
ALWAYS check the mode dropdown before setting fields.

---

## HOW TO RELIABLY CLEAR THE STYLES FIELD

The shuffle icon REFILLS with random styles — NEVER click it.
Correct method:
1. Click inside Styles text field
2. Press Ctrl+A
3. Press Backspace
4. Verify: only grey placeholder text = field is empty

---

## CREDIT BUDGET

| Path | Steps | Credits |
|------|-------|---------|
| 3-action minimal | Gen + Extend + Remaster | 15 |
| 6-action optimal | Gen + Extend + (2.5) + Cover + Remaster | 25 net |
| 7-action stitched | Above + Get Whole Song compile | 30 net |

---

## WHAT NOT TO DO (HARD LESSONS)

| Mistake | Consequence | Fix |
|---------|-------------|-----|
| Blank Lyrics on Extend | Instrumental output, no vocals | Always re-paste full tagged lyrics |
| Blank Lyrics on Cover | No vocals in output | Always re-paste full tagged lyrics |
| Clicking style shuffle icon | Fills with random unrelated styles | Ctrl+A + Backspace only |
| Remastering a no-lyrics output | Remaster of an instrumental | Trace back to last output WITH vocals |
| Leaving Extend from at default | Extends from middle, not DNA lock | Always set 00:01.0 manually |
| Using Simple mode | No lyric control | Custom mode always |

---

## ACTIVATING LILA SUNOFORGE OMEGA v2.2

Paste the Primary block from LILA_SunoForge_Omega_v2_2_12k_fit.md
as the System Prompt in any LLM (Claude, GPT-4, Gemini, Comet).
Then drop a song concept — LILA generates the full production plan
with tagged lyrics, style strings, UI steps, and credit math.
You (or an agent) execute the plan in Suno.

---

## SESSION RECOVERY (paste into agent chat)

"Suno v5.5 session in progress.
Current step: [X of 6].
Active track URL: [paste URL].
Lyrics intact on current track: [yes/no].
Full tagged lyrics: [paste lyrics].
Continue Optimal P