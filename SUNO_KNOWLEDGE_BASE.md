# Suno v5.5 Knowledge Base
**Voss Neural Research LLC — VNR Production Intelligence**
*Compiled 2026-06-16 | Create Workspace Only | v3/v4 excluded*

---

## 1. Platform Architecture

Suno v5.5 is a hybrid autoregressive + latent audio diffusion model. It processes three input streams:

1. **Lyrics** — tokenized as natural language; section tags function as energy-level markers
2. **Style prompt** — tokenized as genre/timbre/production metadata; **front-weighted** (early tokens dominate inference)
3. **Audio conditioning** (Cover/Sample only) — physical waveform fed as a diffusion conditioning signal

**Front-weighted token attention** is the mechanical basis for the vocal-first prompt strategy. Tokens at the start of the Style field carry exponentially more weight than those at the end.

---

## 2. Workflow Tiers

| Target | Actions | Net Credits | Use Case |
|--------|---------|-------------|---------|
| Acceptable quality | 3 | ~15 | Demo, reference track |
| Studio quality | 6 | ~25 | Final release |
| Studio quality (stitched) | 7 | ~30 | Multi-extend compiled tracks |

The 15-step chain is a genre-morphing production rig. Not the quality floor.

---

## 3. The 6-Step Optimal Path — Mechanical Detail

### Step 1 — New Song (Custom Mode)
Lyrics: Full tagged sheet. Style: Vocal-first sparse template.
Establishes compositional anchor. Spectral crowding prevention begins here.

### Step 2 — Extend @ 0:01 (Style Blank)
Lyrics: Identical — do not edit. Style: Blank.

**Acoustic DNA Inheritance Mechanism:**
1. Model reads 1-second seed from parent track
2. NLP layer receives no style tokens — cannot override the audio signal
3. Acoustic characteristics (root key, tempo, spectral envelope, tonal center) extracted from seed
4. Full arrangement generated from measure one, conditioned entirely on audio seed
5. Result inherits parent's production DNA without re-interpreting or overriding it

### Step 2.5 — Extend @ 0:06 (Optional — Vocal Lock)
Lyrics: New or identical. Style: Blank — NEVER use style at 0:06.
Use only when Step 2 has strong instrumentals but weak vocal delivery.
Hard rule: 0:01 = style reinforcement anchor. 0:06 = vocal performance lock. Not interchangeable.

### Step 3 — Cover: No Style
Lyrics: Identical. Style: Blank.
Forces model to read only the physical waveform. Strips spectral crowding, phase seams, and mix compression from the chain. Waveform-only remaster pass.

### Step 4 — Extend from End: Nothing
Lyrics: Blank. Style: Blank.
Zero-conditioning extension at file tail. Outputs ~2 seconds of silence, credits refunded.
Re-registers file's metadata index as native v5.5 asset, unlocking stems, Voices, and full v5.5 feature flags.

**SEQUENCING WARNING:** Must run on a fully compiled file (Get Whole Song output). Running on uncompiled Cover registers incomplete dependency tree — stems/Voices/v5.5 flags inherit from wrong node.

### Step 5 — Cover: Vocal-First Simple Style
Lyrics: Identical tagged sheet from Step 1. Style: Vocal descriptor only — zero instrument keywords.
Simplified prompt directs internal mixer to push dynamic range toward vocal clarity. Backing drops in volume and frequency space.

### Step 6 — Remaster
True export ceiling. Strips synthetic HF noise and dynamic compression from generation chain.
Cost: ~5 credits, not refunded. Not optional. Not stylistic.

---

## 4. UI Execution Sequence

```
Create → Custom Mode → [tagged lyrics + sparse style] → CREATE → pick best take
→ Remix/Edit → Extend → slider 0:01 → clear Style → CREATE
→ (optional) Extend → slider 0:06 → clear Style → keep/new Lyrics → CREATE
→ Cover → clear Style → keep Lyrics → CREATE
→ Extend → slider to END → clear both fields → CREATE  (credits refund)
→ Cover → re-paste tagged Lyrics → vocal-only Style → CREATE
→ Remaster → CREATE → export
```

