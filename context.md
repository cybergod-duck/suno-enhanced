# SUNO REVERSE ENGINEERING — Master Context File

This document details the exact state of our reverse engineering research, the Suno-Enhanced Chrome Extension automation suite, our web landing page (`simple-as-that.net`), payment gateway setups, and our X.com marketing autopilot loops.

---

## 🧬 The Secret Sauce: The 6-Action Optimal Path (Suno v5.5)

To achieve studio-grade quality on Suno.com (v5.5) and bypass common compression artifacts, muddiness, and robotic voice textures, we reverse-engineered a specific sequence of operations:

1. **Step 1 — Start Your Song (Genesis):**
   - Grab the raw style prompt (e.g. `vocals, genre`) and lyrics.
   - Optimize the style prompt using NUSO conventions: `[vocals info], [delivery info], upfront — [genre & BPM], spacious mix, vocal-forward, minimalist production`.
   - Generate the initial track pair.
2. **Step 2 — Pick Best Take (Extend @ 0:01 - DNA Lock):**
   - Select the best of the generated Genesis clips.
   - Extend the song starting at exactly **`00:01.0`**.
   - **Crucial Rule:** The `Style` textarea **must be completely cleared/blank**. The original lyrics are pasted in. This forces Suno to reuse the audio seeds of the parent clip without compounding texturing/muddiness.
3. **Step 2.5 — Vocal Pass (Extend @ 0:06 - Vocal Lock):**
   - Select the best take from the previous step.
   - Extend the song starting at exactly **`00:06.0`**.
   - The `Style` textarea **must remain completely cleared/blank**, and the original lyrics are re-pasted. This locks down the vocal consistency.
4. **Step 3 — Click to Polish (Waveform-only Cover):**
   - Select the best take.
   - Select **Cover** mode.
   - The `Style` textarea **must remain completely cleared/blank**, and the original lyrics are re-pasted. This establishes a clean waveform cover.
5. **Step 4 — Stitch the Full Song (Stitch):**
   - Click the option button (`...`) on the best take and select **Get Whole Song** to stitch the segments together.
6. **Step 5 — Final Pass (Cover with Style + Lyrics):**
   - Select the stitched track.
   - Select **Cover** mode.
   - **Crucial Rule:** The original saved Style prompt and original Lyrics are **fully restored** to the fields. This re-applies the optimized tags onto the clean waveform.
7. **Step 6 — Ceiling Pass (Remaster):**
   - Click option button (`...`) -> select **Remaster**.
   - Model: **v5.5**. Strength: **Normal**.
   - This completes the track with a true studio-quality ceiling.

---

## 🦾 Suno-Enhanced Chrome Extension (v4.0.0)

`Suno-Enhanced` is our unpacked Chrome/Brave Extension that injects a Web3-styled slide-out assistant directly onto Suno.com to guide and automate the Optimal Path.

### 1. One-Click Metadata Vault Automation
We have eliminated manual vault controls:
- **Automated Grab:** The first time a user clicks the primary action button (`▶ CREATE STEP X`) on steps 2–7, the extension automatically scrapes the style prompt and lyrics of the currently playing/selected track (using React Fiber nodes and DOM fallbacks) and saves them in `localStorage` under `vnr-original-style` and `vnr-original-lyrics`.
- **Hold Back & Insert:** During Step 2, 2.5, and 3, the extension automatically clears the Style input and pastes the saved lyrics. At Step 5, it automatically restores the original saved Style prompt and lyrics.
- **Simplified UI:** The manual "Grab Active" and "Push Active" buttons have been completely removed. The vault is now a read-only accordion panel (`📁 METADATA VAULT (AUTOMATED)`) that shows the stashed values in real-time. Manual keystrokes in the inputs sync instantly.
- **Path Resetting:** Clicking the **Reset Path** button instantly returns the user to Step 1 and clears the stashed vault metadata in `localStorage` so a new song session can begin.

### 2. High-Readability Backlit Glow UI
- **Full-Width Bars:** The step cards (`.vnr-step-item`) have no border-radius and negative horizontal margins, making them span the entire width of the slide panel.
- **Vertical Fit (Zero Scrollbar):** The steps container has `overflow-y: hidden` and the step items have `flex: 1 1 0%` with `8px 18px` padding. This dynamically stretches the 7 step bars to fit the column height exactly between the vault panel and the bottom actions, eliminating scrollbars and empty voids.
- **Cyberpunk Backlighting:** 
  * Active step glows with a cyan/magenta gradient backlight, a cyan left-border, and a neon box-shadow.
  * Completed steps fade to an emerald gradient backdrop with a green left-border and checkmark indicator.
  * Step 2.5 has been renamed from "Optional Vocal Pass" to **"Vocal Pass"** to ensure it is always clicked.

---

## 🌐 Web Landing Page & Prompt Store (`simple-as-that.net`)

The website serves as our public store and SEO traffic landing page, built with Astro and styled with vanilla CSS.

### 💳 Payment Gateway Integrations
1. **Stripe Integration:**
   - **$1 USD Perfect Prompt product:** Clicks load the live Stripe Checkout Link (`https://buy.stripe.com/9B628semIh1G7M992eeAg0q`), which redirects back to the website with `?paid=1` to automatically unlock the NUSO prompts.
   - **$4.99 USD Style Template Packs v2.2:** Clicks load the live Stripe Checkout Link (`https://buy.stripe.com/9B68wQdcz12I0jH5kpx`).
2. **Crypto & Cash App Portal:**
   - Dropdown options allow users to pay via **Cash App** (`$UQB32i75SL6GMijsMB7cta6awWgORVARc4SjczW2U4gewO58`), **Bitcoin** (`bc1qcfjg0yz0wd7s5z9g9qua53r4rpknj5ccgxsszp`), or **Ethereum** (`0x0190C582b0eF8a4D27aaDbf73FEFc1f389bd1f5C`).
   - The UI automatically renders the corresponding QR code (SegWit-compatible and wallet-scannable) along with a Copy Address button and a manual "I've Paid" unlock override.
3. **NUSO Chatbot:** Swapped the LILA branding for **NUSO** (mirror of SUNO) for all system guide files, prompt engineering tools, and chatbot interfaces.

---

## 🤖 X.com Autopilot Marketing Assistant (v2.5.6)

An in-browser Tampermonkey script (`suno_x_marketing_assistant.user.js`) designed to search for and replies to users complaining about Suno sound quality on X.com.

- **Dynamic LLM Queries:** Uses Groq (`llama-3.1-8b-instant`) to generate advanced search terms targeting Suno quality issues.
- **Pure Template Enforcement:** The AI classifies the tweet's complaint (Vocal Quality vs. Muffled Mix vs. Skepticism) and outputs a number (1, 2, or 3). The userscript programmatically pastes the corresponding template and rotates SoundCloud track teasers to prevent LLM hallucinations.
- **Authentic Conversational Codex:** Replies strictly adhere to a zero-marketing, casual style (all lowercase, spelling shortcuts like `u/ur/prob/fr`, dry producer deflection).
- **Self-Reply Filter:** Automatically scans the logged-in user handle and skips replying to their own posts to prevent loops.