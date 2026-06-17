# The Method — Suno v5.5 Studio Quality in Minimum Deliberate Actions

> Synthesized from VNR reverse-engineering research. Create workspace only — not Studio.  
> v3/v4 techniques excluded. One **deliberate action** = one paid **Create** trigger.

---

## The Answer

| Target | Actions | Net credits |
|--------|---------|-------------|
| **Acceptable quality** | 3 | ~15 |
| **Studio quality** | 6 | ~25 |
| **Studio quality (stitched chain)** | 7 | ~30 |

The 15-step iterative chain is a **genre-morphing production rig**, not the quality floor.

---

## Highest-Leverage Single Action

**Extend @ 0:01 with Style field blank.**

- Discards everything after the downbeat except a 1-second seed
- Overrides the model's default context window
- Forces **acoustic DNA inheritance** (key, tempo, production texture) without re-interpreting style tokens
- Regenerates the full arrangement from measure one with clean conditioning

Every Cover pass downstream operates on better genetic material.

---

## The Step Most People Skip (Fastest Quality Kill)

**Cover: No Style.**

Most users: New Song → download. Power users who know 0:01 still export before the blank-Style Cover.

Without it, spectral crowding, phase seams, and mix compression survive export. No prompt engineering recovers it post-download.

---

## 1. Shortest Viable Path — 3 Actions (Acceptable, Not Studio Ceiling)

| # | Action | Lyrics | Style |
|---|--------|--------|-------|
| 1 | **New Song** (Custom Mode, v5.5) | Full section tags | Vocal-first sparse (see template below) |
| 2 | **Extend @ 0:01** | Keep | **Blank** |
| 3 | **Cover: No Style** | Keep | **Blank** |

**Cost:** ~15 credits. Exportable demo. No vocal dynamic-range ceiling.

---

## 2. Optimal Path — 6 Actions (Studio Quality)

| # | Action | Lyrics | Style | Mechanical reason |
|---|--------|--------|-------|-------------------|
| 1 | **New Song** | Tagged structure | Vocal-first sparse | Compositional anchor without spectral crowding |
| 2 | **Extend @ 0:01** | Keep (identical sheet) | **Blank** | Acoustic DNA lock + full regeneration |
| 2.5 | **Extend @ 0:06** *(optional)* | New or identical lyrics | **Blank** | Vocal performance lock after instrumental bed is set — insert only when Step 2 output has strong instrumentals but weak vocal delivery |
| 3 | **Cover: No Style** | Keep (identical sheet) | **Blank** | Waveform-only remaster |
| 4 | **Extend from End: Nothing** | **Blank** | **Blank** | v5.5 metadata re-index; credits refunded |
| 5 | **Cover: Vocal-First Simple Style** | Re-paste identical tagged sheet | Vocal tokens only | Dynamic-range ceiling |
| 6 | **Remaster** | — | — | True export ceiling; strips synthetic HF noise and chain compression |

**Step 4 — Sequencing Warning**

The end-extend **MUST** run on a fully compiled file (Get Whole Song output). If you run it on a Cover that has **NOT** been compiled yet, the dependency tree it registers is incomplete — stems, Voices, and v5.5 feature flags inherit from the wrong node.

### Step 2.5 — Extend @ 0:06 (Optional) — Vocal Lock Rule

**Extend from 0:06:** lyrics only, style blank

- Use **AFTER** the instrumental bed is established (after the 0:01 style pass)
- **NEVER** use style at 0:06 — lyrics only, always
- This is the **vocal performance ceiling**, not the Cover: Vocal-First pass
- Hard rule: **0:01 = style reinforcement anchor. 0:06 = vocal lock.** These are not interchangeable.

**Step 6 — Remaster**

- Run after the final Cover
- This is the true export ceiling — not optional, not stylistic
- Cost: ~5 credits, not refunded
- Without it, synthetic high-end noise and dynamic compression from the generation chain survive into the export file

### Step 1 — Style Template (Mandatory)

```
[vocal descriptor], [delivery], upfront — [genre], [BPM], spacious mix, vocal-forward, minimalist production
```

**Hard limits:**
- ≤2 instrument tokens in the entire Style field
- No layered genre stacking, no 5–8 tag lists
- Spatial keywords are mandatory (`spacious mix`, `vocal-forward`, `minimalist production`)

### Step 1 — Lyrics Template (Mandatory)

