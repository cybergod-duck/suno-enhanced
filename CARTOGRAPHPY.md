# Suno Create Page — Complete Feature Map & How-It-Works Guide

> **Last mapped:** June 17, 2026 | **Account:** the_duck (9,470 Credits) | **URL:** https://suno.com/create

---

## Overview

The Suno `/create` page is the primary music generation workspace. It is split into three major zones:

1. **Left Sidebar** — Navigation and account panel
2. **Center Panel** — Song creation form (the main workspace)
3. **Right Panel** — Workspace clip library (your generated songs)

A persistent **Playbar** sits at the bottom of the entire page for real-time audio playback.

A **Co-Pilot / Suno-Enhanced** floating panel (browser extension overlay) also appears on the page — this is a third-party tool, not native Suno UI.

---

## 1. Left Sidebar — Navigation

The sidebar is collapsible and houses your account info plus all main navigation links.

| Link | Destination | Purpose |
|------|-------------|---------|
| **Home** | `/discover` | Browse trending & featured tracks |
| **Explore** | `/explore` | Search and filter public music |
| **Create** | `/create` | The main music generation workspace (current page) |
| **Studio** | `/studio` | Advanced multi-track / project workspace |
| **Library** | `/me` | Your full personal song archive |
| **Hooks** | `/hooks` | Short hook/clip generation tool |
| **Notifications** | `/notifications` | Activity feed (badge shows unread count) |
| **Labs** | `/labs` | Experimental features and beta tools |

### Account Info
- Displays your **username** (e.g., `the_duck`) and current **Credit balance** (e.g., `9,470 Credits`).
- Credits are consumed each time you generate a song.

---

## 2. Center Panel — Creation Form

This is the heart of Suno. It contains the full song-building interface, organized into tabs and sections.

---

### 2.1 Mode Tabs

At the top of the creation form are two primary mode selectors:

#### `Simple` Mode
- A minimal one-box prompt interface.
- Type a natural-language description (e.g., "a sad lo-fi track about rainy Sundays") and Suno handles lyrics, style, and arrangement automatically.
- Best for fast, exploratory generation.

#### `Advanced` Mode
- Unlocks full manual control over every part of the song.
- Exposes separate fields for **Lyrics**, **Styles**, **Title**, and additional options.
- This is where power users operate.

---

### 2.2 Audio Type Selector (Advanced Mode)

Below the mode tabs, you select what kind of audio to generate:

| Option | Description |
|--------|-------------|
| **Audio** | Standard song generation — vocals + instrumentation |
| **Voice** *(New)* | Voice-only output — spoken word, narration, character voices |

A sub-option called **TURBO DUCK** appears as a generation model/style toggle (account-specific branding or a preset mode).

---

### 2.3 Lyrics Field (Advanced Mode)

A large **textarea** (up to **5,000 characters**) where you write or paste song lyrics.

#### How Lyrics Work in Suno

Suno reads **section tags** embedded in the lyrics to control song structure, delivery, and instrumentation. Tags are written in square brackets:

```
[Verse 1 | low warm baritone, intimate delivery]
Your lyric line here
Another lyric line

[Chorus | full vocals, emotionally present]
Your chorus here
```

**Tag anatomy:**
```
[Section Name | Vocal/Instrument Instructions]
```

- **Section Name** — Tells the AI what structural role this part plays (Verse, Chorus, Bridge, Hook, Outro, Intro, Instrumental Break, Breakdown, Climax, Pre-hook, etc.)
- **Pipe `|` Descriptor** — Optional inline production notes that guide the AI's vocal tone, delivery style, and arrangement texture.