---

## 5. Stitched-Chain Branch (7 Actions)

Required when any Get Whole Song compile was used.

```
Steps 1–2 → [Extend chain] → Get Whole Song (free)
  → Cover: No Style
  → Extend from End: Nothing    (must run on compiled output)
  → Cover: Vocal-First Simple Style
  → Remaster
```

---

## 6. Prompt Engineering

### Genesis Style Template (Step 1)
```
[vocal descriptor], [delivery], upfront — [genre], [BPM], spacious mix, vocal-forward, minimalist production
```

Hard limits:
- ≤2 instrument tokens in the entire Style field
- No layered genre stacking
- Mandatory spatial keywords: spacious mix, vocal-forward, minimalist production

Examples:
```
warm male baritone, intimate delivery, upfront — folk rock, 72 BPM, spacious mix, vocal-forward, minimalist production

breathy female alto, close-mic whisper, upfront — dream pop, 90 BPM, spacious mix, vocal-forward, acoustic guitar only
```

### Final Cover Style Template (Step 5)
```
warm [gender] [voice type], [delivery], clear upfront, compressed vocals — minimal [genre]
```

Zero instrument keywords. Vocal descriptors lead entirely.

Examples:
```
warm male baritone, intimate delivery, clear upfront, compressed vocals — minimal folk

breathy female alto, close-mic delivery, clear upfront, compressed vocals — minimal dream pop
```

### Technical Mixing Keywords
Suno's training data includes professionally produced music. These terms activate cleaner internal mixing algorithms:

compressed vocals | tape saturation | analog warmth | broadcast quality | spacious mix | vocal-forward | minimalist production | quiet acoustic arrangement | room mic warmth | negative space

---

## 7. Lyrics Engineering

### Mandatory Section Tags
```
[Intro]
[Verse 1]
[Pre-Chorus]    (optional)
[Chorus]
[Verse 2]
[Bridge]        (optional)
[Chorus]        (repeat)
[Outro]
```

### Lyric Immutability Rule
- Do NOT edit lyrics between Steps 1–3
- At Step 5, re-paste the identical tagged sheet from Step 1
- Step 4 blanks lyrics by mechanical requirement; Step 5 re-anchors structure
- When running Cover: Just Lyrics (Step 13), match new lyrics to original syllable count and rhythmic flow

---

## 8. Failure Mode Reference

| Symptom | Root Cause | Fix |
|---------|-----------|-----|
| Muddy, compressed mix | Spectral crowding — overloaded instrument list | Step 1: ≤2 instrument tokens + spatial keywords. Step 3: Cover No Style |
| Song structure drifts mid-track | Missing or inconsistent section tags | Re-paste identical tagged sheet at every lyrics-bearing step |
| Stems/Voices unavailable on compiled track | End-extend run on uncompiled Cover | Re-run end-extend on Get Whole Song output |
| Weak vocal presence | Competing style keywords burying vocal frequency | Step 5: vocal-only style, zero instrument tokens |
| Suno ignores style prompt | Style token overload | Strip to ≤4 total tokens, vocal descriptor leads |
| Transition artifacts at stitch boundaries | Contrasting-style extends without smoothing pass | Cover: No Style on compiled Get Whole Song output |
| Structural breakdown in long tracks | No section tags or drift from parent | Use By Line Generation for micro-control; re-anchor tags at each extend |
| Unnatural robotic vocal delivery | Lyrics not matched to melody contour | Match new lyrics to original syllable count in Cover: Just Lyrics |

---

## 9. Control Parameters Reference

