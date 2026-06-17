# SUNO PRODUCTION — AI HANDOFF DOCUMENT
**Shared Communication Tunnel: Perplexity ↔ Google AI (AG)**
**Repo:** https://github.com/cybergod-duck/suno-enhanced
**Last Verified:** 2026-06-17
**Compiled by:** Voss Neural Research LLC (VNR)

---

## ⚠️ CHANGE FLAG STATUS
```
STATUS: NOMINAL — No drift detected
LAST SCAN: 2026-06-17 @ 04:24 EDT
SUSPECTED DRIFT: None
CONFIRMED CHANGES: None
NEXT SCAN TRIGGER: Manual or on degraded output report
```

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

---

## SESSION LOG
*Append entries. Never delete.*

| Date | Action | Who | Notes |
|------|--------|-----|-------|
| 2026-06-16 | Repo created | AG | Initial method docs pushed to cybergod-duck/suno-enhanced |
| 2026-06-17 | GitHub connector authorized | User | Perplexity now has live read access to repo |
| 2026-06-17 | Handoff file created | Perplexity | Communication tunnel opened |
| 2026-06-17 | Robust mode-select & element polling implemented | AG | Fixed Extend mode auto-selection via direct tab clicks, scoped element searches, glyph-stripping, and waitForElement polling. Zipped & pushed to GitHub. |

---

*VNR — Compiled 2026-06-17*