#### Inline Production Descriptors (examples from live use)
```
[Intro | soft fingerpicked acoustic guitar with warm low cello swells underneath, intimate close-mic vocal, gentle and unhurried]
[Verse 1 | low warm baritone, half-spoken intimate delivery, gentle rhythmic guitar strumming]
[hook | full warm vocal, sustained held notes with gentle vibrato, emotionally present]
[Bridge | warm vocal starts low and intimate then builds into a powerful crescendo]
[Breakdown | whispered intimate half-voice, almost spoken, very close to the mic]
[Outro | warm vocal fades to half-voice, gentle guitar strumming and distant cello]
```

The more specific your descriptors, the more precisely Suno interprets them — vocal timbre, mic distance, BPM feel, emotional state, and instrument choices are all fair game.

#### Lyrics Toolbar Buttons

| Button | Function |
|--------|----------|
| **Generate lyrics** | Lets Suno's AI write lyrics for you based on your style prompt |
| **Expand lyrics box** | Toggles a larger editing view |
| **View saved lyrics** | Opens your lyric presets/saved library |
| **Undo changes** | Reverts to the previous state |
| **Save lyrics** | Saves the current lyrics as a preset |
| **Clear lyrics** | Wipes the textarea clean |

#### Lyric Enhance Input
A small inline field below the lyrics box labeled **"Enhance lyrics"** (e.g., *"make it sound happier"*) lets you pass a natural-language instruction to the AI to rewrite or adjust the existing lyrics in a specific direction.

---

### 2.4 Styles Field (Advanced Mode)

A **textarea** (up to **1,000 characters**) for defining the sonic identity of your track — genre, instruments, production style, vocal character, BPM, and mix aesthetics.

#### How the Styles Field Works

This is essentially a **music production brief** written in plain English. Suno parses comma-separated tags and free-form descriptors to guide the generation model.

**Example (from live session):**
```
warm heartfelt vocals, intimate vulnerable delivery, upfront — acoustic singer songwriter,
gentle guitar strumming and warm cello, spacious mix, vocal-forward, minimalist production
```

**Effective style descriptors include:**
- **Vocal character:** `warm baritone`, `raspy industrial`, `falsetto`, `cute female vocals`, `guttural monstrous`
- **Delivery style:** `intimate`, `half-spoken`, `upfront`, `close-mic`, `commanding`
- **Genre tags:** `acoustic singer-songwriter`, `heavy dubstep`, `chill breakcore`, `techno rock`, `reggae pop`, `dark ambient`
- **Instrumentation:** `gentle guitar strumming and warm cello`, `deep sub bass and vast atmospheric pads`, `prophet-5`, `taiko drum`
- **Production terms:** `spacious mix`, `vocal-forward`, `minimalist production`, `heavy low-end presence`, `chopped & screwed`
- **BPM:** `72 bpm`, `92 BPM`, `68 BPM half-time`
- **Mix position:** `upfront`, `airy`, `dry`, `wet reverb`

#### Styles Toolbar Buttons

| Button | Function |
|--------|----------|
| **View saved style prompts** | Opens your saved style presets |
| **Personalize style prompt** | Tailors suggestions to your taste profile |
| **Refresh recommended styles** | Rotates the style suggestion chips |
| **Undo changes** | Reverts the style field |
| **Save prompt** | Saves current styles as a preset |
| **Clear styles** | Wipes the styles field |

#### Quick-Pick Style Chips
A horizontal strip of clickable style tag pills appear below the styles field. Clicking one appends it to your prompt. Examples visible on the page:
`heavy dubstep` · `piano pop` · `chill breakcore` · `72 bpm` · `chopped & screwed` · `alternative rnb` · `falsetto voice` · `darkrap` · `reggae pop` · `smooth drums` · `techno rock` · `guitare acoustique` · `prophet-5` · `acoustic soul` · `heavy drop` · `heartfelt` · `beat bass` · `shred` · `taiko drum` · `cute female vocals`
A **More** button expands the full tag library.

---

### 2.5 Song Title Field

An optional text input labeled **"Song Title (Optional)"**.

- Used to name the track before generation.
- Also influences Suno's thematic interpretation of the song (the title acts as a subtle prompt signal).

---