| Parameter | UI Location | Sweet Spot | At 0.0 | At 1.0 |
|-----------|------------|-----------|--------|--------|
| Audio Influence | Cover/Sample Workspace | 0.70–0.90 | Ignores source waveform | Strict waveform adherence |
| Style Influence | Advanced Options | Default | High model freedom | Rigid style lock |
| Weirdness | Advanced Options | Low | Conventional structures | Chaotic, experimental |
| Vocal Gender | Advanced Options | Toggle | Neutral generation | Forced gender probability |

---

## 10. Personalization Features (v5.5 Create)

### Voices (Formerly Personas)
Controls vocal timbre, dynamic range, breath texture.
Input: 30s–4m clean a cappella or stem-separated vocal.
Verification: Suno matches singing voice to random spoken phrase before saving.
Access: Pro/Premier only.
Note: Step 4 metadata re-index required before Voices can be cleanly applied to multi-step chains.

### Custom Models
Controls composition structure, chord progressions, style bias.
Input: Minimum 6 original, copyright-owned, style-consistent tracks.
Training time: 2–5 minutes.
Access: Pro/Premier only.

### My Taste / Magic Wand
Expands brief style keywords into detailed personalized prompts based on creation and listening history.
Access: All tiers — auto-tracking, always on.
When to use: Step 14 of the 15-step chain — use instead of manual vocal-first style at Step 5 when personalization is the priority.
Note: Redundant if Step 5 vocal-first prompt is written correctly.

---

## 11. 15-Step Chain Segment Reference

### Skippable for Single-Genre Songs

| Steps | Function | Why Skippable |
|-------|---------|-------------|
| 2–3 | Wordless cover → style cover | Genre-morph only |
| 5–6 | Additional 0:01 style/lyric passes | Arrangement sculpting only |
| 7, 10 | Get Whole Song compiles | Free stitch — no quality function on linear chains |
| 8–10 | Reuse Style & Lyrics → 0:01 both → Full Song | Melodic variation, not polish |
| 13 | Cover just lyrics | Lyric-replacement surgery only |
| 14 | Magic Wand style | Redundant with correct Step 5 |

### When to Add Chain Segments

| Goal | Segment |
|------|---------|
| Genre transformation mid-pipeline | Steps 2–3 (wordless cover → style cover) before 0:01 Extend |
| Second melodic take, same lyrics | Step 8 (Reuse Style & Lyrics) as a branch |
| Lyric replacement without re-arranging | Step 13 (Cover: Just Lyrics) |
| My Taste personalization | Step 14 (Magic Wand) |

---

## 12. Credit Economy

| Action | Cost | Notes |
|--------|------|-------|
| Create (Custom Mode) | ~5 credits | 2 variations per trigger |
| Get Whole Song | Free | Compiler stitch |
| Extend from End: Nothing | Refunded | ~2 sec silent tail |
| Remaster | ~5 credits | Not refunded — mandatory |
| Simple Mode | ~5 credits | Avoid — uncontrolled output |

---

## 13. Platform Behavior Patterns (VNR Documented)

- **Output variability is structural, not random.** Suno produces two variations per Create. Select the cleaner take before proceeding. Never extend from both.
- **Simple Mode produces uncontrolled output.** Less conditioning surface. Custom Mode is mandatory for deterministic results.
- **Section tags manage energy.** The model reads [Chorus] as high-energy signal and [Outro] as decay signal. Missing tags cause structural drift and energy anomalies mid-track.
- **Spectral crowding is a genesis problem.** It cannot be fixed post-generation by prompting. Prevent at Step 1 (≤2 instrument tokens). Repair at Step 3 (Cover: No Style).
- **Suno's training data is professionally produced music.** Studio terminology in the Style field activates cleaner mixing behavior because the model associates these descriptors with high-quality outputs from training.
- **By Line Generation gives micro-level vocal control.** Splits lyrics line-by-line into individual audio clips. Use when standard generation produces inconsistent phrasing on specific lines.

---

*Voss Neural Research LLC | Compiled 2026-06-16*
*Create workspace only. v3/v4 techniques excluded.*
