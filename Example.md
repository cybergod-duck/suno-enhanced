# Example — The Method in Practice

> Walkthrough companion to `the method.md`. One complete song, all five studio-quality actions filled in.

**Track:** *Glass Horizon*  
**Model:** v5.5  
**Mode:** Custom Mode (Create workspace only)  
**Target:** 5-action optimal path

---

## Before You Start

- Custom Mode ON
- Weirdness: low
- Vocal Gender: Female (Advanced Options — keeps style characters free for production terms)
- Save the lyric sheet below in a text file. You will paste it four times unchanged, then once more at Step 5.

---

## The Lyric Sheet (Immutable — Steps 1, 2, 3, 5)

Copy this exactly. Do not edit between steps.

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

---

## Action 1 — New Song

**Navigate:** Create → Custom Mode → v5.5

**Lyrics:** Paste the full lyric sheet above.

**Style:**

```
warm female alto, breathy intimate delivery, upfront — downtempo indie pop, 92 BPM, Rhodes piano, spacious mix, vocal-forward, minimalist production
```

**Check:**
- 2 instrument tokens only (`Rhodes piano` + genre/BPM)
- Vocal descriptors lead the field
- Spatial keywords present

**CREATE** → pick the variation with the clearest vocal onset on Verse 1 and the most stable chorus lift. Discard the other.

| | |
|---|---|
| Credits spent | ~5 |
| Running total | ~5 |

---

## Action 2 — Extend @ 0:01

**Navigate:** ⋯ → Remix/Edit → Extend

**Slider:** `0:01`

**Lyrics:** Keep — do not touch.

**Style:** Delete everything. Field must be empty.

**CREATE** → pick the variation where Verse 1 phrasing matches the parent and the chorus does not rush the BPM.

| | |
|---|---|
| Credits spent | ~5 |
| Running total | ~10 |

**What changed:** Full arrangement regenerated from the downbeat. Key, tempo, and production texture inherited from Action 1. No new style tokens injected.

---

## Action 3 — Cover: No Style

**Navigate:** ⋯ → Cover

**Lyrics:** Keep — do not touch.

**Style:** Empty.

**CREATE** → pick the variation with the least mud in the chorus, the smoothest Verse 1→Pre-Chorus transition, and no synthetic HF distortion on vocal sibilants.

| | |
|---|---|
| Credits spent | ~5 |
| Running total | ~15 |

**What changed:** Waveform-only remaster. Mix rebalance. Transition seams smoothed. This is the step most people skip.

---

## Action 4 — Extend from End: Nothing

**Navigate:** ⋯ → Extend

**Slider:** Drag to the absolute end of the track (final timestamp).

**Lyrics:** Delete everything. Field must be empty.

**Style:** Empty.

**CREATE** → Suno appends ~2 seconds of silence. Credits refund to your account.

| | |
|---|---|
| Credits spent | ~0 (refunded) |
| Running total | ~15 net |

**What changed:** Metadata re-indexed as a native v5.5 asset. Audio structure unchanged. Lyric metadata temporarily cleared — restored in Action 5.

---

## Action 5 — Cover: Vocal-First Simple Style

**Navigate:** ⋯ → Cover

**Lyrics:** Re-paste the **identical** lyric sheet from the top of this document. Every `[Verse]`, `[Chorus]`, `[Bridge]` tag must be present.

**Style:**

```
warm female alto, breathy intimate delivery, clear upfront, compressed vocals — minimal downtempo indie pop
```

**Check:**
- Zero instrument keywords
- Vocal descriptors only
- Genre tag minimal (no BPM, no instrument list)

**CREATE** → pick the variation where the vocal sits on top of the mix, the backing drops in volume during verses, and the bridge does not collapse in energy.

**Export** the winner.

| | |
|---|---|
| Credits spent | ~5 |
| Running total | ~20 net |

**What changed:** Section tags re-anchored against baked vocal transients. Dynamic range allocated to the vocal. Studio ceiling reached.

---

## Credit Ledger

| Action | Operation | Credits |
|--------|-----------|---------|
| 1 | New Song | −5 |
| 2 | Extend @ 0:01 | −5 |
| 3 | Cover: No Style | −5 |
| 4 | Extend End: Nothing | +5 (refund) |
| 5 | Cover: Vocal-First | −5 |
| **Net** | | **~20** |

---

## What Each Step Sounds Like (Expected Delta)

| After step | You should hear |
|------------|-----------------|
| 1 | Correct song, possible instrument crowding in chorus |
| 2 | Fresher arrangement, tighter downbeat, same DNA |
| 3 | Cleaner mix, less mud, smoother section transitions |
| 4 | No audible change (metadata only) |
| 5 | Vocal forward, spacious backing, broadcast-ready clarity |

If Action 3 still sounds crowded, your Action 1 Style had too many instrument tokens. Strip back and restart — Steps 2–5 cannot fully recover a poisoned genesis prompt.

---

## Shortest Path Variant (3 Actions)

Stop after Action 3. Same lyric sheet and Action 1 Style. Skip Actions 4–5.

**Result:** Usable demo, ~15 credits. Vocal sits inside the mix, not on top of it. No v5.5 native re-index. No stem/Voice unlock.

---

## Stitched-Chain Variant (6 Actions)

Use this if you extended the song length before running the polish chain.

```
Action 1: New Song
Action 2: Extend @ 0:01 (blank Style)
  → Extend from end of song with continuation lyrics (new section)
  → Get Whole Song (free)
Action 3: Cover: No Style (on the Full Song, not the Extend child)
Action 4: Extend from End: Nothing
Action 5: Cover: Vocal-First Simple Style
```

**Rule:** Actions 3–5 always run on the **compiled Full Song** node.

---

## Common Mistakes (This Example)

| Mistake | Failure mode triggered |
|---------|------------------------|
| Adding `acoustic guitar, strings, 808, synth pads` to Action 1 Style | Spectral crowding |
| Removing `[Bridge]` or `[Pre-Chorus]` tags | Structural drift |
| Editing a chorus line before Action 3 | Vocal transient misalignment at Action 5 |
| Running Action 4 on an Extend child after Get Whole Song | Metadata inheritance failure |
| Putting `Rhodes piano, lush strings` in Action 5 Style | Vocal clarity loss |

---

*Example compiled 2026-06-16 — Voss Neural Research LLC*