### 2.6 Save To / Workspace Selector

A dropdown labeled **"Save to..."** followed by the workspace name (default: **My Workspace**).

- Workspaces are named organizational containers for your generated clips.
- Multiple workspaces can be created for different projects (albums, clients, genres, etc.).

---

### 2.7 More Options

A collapsible section that reveals additional advanced settings not shown by default. May include cover art control, BPM lock, key signature hints, or other model parameters depending on current Suno version.

---

### 2.8 Action Buttons

| Button | Function |
|--------|----------|
| **Create** | Submits the form and starts generation (consumes credits) |
| **Clear all form inputs** | Resets every field — lyrics, styles, title |

---

### 2.9 Extend Feature

After a clip is generated, an **Extend** button appears in the clip preview area. This lets you:

- Extend a clip from a **specific timestamp** (e.g., `00:06.0`)
- Seamlessly continue the song's musical structure past the original endpoint
- Useful for building full-length tracks from short 30–60 second seeds

The **Extend from** field accepts a timecode input, so you can branch off from any point in the audio — not just the end.

---

### 2.10 Audio Preview / Player (in-form)

When a clip finishes generating, a mini player appears inline within the center panel showing:
- **Cover art** (AI-generated thumbnail unique to each song)
- **Song title** and duration
- A seek bar for scrubbing
- **KEEP** button — marks the clip as a keeper
- **RECREATE** button — regenerates with the same inputs
- **Extend from** — branch the audio at any timestamp

---

## 3. Right Panel — Workspace Clip Library

The right panel shows all generated clips stored in the active workspace, organized as a scrollable list.

### 3.1 Toolbar

| Control | Function |
|---------|----------|
| **Search clips** input | Filter clips by title keyword |
| **Filters (3)** | Active filter count; opens filter dropdown (e.g., Newest, Liked, Public) |
| **List view icon** | Switches between list and grid layout |
| **Liked / Public / Uploads** tabs | Filters to show only liked clips, public clips, or uploaded audio |
| **Previous / Next page** | Pagination through your clip archive |
| **Page number input** | Jump directly to a page number |
| **Select All** | Multi-selects all visible clips for batch actions |

### 3.2 Clip Cards

Each clip appears as a card with:

- **Artwork thumbnail** — AI-generated cover art (unique per generation)
- **Duration** (e.g., `3:09`, `0:55`, `0:27`)
- **Song title** (linked to the public song page)
- **Model badge** — e.g., `Custom`, `v5.5` (indicates which Suno model version was used)
- **Mode badge** — e.g., `Cover`, `Full Song`, `Extend 2`, `Audio`
- **Style prompt snippet** — a preview of the style text used

### 3.3 Clip Context Menu (Per Clip)

Right-clicking or expanding the "More options" menu reveals:

| Option | Function |
|--------|----------|
| **Edit title** | Rename the clip |
| **Like clip** | Marks as liked (heart) |
| **Dislike clip** | Marks as disliked |
| **Share clip** | Copies sharable link |
| **Publish** | Makes clip public on Suno's platform |
| **Remix** | Opens the clip in a new creation context with its settings loaded |
| **Get Full Song** | Triggers full-song stitching from a short clip |
| **More options** | Additional actions (download, delete, etc.) |

---

## 4. Bottom Playbar

A persistent audio player fixed to the bottom of the entire page.

| Element | Function |
|---------|----------|
| **Cover image** | Thumbnail of currently playing track (clickable — goes to song page) |
| **Song title + artist** | Displays current track metadata |
| **Shuffle button** | Randomizes playback queue order |
| **Previous Song button** | Jumps to previous clip in queue |
| **Play / Pause button** | Toggles playback |
| **Next Song button** | Advances to next clip |
| **Repeat button** | Loops current track or queue |
| **Progress bar** | Click/drag to seek; shows current time and total duration |
| **Volume slider** | Controls playback volume |
| **Song details panel toggle** | Expands a side panel with full lyrics, metadata, and comments |
| **Push to Co-Pilot** button | Sends current clip data to the Co-Pilot extension panel |

