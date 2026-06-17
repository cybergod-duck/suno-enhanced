# ⚡ SUNO LIVE PIPELINE SESSION — Complete Documented Walkthrough
### March 6, 2026 | Account: the_duck | Starting Credits: 9,235 | Ending Credits: 9,095

---

## OVERVIEW

This document captures a **complete, live-documented Suno workflow session** from raw audio upload through Legacy Editor surgery, iterative covers, and text-only generation. Every step was observed via screenshots and annotated in real time.

**Track Name:** Zero-One-Eternal  
**Artist:** The Duck  
**Model:** v5  
**Total Steps:** 18+  
**Total Credits Spent:** ~140 (9,235 → 9,095)

---

## TABLE OF CONTENTS
1. [Phase 1: Create Page — Building the Base](#phase-1-create-page--building-the-base)
2. [Phase 2: Legacy Editor — Surgical Extensions](#phase-2-legacy-editor--surgical-extensions)
3. [Phase 3: Post-Editor — Cover Techniques](#phase-3-post-editor--cover-techniques)
4. [Phase 4: Reference-Free Generation](#phase-4-reference-free-generation)
5. [Key Discoveries & Techniques](#key-discoveries--techniques)
6. [UI State Observations](#ui-state-observations)
7. [Credit Tracking](#credit-tracking)

---

## PHASE 1: CREATE PAGE — Building the Base

### Step 1: Upload Raw Audio
- **Action:** Upload raw audio file to Suno
- **Result:** Audio loaded into Create page, ready for processing
- **Duration:** Original track ~0:53

### Step 2: Remaster (Pro Feature)
- **Action:** Click ⋯ menu → Remaster
- **UI:** Remaster dialog appears with options:
  - Model selector
  - Variation Strength slider
  - Pro badge visible
- **Result:** 2 remastered variations generated
- **Cost:** 10 credits
- **Key Observation:** Remaster is distinctly different from Cover — it enhances the audio directly without requiring style input. Accessed only through the ⋯ menu, NOT the mode selector dropdown.

### Step 3: Rename Track
- **Action:** Remove "(Remastered)" tag from track name
- **Purpose:** Clean lineage tracking — prevents cluttered names as the chain grows
- **Key Observation:** Suno auto-appends tags like "(Remastered)", "Extend 1", "Cover" etc. Manual cleanup is essential for workflow clarity.

### Step 4: Extend from 0:37
- **Action:** Load remastered track → Mode: Extend → Set timestamp to 0:37
- **Result:** New audio generated continuing from the 37-second mark
- **Cost:** 10 credits
- **Key Observation:** The waveform shows KEEP (green) and RECREATE zones visually. Everything before the timestamp is preserved; everything after is regenerated.

### Step 5: Use Styles & Lyrics
- **Action:** Select "Use Styles & Lyrics" from the mode selector dropdown
- **Result:** Suno auto-populates BOTH the Lyrics and Styles boxes:
  - Lyrics: Full structured lyrics pulled from the track
  - Styles: AI-generated SIMPLIFIED style description (not the original MAX_MODE prompt)
- **Generated Style Description:** "A high-energy, futuristic electronic track blending elements of drum and bass with industrial synth-pop. The arrangement features a driving breakbeat at approximately 170 BPM, characterized by sharp, syncopated snare hits and a deep, pulsating sub-bass. Layered over the rhythm are aggressive, distorted sawtooth lead synths and shimmering digital arpeggios that create a sense of urgency..."
- **Cost:** 10 credits
- **Key Observation:** "Use Styles & Lyrics" is Suno's way of extracting its own INTERPRETATION of your music. The simplified style is what the engine actually processes — not your original verbose prompt.

### Step 6: Extend from 0:01 (The Regeneration Trick)
- **Action:** Load track → Mode: Extend → Set timestamp to 0:01
- **Result:** Essentially regenerates the ENTIRE track while preserving lineage
- **Cost:** 10 credits
- **Key Observation:** This is a power move — by keeping only 1 second of audio, you get a completely fresh take with the same lyrics/style. The track maintains its "family tree" connection to the original. Produces tracks tagged "Extend 1".

### Step 7: Get Full Song
- **Action:** Click "Get Full Song" button that appears on hover over the track
- **Result:** All extensions stitched into one complete track
- **Duration:** 4:00 (was shorter before stitching)
- **Cost:** Free (no credits consumed for stitching)
- **Key Observation:** Get Full Song is a MERGE operation, not a generation. It concatenates all extension clips into a single playable track.

### Step 8: Cover the Full Song
- **Action:** Click ⋯ menu → Cover on the 4:00 Full Song
- **Result:** 2 new Cover variations generated
- **Cost:** 10 credits
- **Key Observation:** Covering a Full Song treats the entire 4-minute track as source material. The Cover preserves melody/structure while regenerating the production. This is the PRIMARY REMASTERING TECHNIQUE.

### Step 9: Cover the Cover (Double Cover Polish)
- **Action:** Apply Cover AGAIN to the already-covered track
- **Result:** 2 more variations generated
- **Cost:** 10 credits
- **Key Observation:** Iterative covering is a legitimate strategy. Each cover pass can clean up vocals, tighten production, and refine the mix. Diminishing returns after 2-3 passes but the first double-cover is highly effective.

---

## PHASE 2: LEGACY EDITOR — Surgical Extensions

### Step 10: Open in Editor (Legacy)
- **Action:** Click ⋯ menu → Create submenu → "Open in Editor (Pro)"
- **URL:** `https://suno.com/edit-legacy/{track-id}`
- **Result:** Full editor interface loads with:

#### Editor Layout:
```
┌─────────────────────────────────────────────────────────────────────┐
│  ⋮ Edit    REPLACE SECTION    →EXTEND    ✂CROP    ✕REMOVE    🔊FADE OUT    [Edit in Studio] [✕] │
├──────────────────┬──────────────────┬───────────────────────────────┤
│     LYRICS       │     STYLES       │         EDITS                │
│                  │                  │                               │
│ Section headers  │ AI-generated     │ "No edits yet.               │
│ as colored bars: │ style desc.      │  Extensions and replacements │
│                  │                  │  will appear here!"           │
│ 🟠 INTRO –      │ (scrollable      │                               │
│  SPARKLING...    │  text area)      │                               │
│                  │                  │                               │
│ Lyrics text...   │ ─────────────── │                               │
│                  │ EXCLUDE STYLES   │                               │
│ 🟢 VERSE 1 –    │ "Describe styles │                               │
│  QUADRANT...     │  to avoid..."    │                               │
│                  │                  │                               │
│ 🩷 CHORUS –     │                  │                               │
│  MULTITRACKED..  │                  │                               │
├──────────────────┴──────────────────┴───────────────────────────────┤
│  "Drag the start of the selection to pick a point to extend from." │
│                                           From: 02:58.00           │
│                                     [Generate Extensions]          │
├─────────────────────────────────────────────────────────────────────┤
│ TIMELINE                                                            │
│ ┌──────┬──────────┬──────────┬──────────┬──────────┬──────────┐    │
│ │INTRO │ VERSE 1  │ CHORUS   │ CHORUS   │ BRIDGE   │ FINAL    │    │
│ │SPARK │ QUADRANT │ MULTI-   │ REPEAT   │ HALF-    │ CHORUS   │    │
│ │ARP.. │ MOSAIC.. │ TRACKED..│ BRIGHT.. │ TIME..   │ PEAK..   │    │
│ └──────┴──────────┴──────────┴──────────┴──────────┴──────────┘    │
│ (green) (light)    (pink)     (gray)     (orange)   (yellow)       │
├─────────────────────────────────────────────────────────────────────┤
│ Zero-One-Eternal  | 🧑 The Duck | 00:06 / 03:13    ▶  [−] [+]     │
└─────────────────────────────────────────────────────────────────────┘
```

#### Editor Tools (Top Bar):
| Tool | Function |
|------|----------|
| **REPLACE SECTION** | Replace a specific section of the song |
| **EXTEND** | Generate new audio from a timestamp |
| **CROP** | Trim/cut sections (Pro) |
| **REMOVE** | Remove a section |
| **FADE OUT** | Add fade out effect |
| **Edit in Studio** | Switch to the new Studio editor |

#### Key Editor Features:
- **Visual Timeline:** Color-coded section blocks with labels (Intro, Verse 1, Chorus, etc.)
- **Lyrics Panel:** Section headers displayed as colored bars (🟠 orange, 🟢 green, 🩷 pink)
- **Styles Panel:** Full AI-generated description + "EXCLUDE STYLES" sub-section
- **EDITS Panel:** Tracks generated extensions/replacements for preview before applying
- **Precise Timestamp:** Set exact extend point down to hundredths of a second (e.g., 02:58.00)
- **"LOADING SONG STRUCTURE..."** message appears when the editor is re-parsing a track

### Step 11: Editor Extension #1 — From End (02:58)
- **Action:** Set From: 02:58.00 → Click "Generate Extensions"
- **Result:** 2 extensions appear in EDITS panel as "GENERATING" (with spinners)
- **Cost:** 10 credits
- **Track Duration Before:** 03:13

#### Extension Preview:
- Click an extension in EDITS panel to **preview** it
- Timeline shows the extension overlaid on the original
- Action bar appears: **[Apply Extension]** | **[Cancel Preview]**
- The preview is non-destructive — nothing changes until you Apply

#### Applying Extension #2:
- **Action:** Selected Extension #2 → Clicked "Apply Extension"
- **Result:**
  1. New track version created (NEW URL with different track ID)
  2. Timeline shows "LOADING SONG STRUCTURE..." while re-parsing
  3. EDITS panel CLEARS — "No edits yet."
  4. Track duration: 03:13 → **03:23** (added ~10 seconds)
  5. **No additional credits spent** (generation was the cost, applying is free)

### Step 12: Editor Extension #2 — From Beginning (00:06)
- **Action:** Set From: 00:06.00 → Generate Extensions → Apply top extension
- **Result:** New track version, duration: 03:23 → **03:35** (added ~12 seconds)
- **Cost:** 10 credits (for generation)
- **Key Observation:** Extending from near the beginning regenerates almost everything after the intro while keeping the opening 6 seconds intact.

### Step 13: Editor Extension #3 — From Middle, NO STYLES (01:20)
- **Action:** CLEARED the Styles box → Set From: 01:20.73 → Generate Extensions → Apply #2
- **Result:** 
  - New track version, duration: **03:35 → 03:23** (went BACK down!)
  - URL changed to new track ID
- **Cost:** 10 credits
- **Key Discovery — Mid-Song Extensions Replace Content:**
  When you extend from a mid-song point, it doesn't INSERT audio — it REGENERATES everything from that point to the end. This means the extension REPLACED the last ~2 minutes of the song. The track got shorter because the new generated material was shorter than what it replaced.
- **Key Discovery — No-Style Extensions:**
  Clearing the Styles box before generating forces Suno to interpret the audio context purely from the audio itself. No text guidance = organic AI interpretation. The editor STYLES box controls this independently from the Create page styles.

### Step 14: Editor Extension #4 — From Final Chorus (02:36), FINAL
- **Action:** Set From: 02:36.36 (Final Chorus section) → Generate Extensions → Apply #2
- **Result:** New track version, duration: 03:23 → **03:20** (slight trim)
- **Cost:** 10 credits
- **Key Observation:** Extending from just before the Final Chorus regenerates the ending. The new ending was slightly shorter than the original.

### Closing the Editor:
- **Action:** Clicked ✕ (close button) in top right corner of editor
- **Result:** Redirected to Create page (`https://suno.com/create?codr=1`)
- All track versions visible in the workspace list
- Left panel reset to blank Create state

---

## PHASE 3: POST-EDITOR — Cover Techniques

### Step 15: Cover with No Style
- **Action:** Loaded the 3:20 editor-finished track → Mode: Cover → CLEARED the Styles box → Create
- **Result:** 2 Cover tracks generated, both tagged **(no styles)** in the track list
- **Cost:** 10 credits
- **Key Discovery:** Suno explicitly labels tracks generated without style guidance as "(no styles)" in the workspace. This is visible metadata you can use to identify these variants.

### Step 16: Batch No-Style Covers (x3 more)
- **Action:** Clicked Create 3 more times with empty styles
- **Result:** 6 more "(no styles)" Cover tracks
- **Cost:** 30 credits
- **Key Observation:** Rapid-fire covering creates a large batch of variations. Each pair costs 10 credits. The idea: generate many variants and pick the best one. This is the "lottery ticket" approach applied to covers.

### Step 17: Cover WITH Style Restored
- **Action:** Put a new style description back in the Styles box → Create
- **Style Used:** "Pulsing synth bass and distorted digital drums launch the track, joined by searing arpeggiated synths and aggressive glitch effects. Metallic percussion drives rapid-fire rhythms. Hyperspeed drops and dynamic builds pulse with layered leads, creating a relentless, electrifying cyberpunk energy."
- **Result:** 2 new Cover tracks with the style description visible in the track list (NOT tagged "no styles")
- **Cost:** 10 credits
- **Key Discovery — A/B Testing Workflow:** By generating covers both WITH and WITHOUT styles, you create a comparison set. No-style covers let Suno freestyle; styled covers pull the sound toward your intended aesthetic. Pick the best from each batch.

---

## PHASE 4: REFERENCE-FREE GENERATION

### Step 18: Remove Reference Track → Create From Scratch
- **Action:** Clicked the 🗑️ trashcan icon next to the loaded reference audio → then hit Create
- **Result:**
  1. **Audio section DISAPPEARS** — no waveform, no Cover/Extend mode selector
  2. Create panel shows only Lyrics + Styles (pure text-to-music)
  3. **NEW SONG TITLE GENERATED:** "Eternity-Zero-1" (Suno auto-generates a new name!)
  4. Same lyrics and style description used
  5. 2 new tracks generated as "Eternity-Zero-1"
- **Cost:** 10 credits
- **Key Discovery:** Removing the reference track converts the Create page from "remix mode" to "genesis mode." Same lyrics + same style but NO audio reference = a completely independent generation. Suno even gives it a new name. This is how you create variant songs from the same source material — different productions, different vocal deliveries, different arrangements, all sharing the same lyrical DNA.

---

## KEY DISCOVERIES & TECHNIQUES

### 1. The Editor Apply Cycle
Each "Apply Extension" in the Legacy Editor:
1. Creates a **new track version** with a new URL/track ID
2. **Bakes the extension** into the track permanently
3. **Clears the EDITS panel** for the next round
4. **Re-loads the song structure** ("LOADING SONG STRUCTURE...")
5. **Does NOT cost additional credits** (you pay at generation, not application)

### 2. Mid-Song Extensions = Replace (Not Insert)
When extending from a point in the middle of a song, Suno **replaces everything** from that point to the end. It does NOT insert new material between existing sections. This means:
- Track can get SHORTER if the replacement is shorter than the original
- You're effectively rebuilding the back half of the song
- This is functionally equivalent to "Replace Section" for everything after the extend point

### 3. No-Style Technique
Clearing the Styles box before generating (in both Editor and Create page) forces Suno to:
- Interpret audio context purely from the waveform
- Make its own creative decisions without text constraints
- Results labeled "(no styles)" in the track list
- Useful for discovering what Suno "hears" in your track organically

### 4. Style Restoration After Apply
After applying an extension in the Editor, the Styles panel re-populates with the original AI-generated description. This is automatic — the style metadata travels with the track.

### 5. Double/Triple Cover Polish
Covering a covered track is a legitimate remastering technique. Each pass can:
- Clean up vocals
- Tighten production
- Refine the mix
- Effective through 2-3 iterations before diminishing returns

### 6. The Reference Track Trashcan
Clicking 🗑️ next to the loaded audio reference:
- Removes the audio from the Create panel
- Converts from remix mode to generation mode
- Preserves lyrics and styles
- Suno generates a completely new song title
- Creates an independent generation — not a remix/cover

### 7. Lineage Tags
Suno auto-tags tracks with their generation type:
| Tag | Meaning |
|-----|---------|
| **Extend 1** | Generated via Extend |
| **Cover** | Generated via Cover |
| **Full Song** | Stitched via Get Full Song |
| **(no styles)** | Generated without style guidance |
| **(Remastered)** | Generated via Remaster |
| **v5** | Model version used |

---

## UI STATE OBSERVATIONS

### Editor Section Color Coding
| Color | Section Type |
|-------|-------------|
| 🟢 Green | Intro |
| Light/Neutral | Verse |
| 🩷 Pink/Magenta | Chorus |
| Gray | Chorus Repeat |
| 🟠 Orange | Bridge |
| 🟡 Yellow/Orange | Final Chorus / Outro |

### Editor EDITS Panel States
| State | Meaning |
|-------|---------|
| **SUBMITTED** | Extension request sent to server |
| **QUEUED** | Waiting in generation queue |
| **GENERATING** | Currently being generated (spinner) |
| **Ready** | Generation complete, clickable for preview |
| *Empty* | "No edits yet. Extensions and replacements will appear here!" |

### Create Page Mode Indicators
| Mode | Audio Loaded? | Style Box | What Happens |
|------|--------------|-----------|-------------|
| **Cover** | ✅ Yes | You control | Regenerates with audio reference |
| **Cover (no styles)** | ✅ Yes | EMPTY | Pure audio-driven regeneration |
| **Extend** | ✅ Yes | Optional | Continues/replaces from timestamp |
| **Generation** | ❌ No (trashed) | You control | Brand new song from text only |

---

## CREDIT TRACKING

| Step | Action | Credits Spent | Running Total |
|------|--------|--------------|---------------|
| 1 | Upload | 0 | 9,235 |
| 2 | Remaster | 10 | 9,225 |
| 3 | Rename | 0 | 9,225 |
| 4 | Extend from 0:37 | 10 | 9,215 |
| 5 | Use Styles & Lyrics | 10 | 9,205 |
| 6 | Extend from 0:01 | 10 | 9,195 |
| 7 | Get Full Song | 0 | 9,195 |
| 8 | Cover Full Song | 10 | 9,185 |
| 9 | Cover the Cover | 10 | 9,175 |
| 10 | Open Editor | 0 | 9,175 |
| 11 | Editor Extend #1 (02:58) | 10 | 9,165 |
| 12 | Editor Extend #2 (00:06) | 10 | 9,155 |
| 13 | Editor Extend #3 (01:20, no styles) | 10 | 9,145 |
| 14 | Editor Extend #4 (02:36, final) | 10 | 9,135 |
| 15 | Cover (no styles) | 10 | 9,125 |
| 16a | No-style Cover batch x1 | 10 | 9,115 |
| 16b | No-style Cover batch x2 | 10 | 9,105 |
| 16c | No-style Cover batch x3 | 10 | 9,095* |
| 17 | Cover (with style restored) | 10 | ~9,095 |
| 18 | Create from scratch (no ref) | 10 | ~9,095 |

*Note: Exact final credit count confirmed at 9,095 in last screenshot. Some batch operations may have overlapped in timing.*

**Total Credits Spent: ~140 credits**  
**Tracks Generated: ~30+ versions** (2 per generation × 15+ generations)

---

## TRACK VERSION LINEAGE

```
Raw Upload (0:53)
  └── Remaster (Pro) → 2 variations
        └── Rename → clean title
              └── Extend from 0:37 → 2 variations
                    └── Use Styles & Lyrics → 2 new songs
                    └── Extend from 0:01 → 2 variations (regeneration trick)
                          └── Get Full Song (stitch to 4:00)
                                └── Cover #1 → 2 variations
                                      └── Cover #2 (double polish) → 2 variations
                                            └── Editor (Legacy)
                                                  ├── Extend from 02:58 → Apply #2 → 03:23
                                                  ├── Extend from 00:06 → Apply top → 03:35
                                                  ├── Extend from 01:20 (no styles) → Apply #2 → 03:23
                                                  └── Extend from 02:36 → Apply #2 → 03:20
                                                        └── Close Editor
                                                              ├── Cover (no styles) x4 → 8 variations
                                                              ├── Cover (with style) → 2 variations
                                                              └── 🗑️ Remove ref → Create from scratch
                                                                    └── "Eternity-Zero-1" → 2 new songs
```

---

## THE COMPLETE GOD MODE PIPELINE (Summary)

### CREATE PAGE PHASE:
```
1. Upload raw audio
2. ⋯ → Remaster (Pro, Normal strength)
3. Rename (clean lineage)
4. Extend from specific timestamp (continuation lyrics)
5. Use Styles & Lyrics (extract AI interpretation)
6. Extend from 0:01 (the regeneration trick)
7. Get Full Song (stitch all extensions)
8. Cover the Full Song (first remaster pass)
9. Cover the Cover (double polish)
```

### EDITOR PHASE:
```
10. ⋯ → Open in Editor (Legacy, Pro)
11. EXTEND from end → preview → Apply (grows track)
12. EXTEND from beginning → Apply (regenerates body)
13. EXTEND from middle (no styles!) → Apply (replaces back half organically)
14. EXTEND from Final Chorus → Apply (rebuilds ending)
15. Close Editor (✕) → back to Create page
```

### FINISHING PHASE:
```
16. Cover with NO styles (organic AI reinterpretation)
17. Cover batch (3-4 more no-style runs for variety)
18. Cover WITH style restored (controlled reinterpretation)
19. 🗑️ Remove reference → Create from scratch (new song from same DNA)
```

---

*Live-documented March 6, 2026 at 1:00-1:48 AM EST*  
*From the Voss Neural Research LLC Suno Lab*  
*Account: the_duck | Model: v5*  
*All screenshots archived in artifacts directory*
