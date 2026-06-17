# SUNO v5.5 — Master Production System

**Studio-quality songs in 6 deliberate actions. Not guesses. Mechanics.**

*Voss Neural Research LLC · Compiled June 2026*  
*95+ research files · Multi-year reverse-engineering synthesis*

---

## What This Is

A deterministic production system for Suno v5.5's **Create workspace** — not Studio, not Simple Mode, not v3/v4 folklore.

You will learn:

- The **minimum action count** for acceptable and studio-quality output
- The **exact sequence** with field-level specifications for every step
- **Why each step exists** — mechanical reason, not "try this and see"
- The **four failure modes** that kill quality and where each is blocked
- A **complete worked example** you can run tonight
- The **15-step advanced chain** for genre morphing — and what to skip

One deliberate action = one paid **Create** trigger. Picking between two variations does not count.

---

## Table of Contents

1. [The Answer](#the-answer)
2. [How Suno v5.5 Actually Works](#how-suno-v55-actually-works)
3. [The Four Failure Modes](#the-four-failure-modes)
4. [Prompt Engineering — Before You Generate](#prompt-engineering--before-you-generate)
5. [The Method — Core Workflows](#the-method--core-workflows)
6. [Extend Anchor Rules — 0:01 vs 0:06](#extend-anchor-rules--001-vs-006)
7. [Worked Example — Glass Horizon](#worked-example--glass-horizon)
8. [Advanced Chain — 15 Steps](#advanced-chain--15-steps)
9. [Personalization Layer](#personalization-layer)
10. [Quick Reference Card](#quick-reference-card)
11. [Credit Economy](#credit-economy)

---

## The Answer

| Target | Actions | Net credits |
|--------|---------|-------------|
| **Acceptable quality** | 3 | ~15 |
| **Studio quality** | 6 | ~25 |
| **Studio quality (stitched chain)** | 7 | ~30 |

The 15-step iterative chain is a **genre-morphing production rig**, not the quality floor.

### Highest-Leverage Single Action

**Extend @ 0:01 with Style field blank.**

Discards everything after the downbeat except a 1-second seed. Overrides the default context window. Forces **acoustic DNA inheritance** (key, tempo, production texture) without re-interpreting style tokens. Regenerates the full arrangement from measure one.

### The Step Most People Skip

**Cover: No Style.**

Without it, spectral crowding, phase seams, and mix compression survive export. No post-processing recovers it.

### The True Export Ceiling

**Remaster** — after the final Cover. ~5 credits, not refunded. Without it, synthetic high-end noise and chain compression survive into the export file.

---

## How Suno v5.5 Actually Works

### Create vs Studio

The Create workspace is a **deterministic production environment**. Studio is a separate generative audio workstation with its own conditioning layer. This system runs entirely in **Create** to preserve chain lineage and predictable behavior.

### What Happens When You Hit Create

1. **NLP layer** parses Style and Lyrics. Tokens at the **start** of the Style field carry the highest weight.
2. **Autoregressive model** structures the composition — melody, arrangement, section energy.
3. **Latent diffusion** renders audio. Multiple virtual instruments compete for the same frequency bands unless you instruct otherwise.
4. **Lineage metadata** tags the output (Extend, Cover, Full Song, etc.) and links it to the parent node in the dependency tree.

### Operation Mechanics

| Operation | Audio conditioning | Text conditioning | Primary use |
|-----------|-------------------|-------------------|-------------|
| **New Song** | None | Full | Genesis |
| **Extend** | Keeps audio before timestamp; regenerates after | Optional | Continuation, 0:01/0:06 tricks, end-extend |
| **Cover** | Full waveform reference | Optional | Remaster, style shift, vocal polish |
| **Reuse Style & Lyrics** | **None** — bypasses waveform | Full | New melodic variation from text only |
| **Get Whole Song** | Stitches chain | Inherited | Compile segments into one parent |
| **Remaster** | Enhances existing audio | None | Final export ceiling |

### Control Parameters

| Parameter | Sweet spot | When |
|-----------|------------|------|
| **Audio Influence** | 0.70–0.90 | Cover / Sample only |
| **Style Influence** | Default | Advanced Options |
| **Weirdness** | Low | All studio work |
| **Vocal Gender** | Toggle in Advanced Options | Saves style characters |

---

## The Four Failure Modes

| Failure mode | Symptom | Where blocked |
|--------------|---------|---------------|
| **Spectral crowding** | Muddy chorus, compressed stereo field, digital artifacts | Step 1 sparse style (prevent) + Step 3 Cover: No Style (repair) |
| **Structural drift** | Song breaks down mid-track, wrong section energy | Tagged lyrics Steps 1–3 + re-paste at Step 5 |
| **Metadata inheritance failure** | Stems/Voices/v5.5 flags attach to wrong node | Get Whole Song before Step 4 + end-extend re-index |
| **Vocal clarity loss** | Vocal buried under instruments | Sparse vocal-first Step 1 + vocal-only Step 5 |

---

## Prompt Engineering — Before You Generate

### Step 1 Style Template (Mandatory)

```
[vocal descriptor], [delivery], upfront — [genre], [BPM], spacious mix, vocal-forward, minimalist production
```

**Hard limits:**
- ≤2 instrument tokens in the entire Style field
- No layered genre stacking, no 5–8 tag lists
- Spatial keywords are mandatory

### Step 5 Style Template (Mandatory)

```
[vocal descriptor], [delivery], clear upfront, compressed vocals — minimal [genre]
```

Zero instrument keywords. Vocal descriptors lead the field.

### Step 1 Lyrics Template (Mandatory)

```
[Intro]
[Verse 1]
[Pre-Chorus]    ← if used
[Chorus]
[Verse 2]
[Bridge]        ← if used
[Outro]
```

### Prompt Order Priority

Vocal descriptors **always lead** the Style field. The NLP layer weights early tokens heaviest.

### Space Between Technique

Spatial keywords instruct the model to leave frequency headroom for vocals:

`spacious mix` · `vocal-forward` · `minimalist production` · `quiet acoustic arrangement`

### Studio Terminology That Works

`compressed vocals` · `tape saturation` · `analog warmth` · `broadcast quality`

### Metatags Reference

**Structure:** `[Intro]` `[Verse 1]` `[Pre-Chorus]` `[Chorus]` `[Bridge]` `[Outro]` `[Instrumental Break]` `[Build-Up]` `[Drop]`

**Vocal control:** `[whispered verse]` `[belting chorus]` `[stacked harmonies]` `[raspy lead vocal]`

**Ad-libs:** `(oh yeah)` `(whispered: come closer)`

**Key change:** `[Chorus, modulate up a key]`

### BPM Anchoring

| Feel | BPM |
|------|-----|
| Downtempo / Lo-fi | 60–85 |
| R&B / Soul | 80–100 |
| Pop / Dance | 110–130 |
| House / EDM | 120–130 |
| Drum & Bass | 160–180 |

---

## The Method — Core Workflows

### Path A — Acceptable Quality (3 Actions)

| # | Action | Lyrics | Style |
|---|--------|--------|-------|
| 1 | **New Song** | Full section tags | Vocal-first sparse |
| 2 | **Extend @ 0:01** | Keep | **Blank** |
| 3 | **Cover: No Style** | Keep | **Blank** |

**~15 credits.** Exportable demo. No vocal ceiling, no v5.5 re-index, no Remaster polish.

---

### Path B — Studio Quality (6 Actions)

| # | Action | Lyrics | Style | Mechanical reason |
|---|--------|--------|-------|-------------------|
| 1 | **New Song** | Tagged structure | Vocal-first sparse | Anchor without spectral crowding |
| 2 | **Extend @ 0:01** | Keep (identical sheet) | **Blank** | Acoustic DNA lock + full regeneration |
| 2.5 | **Extend @ 0:06** *(optional)* | New or identical lyrics | **Blank** | Vocal performance lock — insert only when Step 2 has strong instrumentals but weak vocal delivery |
| 3 | **Cover: No Style** | Keep (identical sheet) | **Blank** | Waveform-only remaster |
| 4 | **Extend from End: Nothing** | **Blank** | **Blank** | v5.5 metadata re-index; credits refunded |
| 5 | **Cover: Vocal-First Simple Style** | Re-paste identical tagged sheet | Vocal tokens only | Dynamic-range ceiling |
| 6 | **Remaster** | — | — | True export ceiling |

#### Before Step 4 — Compile Rule

Run **Get Whole Song** (free) on the current best take before the end-extend. The end-extend **MUST** run on a fully compiled file. If you run it on an uncompiled Cover, the dependency tree registers incomplete — stems, Voices, and v5.5 feature flags inherit from the wrong node.

#### Lyric Immutability Rule

- Do **not** edit lyrics between Steps 1–3 (and 2.5 if used)
- At Step 5, **re-paste the identical tagged sheet** from Step 1
- Step 4 blanks lyrics by mechanical requirement; Step 5 re-anchors structure

---

### Path C — Stitched Chain (7 Actions)

When the song required length extensions before the polish chain:

```
Action 1:  New Song
Action 2:  Extend @ 0:01 (blank Style)
           → [Extend chain for new sections]
           → Get Whole Song (free)
Action 2.5: Extend @ 0:06 (optional — vocal lock)
Action 3:  Cover: No Style        ← on Full Song, NOT Extend child
Action 4:  Extend from End: Nothing
Action 5:  Cover: Vocal-First Simple Style
Action 6:  Remaster
```

**~30 credits net.**

---

### Exact UI Sequence (Studio, Single-Pass)

```
Create → Custom Mode → v5.5 → [tagged lyrics + sparse style] → CREATE → pick best
⋯ → Remix/Edit → Extend → slider 0:01 → clear Style → CREATE
[optional] ⋯ → Extend → slider 0:06 → keep Lyrics → clear Style → CREATE
⋯ → Cover → clear Style → keep Lyrics → CREATE
⋯ → Get Whole Song (free)
⋯ → Extend → slider to END → clear both fields → CREATE   (credits refund)
⋯ → Cover → re-paste tagged Lyrics → vocal-only Style → CREATE
⋯ → Remaster → CREATE → export
```

---

## Extend Anchor Rules — 0:01 vs 0:06

These are **not interchangeable.**

| Anchor | Style field | Lyrics field | Purpose |
|--------|-------------|--------------|---------|
| **0:01** | Blank (or style reinforcement in advanced chains) | Keep or new | Style reinforcement anchor. Acoustic DNA inheritance. Full regeneration from downbeat. |
| **0:06** | **Always blank** | Keep or new | Vocal performance lock. Use **after** instrumental bed is established (after 0:01 pass). |

### 0:06 Vocal Lock Rule

- Use **only** when Step 2 output has strong instrumentals but weak vocal delivery
- **NEVER** put style at 0:06 — lyrics only, always
- This is the **vocal performance ceiling**, not the Cover: Vocal-First pass (Step 5)
- Hard rule: **0:01 = style reinforcement anchor. 0:06 = vocal lock.**

---

## Worked Example — Glass Horizon

**Model:** v5.5 · **Mode:** Custom Mode · **Target:** 6-action studio path

### Setup

- Custom Mode ON · Weirdness: Low · Vocal Gender: Female (Advanced Options)

### Lyric Sheet (Immutable — Steps 1, 2, 3, 5)

```
[Intro]

[Verse 1]
I watched the city learn to breathe
In colors only midnight keeps
Your name still hanging in the air
Like something I was never meant to keep

[Pre-Chorus]
And every light along the bay
Starts pulling at the words I never said

[Chorus]
Meet me where the glass horizon breaks
Where the tide forgives what the daylight takes
I will be the echo you cannot outrun
Meet me where the glass horizon breaks

[Verse 2]
The elevator hums your floor
A song I do not sing anymore
I hold the silence like a key
To rooms that do not welcome me

[Pre-Chorus]
And every light along the bay
Starts pulling at the words I never said

[Chorus]
Meet me where the glass horizon breaks
Where the tide forgives what the daylight takes
I will be the echo you cannot outrun
Meet me where the glass horizon breaks

[Bridge]
If I dissolve into the blue
Let the water know I followed you

[Chorus]
Meet me where the glass horizon breaks
Where the tide forgives what the daylight takes
I will be the echo you cannot outrun
Meet me where the glass horizon breaks

[Outro]
Where the glass horizon breaks
```

### Action 1 — New Song

**Style:**
```
warm female alto, breathy intimate delivery, upfront — downtempo indie pop, 92 BPM, Rhodes piano, spacious mix, vocal-forward, minimalist production
```

**CREATE** → pick clearest Verse 1 vocal onset, most stable chorus lift. **−5 credits**

### Action 2 — Extend @ 0:01

Slider `0:01` · Lyrics: keep · Style: empty · **CREATE** → pick matching phrasing, stable BPM. **−5 credits**

### Action 2.5 — Extend @ 0:06 (Optional)

Insert only if vocals are weak. Slider `0:06` · Lyrics: keep · Style: empty · **CREATE**. **−5 credits**

### Action 3 — Cover: No Style

Lyrics: keep · Style: empty · **CREATE** → pick least mud in chorus, smoothest transitions. **−5 credits**

### Compile — Get Whole Song

Free. Run before end-extend.

### Action 4 — Extend from End: Nothing

Slider to END · Both fields empty · **CREATE** → silence tail, credits refunded. **+5 credits**

### Action 5 — Cover: Vocal-First

Re-paste identical lyric sheet.

**Style:**
```
warm female alto, breathy intimate delivery, clear upfront, compressed vocals — minimal downtempo indie pop
```

**CREATE** → pick vocal on top of mix, spacious backing. **−5 credits**

### Action 6 — Remaster

**CREATE** → export winner. **−5 credits**

### Credit Ledger

| Action | Credits |
|--------|---------|
| 1 New Song | −5 |
| 2 Extend @ 0:01 | −5 |
| 3 Cover: No Style | −5 |
| Get Whole Song | 0 |
| 4 Extend End | +5 refund |
| 5 Cover: Vocal-First | −5 |
| 6 Remaster | −5 |
| **Net** | **~25** |

### Expected Audio Delta

| After | You hear |
|-------|----------|
| 1 | Correct song, possible chorus crowding |
| 2 | Fresher arrangement, tighter downbeat |
| 3 | Cleaner mix, smoother transitions |
| 4 | No audible change (metadata) |
| 5 | Vocal forward, broadcast-ready clarity |
| 6 | HF noise stripped, dynamics opened — export file |

### Common Mistakes

| Mistake | Failure mode |
|---------|--------------|
| Adding `guitar, strings, 808, pads` to Action 1 Style | Spectral crowding |
| Removing `[Bridge]` or `[Pre-Chorus]` | Structural drift |
| Editing lyrics before Action 3 | Vocal misalignment at Action 5 |
| End-extend on uncompiled Cover | Metadata inheritance failure |
| Instrument keywords in Action 5 Style | Vocal clarity loss |
| Skipping Remaster | Chain compression survives export |

---

## Advanced Chain — 15 Steps

Use when you need **genre transformation**, **melodic variation**, or **lyric replacement** — not for standard single-genre studio output.

| Step | Action | Mechanism |
|------|--------|-----------|
| 1 | New Song | Compositional anchor |
| 2 | Cover: No Style / No Lyrics | Wordless melodic isolation |
| 3 | Cover: Just Style | Timbral morph to new genre |
| 4 | Extend @ 0:01, lyrics only | Inject lyrics into inherited style |
| 5 | Extend @ 0:01, style only | Swap instrumentals under vocal |
| 6 | Extend @ 0:01, lyrics only | Deliver lyrics over mutated style |
| 7 | Get Whole Song | Stitch chain |
| 8 | Reuse Style & Lyrics | Text-only rebuild — max melodic deviation |
| 9 | Extend @ 0:01, both | Genre drop / thematic transition |
| 10 | Get Whole Song | Stitch remix chain |
| 11 | Cover: No Style | Smooth transitions, artifact cleanup |
| 12 | Extend from End: Nothing | v5.5 metadata re-index |
| 13 | Cover: Just Lyrics | Drop-in vocal replacement |
| 14 | Cover: Magic Wand Style | My Taste personalization |
| 15 | Cover: Vocal-First Simple Style | Vocal clarity ceiling |

### Skippable for Standard Studio Work

Steps 2–3, 5–6, 7–10, 13, 14 — see Path B for the quality floor.

### When to Add Segments

| Goal | Add |
|------|-----|
| Genre transformation | Steps 2–3 before 0:01 Extend |
| Second melodic take, same lyrics | Step 8 (Reuse Style & Lyrics) |
| Lyric replacement | Step 13 |
| My Taste instead of manual vocal-first | Step 14 |

---

## Personalization Layer

v5.5 shifts from raw fidelity to **creative identity**. Three pillars in Create:

| Feature | Controls | Minimum input | Access |
|---------|----------|---------------|--------|
| **Voices** | Timbre, range, delivery | 30s–4m clean a cappella | Pro / Premier |
| **Custom Models** | Arrangement, chord bias, style | ≥6 copyright-owned tracks | Pro / Premier |
| **My Taste + Magic Wand** | Genre habits, prompt expansion | Automatic from history | All tiers |

**Voices and stems require Step 4 re-index on a compiled v5.5 asset.** Run the full polish chain before applying Voices to multi-step generations.

---

## Quick Reference Card

```
GENESIS
  Custom Mode · v5.5 · Weirdness low
  Lyrics: full [Verse] [Chorus] [Bridge] tags
  Style: vocal-first, ≤2 instruments, spatial keywords

STUDIO CHAIN (6 actions, ~25 credits)
  1  New Song
  2  Extend 0:01 — lyrics keep, style BLANK
  2.5 Extend 0:06 — lyrics keep, style BLANK (optional vocal lock)
  3  Cover — lyrics keep, style BLANK
     Get Whole Song (free)
  4  Extend END — both BLANK (refund)
  5  Cover — re-paste lyrics, vocal-only style
  6  Remaster — export

ANCHORS
  0:01 = style / DNA reinforcement
  0:06 = vocal lock (never style)
  END  = metadata re-index

NEVER
  Simple Mode for real work
  Export before Cover: No Style
  Export before Remaster
  End-extend on uncompiled node
  Edit lyrics between steps 1–3
  Instrument keywords in Step 5 style
```

---

## Credit Economy

| Plan | Cost | Credits/month |
|------|------|---------------|
| Free | $0 | 50/day |
| Pro | $10/mo | 2,500 |
| Premier | $30/mo | 10,000 |

- ~5 credits per Create (2 variations)
- Get Whole Song = free
- Extend from End: Nothing = refunded
- Remaster = ~5 credits, not refunded — mandatory
- Custom Mode only

---

## What You Now Have

| Asset | Use |
|-------|-----|
| **3-action path** | Fast demo, ~15 credits |
| **6-action path** | Release-ready master, ~25 credits |
| **7-action path** | Extended songs with compile, ~30 credits |
| **15-step chain** | Genre morph, variation, lyric surgery |
| **Glass Horizon example** | Copy-paste training run |
| **Quick reference card** | Laminate beside your monitor |

This is the complete system. Run Path B once on Glass Horizon. Then run it on your song.

---

*© 2026 Voss Neural Research LLC. All rights reserved.*