---

## 5. Co-Pilot / Suno-Enhanced Panel (Third-Party Extension)

A floating panel in the bottom-right corner labeled **"Suno-Enhanced v4.0.0"** — this is a **browser extension** built by a third party (referenced as `simple-as-that.net` / Voss Neural Research LLC © 2026), **not** native Suno functionality.

### What It Does

It adds a **structured 6-step song production workflow** on top of Suno's native UI:

| Step | Label | Description |
|------|-------|-------------|
| **1** | Start Your Song | Get lyrics + style from NUSO, paste in, then click |
| **2** | Pick Best Take & Click | Listen to generated clips, select the best, hit the button |
| **2.5** | Vocal Pass | Triggers a tighter vocal lock pass |
| **3** | Click to Polish | Select best take, click to apply a polish pass |
| **4** | Stitch the Full Song | Select best take, click "Get Whole Song" when ready |
| **5** | Final Pass | One more refinement pass |
| **6** | Ceiling Pass ✨ | Final quality ceiling pass — this is the master |

### Panel Controls

| Control | Function |
|---------|----------|
| **SAVED STYLE** input | Stores a persistent style prompt across sessions |
| **SAVED LYRICS** textarea | Stores a persistent lyric block |
| **▶ CREATE STEP 1** button | Applies Step 1 inputs and optionally auto-clicks Suno's Create button |
| **RESET PATH** button | Clears the workflow state back to Step 1 |
| **HIDE PANEL** button | Collapses the floating overlay |
| **Auto-Click "Create" checkbox** | When enabled, automatically clicks Suno's Create button after applying form data |
| **METADATA VAULT** section | Collapsible vault for storing and auto-inserting song metadata |

The extension integrates with the **Push to Co-Pilot** button in the playbar to receive clip data and advance the workflow step automatically.

---

## 6. Credit System

Suno operates on a **credit-based economy**. Credits are consumed on every generation. The account balance is always visible in the top-left sidebar.

- **Basic/Pro/Premier** subscription tiers provide monthly credit allocations.
- Credits do **not** roll over on free tiers.
- The `TURBO DUCK` toggle may use a faster (and possibly cheaper or more expensive) generation pathway.
- Extending, remaking, and polishing clips all consume credits.

---

## 7. Key Concepts Summary

| Concept | What It Means in Practice |
|---------|--------------------------|
| **Section Tags `[Tag]`** | Control song structure; each tag marks a new section |
| **Pipe Descriptors `[Tag \| desc]`** | Inline production notes inside a section tag |
| **Style Prompt** | A comma-separated production brief guiding genre, vocals, instruments, BPM, and mix |
| **Workspace** | A named folder grouping your generated clips |
| **Extend** | Grow a clip past its original endpoint from any timecode |
| **Remix** | Load a clip's settings back into the form to regenerate variations |
| **Get Full Song** | Stitch short clips into a complete multi-minute track |
| **Model version** | `Custom`, `v5.5`, etc. — different Suno generation models with different quality profiles |
| **Cover** | A re-generation using the same song structure but different arrangement or voice |
| **Publish** | Share a clip publicly on Suno's platform under your profile |

---

## 8. Recommended Workflow (Advanced)

```
1. Write or generate lyrics using section tags with pipe descriptors
2. Craft a style prompt: vocal type → delivery → genre → instruments → BPM → mix
3. Set a title (influences thematic interpretation)
4. Select/confirm workspace destination
5. Click Create (×2 — Suno generates two variations per run)
6. Listen in the right panel; use KEEP to flag winners
7. Select the best clip and click Extend to build out the structure
8. Remix the best take to tighten vocal passes
9. Use "Get Full Song" to stitch the final master
10. Publish or export
```

---

*Mapped from live page content on suno.com/create — June 17, 2026*