```
[Intro]
[Verse 1]
[Pre-Chorus]    ← if used
[Chorus]
[Verse 2]
[Bridge]        ← if used
[Outro]
```

### Step 5 — Style Template (Mandatory)

```
warm female alto, breathy intimate delivery, clear upfront, compressed vocals — minimal [genre]
```

Zero instrument keywords. Vocal descriptors lead the field.

### Lyric Immutability Rule

- Do **not** edit lyrics between Steps 1–3
- At Step 5, **re-paste the identical tagged sheet** from Step 1
- Step 4 blanks lyrics by mechanical requirement; Step 5 re-anchors structure

---

## 3. Stitched-Chain Branch — 7 Actions

Required when any **Get Whole Song** compile was used.

```
Steps 1–2 → [Extend chain] → Get Whole Song (free)
  → Cover: No Style
  → Extend from End: Nothing
  → Cover: Vocal-First Simple Style
  → Remaster
```

**Why:** Step 4's re-index must run on the **compiled parent**, not the last Extend child. Without Get Whole Song first, stems, Voices, and v5.5 feature flags inherit from the wrong node in the dependency tree.

---

## Exact UI Sequence (Optimal, Single-Pass)

```
Create → Custom Mode → [tagged lyrics + sparse style] → CREATE → pick best take
⋯ → Remix/Edit → Extend → slider 0:01 → clear Style → CREATE
⋯ → Cover → clear Style → keep Lyrics → CREATE
⋯ → Extend → slider to END → clear both fields → CREATE   (credits refund)
⋯ → Cover → re-paste tagged Lyrics → vocal-only Style → CREATE
⋯ → Remaster → CREATE → export
```

---

## Failure Mode Cross-Reference

| Failure mode | Where blocked | How |
|--------------|---------------|-----|
| **Spectral crowding** (overloaded instrument lists) | Step 1 (prevent) + Step 3 (repair) | ≤2 instrument tokens + spatial mix keywords at genesis. Cover: No Style rebalances on waveform. |
| **Structural drift** (missing section tags) | Steps 1–3 (maintain) + Step 5 (re-anchor) | Tagged lyrics immutable through Step 3. Identical tagged sheet re-pasted at Step 5. |
| **Metadata inheritance** (stitched chains) | Get Whole Song + Step 4 | Compile before re-index. End-extend registers native v5.5 asset. |
| **Vocal clarity loss** (competing style keywords) | Step 1 (prevent) + Step 5 (ceiling) | Sparse vocal-first Style at genesis. Vocal-only Style on final Cover. |

---

## Skippable Steps (15-Step Chain)

For single-genre songs with final lyrics, drop these with no studio-quality loss:

| Steps | Why skippable |
|-------|---------------|
| 2–3 | Wordless cover → style cover. Genre-morph rig only. |
| 5–6 | Additional 0:01 style/lyric passes. Arrangement sculpting only. |
| 7, 10 | Get Whole Song. Free stitch — no quality function on linear chains. |
| 8–10 | Reuse Style & Lyrics → 0:01 both → Full Song. Melodic variation, not polish. |
| 13 | Cover just lyrics. Lyric-replacement surgery only. |
| 14 | Magic Wand. Redundant when Step 5 vocal-first prompt is written correctly. |

---

## When to Add 15-Step Chain Segments

| Goal | Add |
|------|-----|
| Genre transformation mid-pipeline | Steps 2–3 (wordless cover → style cover) before 0:01 Extend |
| Second melodic take, same lyrics | Step 8 (Reuse Style & Lyrics) as a branch |
| Lyric replacement without re-arranging | Step 13 (Cover just lyrics) |
| My Taste personalization | Step 14 (Magic Wand) instead of manual vocal-first at Step 5 |

---

## Control Parameters (Reference)

| Parameter | Sweet spot | Use |
|-----------|------------|-----|
| Audio Influence | 0.70–0.90 | Cover / Sample only |
| Style Influence | Default | Advanced Options |
| Weirdness | Low | Conventional structure |
| Vocal Gender | Toggle | Advanced Options — saves style characters |

---

## Credit Economy

- ~5 credits per Create (2 variations)
- Get Whole Song = free
- Extend from End: Nothing = credits refunded
- Remaster = ~5 credits, not refunded — mandatory final step; true export ceiling
- Custom Mode only — Simple Mode wastes credits on uncontrolled output

---

*Compiled 2026-06-16 — Voss Neural Research LLC*