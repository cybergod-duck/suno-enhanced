# SUNO v5.5 OPTIMAL PATH — Flawless Execution Guide
## By Voss Neural Research / the_duck
### Verified: June 16, 2026

---

## THE 6-STEP OPTIMAL PATH

| Step | Action | Style Field | Notes |
|------|--------|-------------|-------|
| 1 | Generate (Custom) | FULL style string | Tagged lyrics, 2 clips |
| 2 | Pick best clip | — | Listen to both, pick top |
| 3 | Extend @ 0:01 | **BLANK** | Dropdown: Edit → Extend |
| 4 | Extend @ 0:01 | **BLANK** | Repeat same process |
| 5 | Cover | **BLANK** | Dropdown: Remix → Cover |
| 6 | Remaster | v5.5 / Normal | `...` → Edit → Remaster |

---

## STEP-BY-STEP UI EXECUTION (Suno v5.5)

### STEP 1 — GENERATE
- Go to `suno.com/create`
- Mode: **Custom** (not Simple)
- Paste **fully tagged lyrics** into Lyrics field
- Paste **full style string** into Styles field
- Hit **Create** → generates 2 clips
- Credits cost: **10 credits**

### STEP 2 — PICK BEST CLIP
- Listen to both clips in workspace
- Select the better one (user decision)

### STEP 3 — EXTEND @ 0:01 (First)
- Hover the chosen clip in workspace → click **Remix** button
- OR go to song page → click **Remix** → **Extend**
- In Create panel: mode dropdown shows **Extend**
- Set **Extend from** field to: `00:01.0`
- **Style field: CLEAR IT** (click field → Ctrl+A → Backspace)
- Lyrics: leave as placeholder (do not fill)
- Hit **Create**
- Credits cost: **10 credits**
- Pick best of 2

### STEP 4 — EXTEND @ 0:01 (Second)
- On the winning Extend 1 clip: `...` → Edit dropdown → **Extend**
- Set **Extend from** to: `00:01.0`
- **Style field: BLANK**
- Hit **Create**
- Credits cost: **10 credits**
- Pick best of 2

### STEP 5 — COVER (No Style)
- Navigate to the winning Extend 2 clip's song page
- Click **Remix** button (bottom right of song page)
- Select **Cover**
- **Style field: CLEAR completely** (form_input or Ctrl+A → Backspace)
- Lyrics: leave as placeholder
- Hit **Create**
- Credits cost: **10 credits**
- Pick best of 2

### STEP 6 — REMASTER (Mandatory — This is the ceiling)
- On the winning Cover clip in workspace: `...` → **Edit** → **Remaster**
- Model: **v5.5**
- Variations strength: **Normal**
- Click **Remaster**
- Credits cost: **10 credits**
- Pick best of 2 — this is your final song

---

## CRITICAL RULES

1. **Extend from MUST be 00:01.0** — not mid-track, not end. Always 0:01.
2. **Style field MUST be blank on Steps 3, 4, 5** — any style text breaks the chain
3. **Remaster is NOT optional** — it is the true audio ceiling. Never skip it.
4. **Cover does NOT lose lyrics** — the lyrics display in the preview panel. Trust it.
5. **Between each step: always pick best of 2** before proceeding
6. **Never use Simple mode** — always Custom with tagged lyrics

---

## HOW TO FIND EXTEND IN THE UI

The Extend option has THREE access paths in v5.5:

| Path | How |
|------|-----|
| Song page | Click **Remix** (bottom right) → **Extend** |
| Workspace hover | Hover clip → **Remix** button → panel loads in Cover mode → click **Cover** dropdown → select **Extend** |
| Already in panel | Click mode dropdown (shows Cover/Extend/etc) → **Extend** |

> ⚠️ Clicking **Remix** from the workspace list defaults to **Cover** mode.
> Always check the mode dropdown in the panel and switch to **Extend** if needed.

---

## STYLE FIELD CLEARING (Reliable Method)

The Styles field in Suno v5.5 persists previous values. To reliably clear it:
1. Click inside the Styles text field
2. Press `Ctrl+A` to select all
3. Press `Backspace` to delete
4. Verify it shows only grey placeholder text — that means it's empty
5. Do NOT click the refresh/shuffle icon — that fills it with random styles

---

## CREDIT BUDGET

| Step | Credits |
|------|---------|
| Generate | 10 |
| Extend x2 | 20 |
| Cover | 10 |
| Remaster | 10 |
| **Total** | **50 credits per full run** |

---

## SESSION RECOVERY

If Comet loses context mid-session, paste this into chat:

> "We are doing the Suno v5.5 Optimal Path. Current step is [X]. The active track URL is [paste URL]. Continue from here — no questions."

---

## WHAT WENT WRONG THIS SESSION (LESSONS LEARNED)

| Issue | Root Cause | Fix |
|-------|-----------|-----|
| Extend not found in `...` menu | It lives under `...` → Edit submenu, not top level | Always go `...` → Edit → Extend |
| Cover mode loaded instead of Extend | Remix button from workspace list defaults to Cover | Check dropdown, switch to Extend |
| Style field not clearing | Field persists old values visually | Ctrl+A + Backspace, verify grey placeholder |
| "Lost lyrics" concern on Cover | Cover reinterprets production but keeps lyrics | Check preview panel — lyrics are preserved |
| Remaster dialog shows Previous Remasters | Normal behavior — shows history | Ignore, just click Remaster button |