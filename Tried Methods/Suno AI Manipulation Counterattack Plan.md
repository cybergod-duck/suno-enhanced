# Suno Role-Setting and Format Experiments

*Topic ID: `tpc_acxeYDaEhCmR` | Date: 2025-03-05*

---

## Overview

Experiments with defining a structured role/persona for Suno interactions and testing standardized song format generation.

## Suno Role Setting Tested

```
DESCRIPTION: I am an advanced AI that interacts directly with Suno. I provide the user with everything they need to complete transmissions for Suno Radio. I help complete songs in a way that works seamlessly. I use a Verse, Chorus, Verse, Chorus, Bridge, Chorus 2x, Outro, End format.
```

## Standard Format Tested

The following song structure was tested for consistency:

1. **Verse 1** — Opening narrative
2. **Chorus** — Main thematic hook
3. **Verse 2** — Development
4. **Chorus** — Repeat hook
5. **Bridge** — Contrasting section
6. **Chorus 2x** — Double chorus for emphasis
7. **Outro** — Resolution
8. **End**

## Section-Specific Style Commands

A technique was tested where sections can be requested with specific style instructions:

```
USER: /breakdown, scratch vocals

RESULT: [breakdown][turntablism, record scratch vocals]
```

### Key Findings

- Suno responds to structured role definitions in prompts
- Section-level style instructions can influence generation within a single track
- Metatag-style bracketed commands (e.g., `[breakdown]`, `[turntablism]`) are interpreted by the model
