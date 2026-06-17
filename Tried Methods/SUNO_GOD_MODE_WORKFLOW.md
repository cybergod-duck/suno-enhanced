# ⚡ SUNO GOD MODE — The Definitive Workflow (2026 Edition)
### From Zero to Radio-Quality Full Album

---

## TABLE OF CONTENTS
1. [Credit Economy & Plan Strategy](#1-credit-economy)
2. [The GMIV Prompt Formula](#2-the-gmiv-prompt-formula)
3. [Metatags & Structure Tags Bible](#3-metatags--structure-tags)
4. [The God Mode Pipeline (Step-by-Step)](#4-the-god-mode-pipeline)
5. [Covers & Style Transfer](#5-covers--style-transfer)
6. [Persona & Vocal Cloning](#6-persona--vocal-cloning)
7. [Song Extension (The Sequel Method)](#7-song-extension)
8. [Full Album Workflow](#8-full-album-workflow)
9. [Post-Production & DAW Integration](#9-post-production)
10. [Power User Tips & Anti-Patterns](#10-power-user-tips)

---

## 1. Credit Economy

| Plan | Cost | Credits/Month | Songs/Month | Commercial Use |
|------|------|---------------|-------------|----------------|
| **Free** | $0 | 50/day (reset daily) | ~10/day | ❌ Personal only |
| **Pro** | $10/mo ($8 annual) | 2,500/mo | ~500 | ✅ Yes |
| **Premier** | $30/mo ($24 annual) | 10,000/mo | ~2,000 | ✅ Yes |

- **1 song = ~5 credits** (each generation produces 2 variations)
- Subscription credits **do NOT roll over**
- Purchased top-up credits **do NOT expire** (but require active subscription)
- **Strategy:** Use Custom Mode exclusively. Simple Mode wastes credits on uncontrolled output.

---

## 2. The GMIV Prompt Formula

Every style prompt should follow **GMIV**: Genre → Mood → Instruments → Vocals

### Example:
```
Dark Synthwave, Melancholic, Atmospheric
Analog Synth Pads, 808 Sub Bass, Ethereal Reverb
Male Baritone, Raspy, Whispered Verse, Anthemic Chorus
```

### Key Rules:
- **Be specific.** ❌ "sad song" → ✅ "Downtempo R&B, 72 BPM, Melancholic, Lo-Fi Piano, Warm Sub Bass, Female Alto, Breathy, Intimate"
- **5-8 tags per section** — more than that and Suno starts ignoring them
- **Don't name artists directly.** Describe their sonic DNA instead:
  - ❌ "sounds like The Weeknd"
  - ✅ "Dark R&B, falsetto male vocal, 80s synth textures, reverb-heavy, cinematic"
- **Avoid Suno-isms.** Words like "Neon," "Echo," "Ethereal" are overused in training data. Use concrete imagery instead.

### BPM Anchoring:
| Feel | BPM Range |
|------|-----------|
| Downtempo / Lo-fi | 60–85 |
| R&B / Soul | 80–100 |
| Pop / Dance | 110–130 |
| House / EDM | 120–130 |
| Drum & Bass | 160–180 |
| Techno | 130–150 |

Inject BPM: `"85 BPM, Downtempo Neo-Soul"`

### Chord Injection:
You can anchor harmony: `[Verse: Bm7 - F#m - Em7 - A7]`

---

## 3. Metatags & Structure Tags

### Song Structure Tags (in lyrics)
```
[Intro]
[Verse 1]
[Pre-Chorus]
[Chorus]
[Post-Chorus]
[Verse 2]
[Bridge]
[Instrumental Break]
[Solo Section]
[Build]
[Build-Up]
[Drop]
[Breakdown]
[Outro]
[End]
```

### Repeat: `[Chorus x2]`

### Vocal Control Tags
```
[raspy lead vocal]
[autotuned delivery]
[stacked harmonies]
[anthemic chorus]
[spoken word verse]
[emotional build-up]
[crowd-style vocals]
[whispered verse]
[falsetto bridge]
[belting chorus]
[screaming breakdown]
[crowd sings]
[crowd yells]
[Angry verse]
```

### Key Modulation
```
[Chorus, modulate up a key]
[Chorus, modulate down a key]
```

### Advanced Tag Stacking (pipe separator)
```
[guitar solo | 80s glam metal lead guitar | heavy distortion | wide stereo | whammy bar bends]
```

### Parentheses for Background/Ad-libs
```
(oh yeah)
(whispered: "come closer")
(background choir hums)
```

### Sound Effects in Lyrics
```
[laughter]
[thunder]
[glass breaking]
[heartbeat]
```

---

## 4. The God Mode Pipeline (Step-by-Step)

> **⚠️ UPDATED March 2026:** Suno has removed the old Cover-dropdown-Extend workflow
> and the clickable timer for precise extension points. This section reflects the
> current UI. The original 2025 method is archived in `SUNO_GOD_MODE_2025_title_cards.txt`.

### Phase 1: Genesis
1. **Custom Mode ON** — never use Simple Mode for real work
2. Write lyrics with full structure tags (`[Verse 1]`, `[Chorus]`, etc.)
3. Write the GMIV style prompt
4. **SMASH CREATE** → generates 2 variations
5. Pick the best vocal track

### Phase 2: Extend the Song
6. Click the **⋯** (three-dot) menu on your best track
7. Select **Remix/Edit** → then **Extend**
8. Use the **slider** to set which portion of the original to keep (the extension starts from there)
9. Add new lyrics for the next section (Verse 2, Bridge, etc.)
10. Adjust style prompt if needed for the new section
11. **CREATE** → generates 2 extension options
12. Pick the best one → click **"Get Full Song"** to stitch it to the original

### Phase 3: Style Transfer (Covers)
13. Click **⋯** on your finished track → select **Cover**
14. Change the style prompt to your target genre (e.g., "EuroDisco and Hi-NRG")
15. **CREATE** → melody is preserved, style transforms
16. This doubles as a **remastering step** — covers often have cleaner vocals

### Phase 4: Iterate
17. Repeat extensions if needed (keep it to 2-3 max)
18. Cover again if quality dipped during extension
19. Use **"Continue from this song"** as an alternative to Extend — it preserves style/melody automatically

### Phase 5: Clean Up
20. Clean the title — remove any auto-appended tags
21. Download the final track (or stems if on Pro/Premier)

### Key Differences from 2025:
| Old (2025) | New (2026) |
|-----------|-----------|
| Cover dropdown → Extend | ⋯ menu → Remix/Edit → Extend |
| Click timer for exact extension point | Slider to set keep-portion |
| Manual title cleanup ("remastered", "extend", "cover") | Cleaner auto-titling (still check) |
| ~60s per generation | v4.5+ can generate up to **8 minutes** directly |
| Cover + Extend were linked | Cover and Extend are separate actions |

---

## 5. Covers & Style Transfer

> **2026 Note:** Covers are now accessed via the **⋯ menu** on any track, not a dropdown tag.

### How to Use:
1. Click **⋯** on any completed song
2. Select **Cover**
3. Change the style prompt to your target genre
4. Generate — melody stays, style transforms

### New Features (v4.5+):
- **Add Vocals:** Layer vocals onto an instrumental track
- **Add Instrumentals:** Generate backing tracks for vocal recordings
- **Inspire:** Create new songs based on a curated playlist

### Power Uses:
- Turn a ballad into a trap banger
- Convert acoustic folk into synthwave
- Genre-hop the same song across 5+ styles for an EP
- Use covers as the **remastering step** (better vocal quality on second pass)
- Covers can use **Personas** to apply a consistent vocal style

---

## 6. Persona & Vocal Cloning

### Built-in Persona (Suno Native — Updated Feb 2026)
1. Go to **Create** → **Audio** tab
2. Upload or record **20-30 seconds** of clean audio
3. Save to library
4. Create new Persona from that audio
5. Remove extraneous style tags from persona description
6. When creating songs, select your persona
7. Use **Audio Influence** slider to control vocal weight
8. **NEW:** Personas now maintain more consistent vocals across multiple tracks

### External Voice Cloning (Higher Fidelity)
1. Generate song in Suno (get the instrumental + vocals)
2. Download stems (Pro plan: vocal stem separate)
3. Train voice model on **Kits AI**, **LALAL.AI**, **Controlla Voice**, or **ElevenLabs**
   - Need 10-30 min of clean audio for training
   - Quiet environment, consistent mic
4. Upload Suno's vocal track → replace with your cloned voice
5. Mix cloned vocals + Suno instrumental in DAW

---

## 7. Song Extension — Current Method (2026)

> **⚠️ The old clickable-timer method is gone.** Extension now uses a slider.

### Direct Generation (v4.5+)
Suno v4.5+ can generate songs **up to 8 minutes** in a single pass. If your lyrics fit, you may not need to extend at all.

### Extension via ⋯ Menu
For songs that need to be longer:

1. Click **⋯** on the track → **Remix/Edit** → **Extend**
2. Use the **slider** to select how much of the original to keep
3. Add new lyrics for the continuation
4. Optionally adjust style prompt
5. **CREATE** → generates continuation options
6. Select best → **"Get Full Song"** to merge with original

### Alternative: "Continue from this song"
- Available on any track
- Preserves the original style and melody automatically
- Good for when you want the AI to take the lead on the next section

### Pro Tips:
- Each extension = 5 credits
- v4.5+ reduces the need for extensions (8-min direct gen)
- Don't extend more than 2-3 times (quality cliff still applies)
- If quality drops, **Cover** the extended version to clean it up
- If the new editor gives issues, try the **legacy editor** (reported workaround Feb 2026)

---

## 8. Full Album Workflow

### Pre-Production:
1. Define album concept, mood, and genre palette
2. Write all lyrics externally (use ChatGPT or write manually)
3. Create 2-3 persona voices that will be consistent across tracks
4. Build a **Prompt Library**: save working style prompts

### Production (per track):
1. Generate initial version (Phase 1)
2. Cover + Extend (Phase 2-3)
3. Extension polish (Phase 4)
4. Final cover (Phase 5)
5. Download stems

### Post-Production:
1. Import stems into DAW (Ableton, Logic, FL Studio)
2. Mix and master as a cohesive album
3. Add transitions between tracks
4. Master for streaming platforms (LUFS -14 for Spotify)

### Credit Budget per Album (10 tracks):
- ~50-100 generations per track (exploration + finals)
- ~250-500 credits per finished track
- **Full album: ~2,500-5,000 credits** (1-2 months of Pro plan)

---

## 9. Post-Production & DAW Integration

### Stem Separation (Pro+):
Suno can separate into: **Vocals, Drums, Bass, Melody**

### External Stem Tools (Free plan):
- **LALAL.AI** — best for vocal isolation
- **Moises** — good for full stem separation

### DAW Workflow:
1. Download stems from Suno
2. Import into DAW
3. Process each stem independently:
   - Vocals: EQ, compression, de-essing, reverb
   - Drums: Transient shaping, parallel compression
   - Bass: Sub enhancement, sidechain to kick
   - Melody: Stereo widening, delay
4. Mix to taste
5. Master chain: Limiter, EQ, Stereo imaging

### V5 Features:
- **Suno Studio** = "Generative Audio Workstation" (GAW)
- **Transpose slider** (Premier plan) for pitch adjustments
- **Lyric Synchronization** with JSON timestamp export

---

## 10. Power User Tips & Anti-Patterns

### ✅ DO:
- **Iterate fast.** Treat each generation as a lottery ticket — the more you pull, the better your winners
- **Save winning prompts.** Bookmark every style prompt that produces quality output
- **Use IPA notation** for critical pronunciation (`/ˈsɪləbəl/`)
- **Layer approach:** Genre + Tempo → Mood + Atmosphere → Instruments → Vocals
- **Genre-blend fearlessly:** "Jazz + Death Metal" or "Gregorian Chant + Trap" — Suno handles fusions well
- **Use parentheses for ad-libs:** `(oh yeah)`, `(whispered: don't stop)`
- **Clean your titles** after every generation step

### ❌ DON'T:
- Don't use Simple Mode for serious work
- Don't extend more than 3 times (quality cliff)
- Don't leave "remastered/extend/cover" in titles
- Don't overload prompts with 15+ tags (diminishing returns after 8)
- Don't use vague emotions — "sad" means nothing, "rain-soaked 3AM confession" means everything
- Don't fight Suno's strengths — if it keeps producing pop hooks, lean into it and cover into your target genre after
- Don't ignore the community — Reddit r/SunoAI and Discord have daily prompt discoveries

### 🧠 Advanced Techniques:
- **Hybrid "Flesh and Code":** Record your own chord progressions/melodies, upload as audio input, let Suno build around them
- **Hum-to-Song:** Hum a melody → Suno builds the full arrangement
- **JSON Prompting:** For maximum control, structure prompts in JSON format
- **Steganographic Lyrics:** Hide meaning in phonetic patterns the AI interprets musically
- **Credit Optimization:** A specific prompt wastes fewer credits than a vague one. Be precise = be rich.

---

*Compiled March 5, 2026 — The Overmind Project*
*Sources: SUNO GOD MODE 2025 tutorial, Suno official docs, Reddit r/SunoAI, Medium guides, power user communities*
