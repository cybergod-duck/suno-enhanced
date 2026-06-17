# RAW FORENSIC DATA: SUNO.COM TELEMETRY & TRACKING STACK (MARCH 2026)
Compiled by: Voss Neural Research
Target: suno.com

## Part 1: Tracking Network Map (71+ Domains Detected)
Network analysis demonstrates 71+ third-party domains loading during a standard Suno.com session. Key offending endpoints:

1.  **Session Replay / DOM Recording**
    *   `scripts.clarity.ms` (Microsoft Clarity) - Uses `MutationObserver` to constantly serialize DOM state. Confirmed to record all UI interactions, mouse movements, scrolling, and keystrokes.
    *   `snippet.maze.co` (Maze) - Funnel & interaction tracking.

2.  **Cross-Device Identity Graphs & Telemetry**
    *   `pixel.tapad.com` (Tapad) - Experian-owned cross-device graph (links mobile and desktop identities).
    *   `tte-prod.telemetry.vaultdcr.com` (Vault DataCore) - Triple-endpoint telemetry gathering hardware/network signatures.
    *   `s.axon.ai` (Singular) - Measurement & marketing analytics.
    *   `imtwjwoasak.com` - Obfuscated stealth tracker domain.

3.  **Real-Time Ad Exchange / Cookie Syncing (42+ connections)**
    *   `*.adnxs.com` (Xandr)
    *   `*.adsrvr.org` (The Trade Desk)
    *   `*.criteo.com` (Criteo)
    *   `*.id5-sync.com` (Universal ID Sync)

## Part 2: Cryptocurrency Proof-of-Work (PoW) Telemetry
Forensic inspection of Chromium/Brave LocalStorage and `000005.ldb` databases reveals the `hCaptcha` anti-bot framework is performing non-consensual background PoW token mining using the visitor's CPU.

**Extracted Configuration Strings from Storage:**
*   Target Chains: `chainId 0x1` (Ethereum Mainnet), `binance`
*   Logging Profile: `SILENT` (Designed to hide console warnings from the user)
*   CPU Impact: 20-50% CPU spikes specifically during audio generation challenge cycles.

**Incognito Bypass Vulnerability:**
Storage dump analysis proved that hCaptcha re-seeds its tracking infrastructure backward into the *main* user profile's IndexedDB/LocalStorage when a user visits Suno in an Incognito/Private window. Private browsing does **not** prevent this data drop.

## Part 3: System Abuse & The "GPU Death Loop"
Microsoft Clarity's `MutationObserver` code cannot handle Suno's highly animated web UI. It attempts to record every frame of animation into a serialization buffer, which completely starves the Desktop Window Manager (DWM) and GPU.

**Process Execution Dumps (March 7, 2026):**
The following are exact Process ID (PID) captures showing the runaway compute consumed by these tracker loops:

*   **Chrome PID 600**
    *   CPU Burned: 307.8 seconds
    *   Handles: **1,733** (Hallmark signature of Clarity loop inflation, normal is ~300)
*   **Brave PID 33348**
    *   CPU Burned: 438.1 seconds
    *   Handles: **1,816** (Clarity Handle Inflation)
*   **Brave PID 7268**
    *   CPU Burned: 858.8 seconds (14.3 solid minutes) of background CPU

**System Memory Starvation Impact:**
The loop eventually depletes all available hardware RAM, dropping Free Physical Memory to `< 0.9 GB`, forcing Windows into aggressive paging. This compositor starvation causes the entire Windows UI to lag and window geometry to visibly warp and corrupt.
