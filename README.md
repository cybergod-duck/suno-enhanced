# VNR MUD-KUTTER (v3.3.0)
### Studio Quality Automation Suite for Suno.com (v5.5)

VNR MUD-KUTTER is an autonomous browser-layer engine designed to automate the optimal production path for studio-quality tracks on Suno.com. It features a sleek, Web3-style slide-out dashboard, real-time input status diagnostics, a secure metadata vault, and a React-safe value injection system.

---

## ⚡ The 5-Step Optimal Path

MUD-KUTTER guides you through the verified Suno production ceiling path:

1. **Step 1: Genesis Base** — Write tagged lyrics and full style. Generates composition anchor and saves original values to Vault.
2. **Step 2: Extend @ 0:01 (DNA Lock)** — Automatically locks timing at `0:01`, clears style, and re-pastes tagged lyrics. Discards context to force full regeneration from clean acoustic conditioning.
3. **Step 2.5: Vocal Lock (Optional @ 0:06)** — Locks extend at `0:06`, clears style, and re-pastes lyrics. Use if the instrumental is good but vocal delivery needs a rerun.
4. **Step 3: Get Whole Song (Stitch)** — Compile the rendered segments into a single cohesive track.
5. **Step 4: Cover (Style + Lyrics)** — Restores your saved Style and Lyrics from the vault, then prompts for a Cover pass. Critical step to bring the full instrumentation and production back.
6. **Step 5: Remaster (Ceiling)** — Performs the final export remaster (v5.5, Normal strength) to strip synthetic high-frequency noise and chain compression.

---

## 🚀 How to Install & Launch

### Option A: Standalone Chrome / Brave Extension (No Tampermonkey Needed)
*This is the cleanest and most lightweight installation route:*
1. Download or locate `vnr_mud_kutter.zip` and extract it (or keep the `vnr_mud_kutter` folder).
2. Open your browser and navigate to `chrome://extensions`.
3. Enable **Developer Mode** (toggle in the top-right corner).
4. Click **Load unpacked** (button in the top-left corner).
5. Select the `vnr_mud_kutter` folder.
6. The floating handle will immediately appear on the right edge of Suno.com. Click it to open the control panel.

### Option B: Tampermonkey Userscripts
*For users running userscript managers:*
1. Install the **Tampermonkey** extension from the Chrome Web Store.
2. Open the Tampermonkey dashboard and click **Create a new script**.
3. Copy the contents of `tampermonkey_scripts/suno_automation_script.user.js` and paste them into the editor.
4. Press `Ctrl + S` to save.
5. Open Suno.com to launch the assistant dashboard.

---

## 🛠️ Key Engine Features

* **React-Bypassing Value Injector:** Bypasses React's virtual DOM state interception. It uses native HTML prototypes to set timing inputs (`00:01.0`, etc.) and dispatches bubbling events (`input`, `change`, `blur`) to ensure Suno's internal state is fully synchronized.
* **Metadata Vault:** A secure panel-level vault that allows you to view and edit saved Styles and Lyrics. Features **Grab Active** and **Push Active** buttons to easily pull or push strings to Suno's UI.
* **Diagnostics Status LEDs:** Real-time LED indicators for Style, Lyrics, and Extend inputs that turn green when target DOM elements are detected on the active page.
* **Performance Shield:** Intercepts and blocks memory-heavy tracking and telemetry scripts (Clarity, Amplitude, Braze, Tapad) before they load to preserve CPU/GPU performance.
* **Toast Notification Engine:** Replaced disruptive standard browser alert popups with a non-blocking, self-dismissing neon-style toast alert system.

---

*Voss Neural Research LLC © 2026*
