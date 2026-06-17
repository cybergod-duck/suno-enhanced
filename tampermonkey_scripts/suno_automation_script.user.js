// ==UserScript==
// @name         SunoForge Omega - Studio Quality Automation Suite
// @namespace    vossneuralresearch.com
// @version      4.0.0
// @description  Automates the 6-action Optimal Path for Studio Quality on Suno.com (v5.5). Right-side Web3-style slide-out dashboard.
// @author       the_duck / Voss Neural Research
// @match        https://suno.com/*
// @match        https://www.suno.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    console.log("VNR: SunoForge Omega Script Initializing...");

    // Inject Custom CSS Styles
    const style = document.createElement('style');
    style.id = 'vnr-styles';
    style.innerHTML = `
        /* BODY SHIFT LOGIC */
        body {
            transition: width 350ms cubic-bezier(0.16, 1, 0.3, 1) !important;
            width: 100% !important;
        }
        body.vnr-panel-open {
            width: calc(100% - 360px) !important;
        }

        /* VNR SLIDE-OUT PANEL */
        .vnr-slide-panel {
            position: fixed !important;
            top: 0 !important;
            right: 0 !important;
            width: 360px !important;
            height: 100vh !important;
            background: rgba(8, 8, 14, 0.96) !important;
            border-left: 2px solid rgba(255, 0, 204, 0.4) !important;
            box-shadow: -10px 0 30px rgba(0, 0, 0, 0.6) !important;
            z-index: 999999999 !important;
            padding: 16px 14px !important;
            box-sizing: border-box !important;
            backdrop-filter: blur(16px) !important;
            display: flex !important;
            flex-direction: column !important;
            color: #ffffff !important;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
            transition: transform 350ms cubic-bezier(0.16, 1, 0.3, 1) !important;
            transform: translateX(100%) !important;
            pointer-events: auto !important;
        }
        .vnr-slide-panel.open {
            transform: translateX(0) !important;
        }

        .vnr-drawer-header {
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
            padding-bottom: 8px !important;
            margin-bottom: 8px !important;
            flex-shrink: 0 !important;
        }
        .vnr-brand-group {
            display: flex !important;
            flex-direction: column !important;
        }
        .vnr-title {
            font-size: 17px !important;
            font-weight: 900 !important;
            letter-spacing: 1px !important;
            background: linear-gradient(90deg, #ff00cc, #00ffff) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            text-shadow: 0 0 15px rgba(255, 0, 204, 0.2) !important;
        }
        .vnr-version {
            font-size: 8px !important;
            color: rgba(255, 255, 255, 0.4) !important;
            font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace !important;
            margin-top: 1px !important;
            letter-spacing: 1px !important;
        }
        .vnr-close-circle {
            background: rgba(255, 255, 255, 0.05) !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            color: rgba(255, 255, 255, 0.6) !important;
            width: 24px !important;
            height: 24px !important;
            border-radius: 50% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            font-size: 14px !important;
            cursor: pointer !important;
            transition: all 200ms ease !important;
        }
        .vnr-close-circle:hover {
            background: rgba(255, 0, 204, 0.1) !important;
            border-color: #ff00cc !important;
            color: #ff00cc !important;
            box-shadow: 0 0 10px rgba(255, 0, 204, 0.4) !important;
        }

        /* PERFECT PROMPTS BUTTON */
        .vnr-perfect-prompts-btn {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            background: linear-gradient(90deg, #ff00cc, #7b00ff) !important;
            border: 1px solid rgba(255, 0, 204, 0.4) !important;
            border-radius: 8px !important;
            color: #ffffff !important;
            font-size: 10px !important;
            font-weight: 800 !important;
            padding: 8px 12px !important;
            margin-bottom: 8px !important;
            text-decoration: none !important;
            text-transform: uppercase !important;
            letter-spacing: 0.8px !important;
            box-shadow: 0 0 10px rgba(255, 0, 204, 0.3) !important;
            transition: all 200ms ease !important;
            text-align: center !important;
            cursor: pointer !important;
        }
        .vnr-perfect-prompts-btn:hover {
            box-shadow: 0 0 18px rgba(0, 255, 254, 0.6) !important;
            background: linear-gradient(90deg, #7b00ff, #00ffff) !important;
            color: #ffffff !important;
            transform: translateY(-1px) !important;
        }

        /* DIAGNOSTICS & CONNECTION BAR */
        .vnr-connection-bar {
            display: flex !important;
            justify-content: space-between !important;
            background: rgba(255, 255, 255, 0.02) !important;
            border: 1px solid rgba(255, 255, 255, 0.05) !important;
            border-radius: 8px !important;
            padding: 6px 10px !important;
            margin-bottom: 8px !important;
            flex-shrink: 0 !important;
        }
        .vnr-status-item {
            font-size: 9px !important;
            font-weight: 700 !important;
            display: flex !important;
            align-items: center !important;
            gap: 4px !important;
            color: rgba(255, 255, 255, 0.7) !important;
        }
        .vnr-status-led {
            width: 7px !important;
            height: 7px !important;
            border-radius: 50% !important;
            display: inline-block !important;
            background: #ff3b30 !important;
            box-shadow: 0 0 6px #ff3b30 !important;
            transition: all 300ms ease !important;
        }
        .vnr-status-led.connected {
            background: #4cd964 !important;
            box-shadow: 0 0 6px #4cd964 !important;
        }

        /* COLLAPSIBLE VAULT SECTION */
        .vnr-collapsible-section {
            background: rgba(255, 255, 255, 0.01) !important;
            border: 1px solid rgba(255, 255, 255, 0.04) !important;
            border-radius: 8px !important;
            margin-bottom: 6px !important;
            flex-shrink: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            overflow: hidden !important;
        }
        .vnr-collapsible-header {
            padding: 6px 10px !important;
            background: rgba(8, 8, 14, 0.6) !important;
            font-size: 10px !important;
            font-weight: 800 !important;
            letter-spacing: 0.5px !important;
            cursor: pointer !important;
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
            user-select: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.04) !important;
        }
        .vnr-collapsible-header:hover {
            background: rgba(255, 255, 255, 0.04) !important;
            color: #00ffff !important;
        }
        .vnr-collapsible-content {
            padding: 8px !important;
            display: none !important;
            flex-direction: column !important;
            gap: 6px !important;
        }
        .vnr-collapsible-content.open {
            display: flex !important;
        }
        .vnr-field-group {
            display: flex !important;
            flex-direction: column !important;
            gap: 3px !important;
        }
        .vnr-label {
            font-size: 8px !important;
            color: rgba(255, 255, 255, 0.5) !important;
            font-weight: 600 !important;
        }
        .vnr-input {
            background: rgba(0, 0, 0, 0.5) !important;
            border: 1px solid rgba(255, 255, 255, 0.08) !important;
            border-radius: 4px !important;
            color: #ffffff !important;
            padding: 4px 6px !important;
            font-size: 9px !important;
            font-family: ui-monospace, monospace !important;
            width: 100% !important;
            box-sizing: border-box !important;
        }
        .vnr-textarea {
            height: 80px !important;
            resize: vertical !important;
            overflow-y: auto !important;
        }
        .vnr-btn-row {
            display: flex !important;
            gap: 4px !important;
            margin-top: 2px !important;
        }
        .vnr-vault-btn {
            flex-grow: 1 !important;
            background: rgba(255, 255, 255, 0.04) !important;
            border: 1px solid rgba(255, 255, 255, 0.08) !important;
            color: rgba(255, 255, 255, 0.8) !important;
            font-size: 8px !important;
            font-weight: 700 !important;
            padding: 4px !important;
            border-radius: 4px !important;
            cursor: pointer !important;
            text-transform: uppercase !important;
            transition: all 150ms ease !important;
        }
        .vnr-vault-btn:hover {
            background: rgba(0, 255, 255, 0.08) !important;
            border-color: #00ffff !important;
            color: #00ffff !important;
        }

        /* STEPS CONTAINER */
        .vnr-steps-wrapper {
            flex-grow: 1 !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 1px !important;
            margin-bottom: 8px !important;
            overflow-y: hidden !important;
            margin-left: -14px !important;
            margin-right: -14px !important;
            padding-right: 0 !important;
        }
        .vnr-steps-wrapper::-webkit-scrollbar {
            width: 5px !important;
        }
        .vnr-steps-wrapper::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.3) !important;
        }
        .vnr-steps-wrapper::-webkit-scrollbar-thumb {
            background: rgba(255, 0, 204, 0.4) !important;
            border-radius: 4px !important;
        }
        .vnr-steps-wrapper::-webkit-scrollbar-thumb:hover {
            background: rgba(0, 255, 255, 0.7) !important;
        }

        .vnr-step-item {
            background: rgba(255, 255, 255, 0.015) !important;
            border-top: 1px solid rgba(255, 255, 255, 0.02) !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.02) !important;
            border-left: 5px solid transparent !important;
            border-right: none !important;
            border-radius: 0 !important;
            padding: 8px 18px !important;
            display: flex !important;
            align-items: center !important;
            gap: 14px !important;
            cursor: pointer !important;
            transition: all 250ms cubic-bezier(0.16, 1, 0.3, 1) !important;
            position: relative !important;
            flex: 1 1 0% !important;
        }
        .vnr-step-item:hover {
            background: rgba(255, 255, 255, 0.04) !important;
            border-left: 5px solid rgba(255, 255, 255, 0.2) !important;
        }
        .vnr-step-item.active {
            background: linear-gradient(90deg, rgba(0, 255, 255, 0.12) 0%, rgba(255, 0, 204, 0.03) 100%) !important;
            border-top: 1px solid rgba(0, 255, 255, 0.25) !important;
            border-bottom: 1px solid rgba(0, 255, 255, 0.15) !important;
            border-left: 5px solid #00ffff !important;
            box-shadow: inset 0 0 15px rgba(0, 255, 255, 0.15), 0 4px 20px rgba(0, 255, 255, 0.2) !important;
            z-index: 2 !important;
        }
        .vnr-step-item.completed {
            background: linear-gradient(90deg, rgba(76, 217, 100, 0.06) 0%, rgba(76, 217, 100, 0.01) 100%) !important;
            border-left: 5px solid #4cd964 !important;
            border-top-color: rgba(76, 217, 100, 0.05) !important;
            border-bottom-color: rgba(76, 217, 100, 0.05) !important;
            opacity: 0.8 !important;
        }
        .vnr-step-item.completed:hover {
            background: linear-gradient(90deg, rgba(76, 217, 100, 0.1) 0%, rgba(76, 217, 100, 0.02) 100%) !important;
            opacity: 1 !important;
        }
        
        .vnr-step-icon {
            width: 24px !important;
            height: 24px !important;
            border-radius: 50% !important;
            background: rgba(255, 255, 255, 0.04) !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            font-size: 11px !important;
            font-weight: 800 !important;
            font-family: ui-monospace, monospace !important;
            color: rgba(255, 255, 255, 0.5) !important;
            flex-shrink: 0 !important;
            transition: all 200ms ease !important;
        }
        .vnr-step-item.active .vnr-step-icon {
            background: #00ffff !important;
            border-color: #00ffff !important;
            color: #000000 !important;
            box-shadow: 0 0 10px rgba(0, 255, 255, 0.5) !important;
        }
        .vnr-step-item.completed .vnr-step-icon {
            background: rgba(76, 217, 100, 0.1) !important;
            border-color: #4cd964 !important;
            color: #4cd964 !important;
            box-shadow: 0 0 6px rgba(76, 217, 100, 0.2) !important;
        }
        
        .vnr-step-details {
            display: flex !important;
            flex-direction: column !important;
            gap: 2px !important;
        }
        .vnr-step-name {
            font-size: 11px !important;
            font-weight: 700 !important;
            color: rgba(255, 255, 255, 0.9) !important;
            letter-spacing: 0.3px !important;
        }
        .vnr-step-item.active .vnr-step-name {
            color: #ffffff !important;
            text-shadow: 0 0 8px rgba(0, 255, 255, 0.4) !important;
        }
        .vnr-step-item.completed .vnr-step-name {
            color: rgba(255, 255, 255, 0.6) !important;
            text-decoration: none !important;
        }
        .vnr-step-desc {
            font-size: 9px !important;
            color: rgba(255, 255, 255, 0.4) !important;
            line-height: 1.2 !important;
        }
        .vnr-step-item.active .vnr-step-desc {
            color: rgba(255, 255, 255, 0.7) !important;
        }

        /* ACTIONS SECTION */
        .vnr-actions-group {
            display: flex !important;
            flex-direction: column !important;
            gap: 6px !important;
            border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
            padding-top: 8px !important;
            flex-shrink: 0 !important;
        }

        .vnr-auto-create-row {
            display: flex !important;
            align-items: center !important;
            gap: 5px !important;
            font-size: 9px !important;
            color: rgba(255, 255, 255, 0.6) !important;
            margin-bottom: 2px !important;
            user-select: none !important;
        }
        .vnr-auto-create-row input {
            cursor: pointer !important;
            accent-color: #ff00cc !important;
        }
        
        .vnr-btn-primary {
            background: linear-gradient(135deg, #ff00cc 0%, #7b00ff 100%) !important;
            color: #ffffff !important;
            height: 38px !important;
            border-radius: 8px !important;
            border: none !important;
            font-size: 11px !important;
            font-weight: 800 !important;
            letter-spacing: 0.5px !important;
            text-transform: uppercase !important;
            cursor: pointer !important;
            box-shadow: 0 4px 12px rgba(255, 0, 204, 0.25) !important;
            transition: all 200ms ease !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
        }
        .vnr-btn-primary:hover {
            box-shadow: 0 4px 18px rgba(255, 0, 204, 0.4), 0 0 10px #00ffff !important;
            transform: scale(1.01) !important;
        }
        
        .vnr-btn-secondary-row {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 6px !important;
        }
        
        .vnr-btn-secondary {
            background: rgba(255, 255, 255, 0.03) !important;
            border: 1px solid rgba(255, 255, 255, 0.06) !important;
            color: rgba(255, 255, 255, 0.6) !important;
            height: 28px !important;
            border-radius: 6px !important;
            font-size: 9px !important;
            font-weight: 600 !important;
            text-transform: uppercase !important;
            cursor: pointer !important;
            transition: all 150ms ease !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
        }
        .vnr-btn-secondary:hover {
            background: rgba(255, 255, 255, 0.06) !important;
            border-color: rgba(255, 255, 255, 0.12) !important;
            color: #ffffff !important;
        }
        
        .vnr-footer-brand {
            font-size: 8px !important;
            color: rgba(255, 255, 255, 0.2) !important;
            text-align: center !important;
            font-family: ui-monospace, monospace !important;
            margin-top: 4px !important;
            letter-spacing: 0.5px !important;
        }

        /* FLOATING SIDE HANDLE */
        .vnr-side-handle {
            position: fixed !important;
            top: 50% !important;
            right: 0 !important;
            transform: translateY(-50%) !important;
            width: 40px !important;
            height: 72px !important;
            background: rgba(8, 8, 14, 0.95) !important;
            border: 2px solid #ff00cc !important;
            border-right: none !important;
            border-radius: 12px 0 0 12px !important;
            cursor: pointer !important;
            z-index: 999999990 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            box-shadow: -5px 0 15px rgba(255, 0, 204, 0.4) !important;
            transition: all 250ms cubic-bezier(0.16, 1, 0.3, 1) !important;
            pointer-events: auto !important;
        }
        .vnr-side-handle:hover {
            width: 46px !important;
            box-shadow: -5px 0 25px rgba(255, 0, 204, 0.6), 0 0 10px #00ffff !important;
            border-color: #00ffff !important;
        }
        .vnr-side-handle svg {
            transition: transform 250ms ease !important;
            stroke: #ff00cc !important;
        }
        .vnr-side-handle:hover svg {
            stroke: #00ffff !important;
            transform: scale(1.1) !important;
        }
    `;

    // Step definitions - user-facing only, NO technical detail exposed
    const steps = [
        { num: 1, title: "Step 1 — Start Your Song", desc: "Get lyrics + style from NUSO. Paste in, then click.", actionText: "▶ Create Step 1" },
        { num: 2, title: "Step 2 — Pick Best Take & Click", desc: "Listen. Select the best version. Hit the button.", actionText: "▶ Create Step 2" },
        { num: 3, title: "Step 2.5 — Vocal Pass", desc: "Click for a tighter vocal lock.", actionText: "▶ Vocal Pass" },
        { num: 4, title: "Step 3 — Click to Polish", desc: "Select best take. Click. Let it work.", actionText: "▶ Create Step 3" },
        { num: 5, title: "Step 4 — Stitch the Full Song", desc: "Select best take. Click 'Get Whole Song' when ready.", actionText: "▶ Stitch Whole Song" },
        { num: 6, title: "Step 5 — Final Pass", desc: "Select best take. Click. Almost done.", actionText: "▶ Create Step 5" },
        { num: 7, title: "Step 6 — Ceiling Pass ✨", desc: "Last click. This is the ceiling. Select your master.", actionText: "▶ Final Ceiling Pass" }
    ];

    // Global states
    let currentStep = 1;
    let isPanelVisible = true;
    
    try {
        isPanelVisible = localStorage.getItem('vnr-panel-visible') !== 'false';
        currentStep = parseInt(localStorage.getItem('vnr-current-step') || '1');
    } catch (e) {
        console.warn("VNR: localStorage access warning:", e);
    }

    // Create Toggle Handle element
    const toggleBtn = document.createElement('div');
    toggleBtn.id = 'vnr-toggle-btn';
    toggleBtn.className = 'vnr-side-handle';
    toggleBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
    `;
    toggleBtn.title = 'Open Suno-Enhanced Assistant';

    // Create Panel element
    const panel = document.createElement('div');
    panel.id = 'vnr-control-panel';
    panel.className = 'vnr-slide-panel';
    panel.innerHTML = `
        <div class="vnr-drawer-header">
            <div class="vnr-brand-group">
                <span class="vnr-title">Suno-Enhanced</span>
                <span class="vnr-version">v4.0.0</span>
            </div>
            <button id="vnr-close-btn" class="vnr-close-circle" title="Close Panel">×</button>
        </div>

        <!-- PERFECT PROMPTS PORTAL LINK -->
        <a href="https://simple-as-that.net/" target="_blank" class="vnr-perfect-prompts-btn" id="vnr-portal-link">✨ GET PERFECT PROMPTS</a>
        
        <!-- CONNECTION STATUS BAR -->
        <div class="vnr-connection-bar">
            <div class="vnr-status-item">
                <span class="vnr-status-led" id="vnr-led-style"></span> Style
            </div>
            <div class="vnr-status-item">
                <span class="vnr-status-led" id="vnr-led-lyrics"></span> Lyrics
            </div>
            <div class="vnr-status-item">
                <span class="vnr-status-led" id="vnr-led-extend"></span> Extend
            </div>
        </div>

        <!-- METADATA VAULT SECTION -->
        <div class="vnr-collapsible-section">
            <div class="vnr-collapsible-header" id="vnr-vault-toggle">
                <span>📁 METADATA VAULT (AUTOMATED)</span>
                <span id="vnr-vault-arrow">▶</span>
            </div>
            <div class="vnr-collapsible-content" id="vnr-vault-content">
                <div class="vnr-field-group">
                    <label class="vnr-label">SAVED STYLE</label>
                    <textarea class="vnr-input vnr-textarea" id="vnr-vault-style" placeholder="No style saved yet"></textarea>
                </div>
                <div class="vnr-field-group">
                    <label class="vnr-label">SAVED LYRICS</label>
                    <textarea class="vnr-input vnr-textarea" id="vnr-vault-lyrics" placeholder="No lyrics saved yet"></textarea>
                </div>
            </div>
        </div>

        <!-- STEPS CONTAINER -->
        <div class="vnr-steps-wrapper" id="vnr-steps-container"></div>
        
        <!-- ACTIONS SECTION -->
        <div class="vnr-actions-group">
            <label class="vnr-auto-create-row">
                <input type="checkbox" id="vnr-auto-create-cb" checked />
                <span>Auto-Click "Create" when applying</span>
            </label>
            <button id="vnr-action-btn" class="vnr-btn-primary">APPLY STEP ACTION</button>
            <div class="vnr-btn-secondary-row">
                <button id="vnr-reset-btn" class="vnr-btn-secondary">Reset Path</button>
                <button id="vnr-hide-btn" class="vnr-btn-secondary">Hide Panel</button>
            </div>
            <div class="vnr-footer-brand">Voss Neural Research LLC © 2026</div>
        </div>
    `;

    // Toast Notifications Engine
    function showToast(message, type = 'success') {
        const container = document.getElementById('vnr-toast-container') || createToastContainer();
        const toast = document.createElement('div');
        toast.className = `vnr-toast-item ${type}`;
        toast.innerText = message;
        
        container.appendChild(toast);
        
        setTimeout(() => toast.classList.add('visible'), 50);
        
        setTimeout(() => {
            toast.classList.remove('visible');
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    }

    function createToastContainer() {
        let container = document.getElementById('vnr-toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'vnr-toast-container';
            container.style.cssText = `
                position: fixed !important;
                top: 20px !important;
                right: 380px !important;
                z-index: 1000000000 !important;
                display: flex !important;
                flex-direction: column !important;
                gap: 8px !important;
                pointer-events: none !important;
            `;
            const styleSheet = document.createElement('style');
            styleSheet.innerHTML = `
                .vnr-toast-item {
                    background: rgba(8, 8, 14, 0.95) !important;
                    border: 1px solid rgba(0, 255, 204, 0.4) !important;
                    box-shadow: 0 0 15px rgba(0, 255, 204, 0.2) !important;
                    color: #ffffff !important;
                    padding: 10px 14px !important;
                    border-radius: 8px !important;
                    font-family: system-ui, sans-serif !important;
                    font-size: 11px !important;
                    font-weight: 600 !important;
                    opacity: 0 !important;
                    transform: translateY(-20px) !important;
                    transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1) !important;
                    max-width: 280px !important;
                    pointer-events: auto !important;
                    border-left: 4px solid #00ffff !important;
                }
                .vnr-toast-item.visible {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
                .vnr-toast-item.success {
                    border-color: rgba(76, 217, 100, 0.4) !important;
                    border-left-color: #4cd964 !important;
                    box-shadow: 0 0 15px rgba(76, 217, 100, 0.2) !important;
                }
                .vnr-toast-item.warning {
                    border-color: rgba(255, 204, 0, 0.4) !important;
                    border-left-color: #ffcc00 !important;
                    box-shadow: 0 0 15px rgba(255, 204, 0, 0.2) !important;
                }
                .vnr-toast-item.error {
                    border-color: rgba(255, 59, 48, 0.4) !important;
                    border-left-color: #ff3b30 !important;
                    box-shadow: 0 0 15px rgba(255, 59, 48, 0.2) !important;
                }
                .vnr-toast-item.info {
                    border-color: rgba(0, 122, 255, 0.4) !important;
                    border-left-color: #007aff !important;
                    box-shadow: 0 0 15px rgba(0, 122, 255, 0.2) !important;
                }
            `;
            document.head.appendChild(styleSheet);
            document.documentElement.appendChild(container);
        }
        return container;
    }

    // React-safe state injection helper
    function setReactInputValue(el, value) {
        if (!el) return false;
        
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            el instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype,
            'value'
        ).set;
        
        nativeInputValueSetter.call(el, value);
        
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
        el.dispatchEvent(new Event('blur', { bubbles: true }));
        
        return true;
    }

    // DOM Interaction Helpers
    function findStyleTextarea() {
        let ta = document.querySelector('textarea[placeholder*="style"]') || 
                 document.querySelector('textarea[name="tags"]') ||
                 document.querySelector('textarea[placeholder*="Style"]') ||
                 document.querySelector('textarea[placeholder*="genre"]') ||
                 document.querySelector('textarea[placeholder*="Genre"]');
        if (ta) return ta;

        const textareas = Array.from(document.querySelectorAll('textarea'));
        for (const t of textareas) {
            const ph = (t.placeholder || '').toLowerCase();
            const name = (t.name || '').toLowerCase();
            if (ph.includes('style') || ph.includes('genre') || ph.includes('tags') || name.includes('style') || name.includes('tags')) {
                return t;
            }
        }
        if (textareas.length === 2) {
            return textareas[1];
        }
        return null;
    }

    function findLyricsTextarea() {
        let ta = document.querySelector('textarea[placeholder*="lyrics"]') || 
                 document.querySelector('textarea[name="lyrics"]') ||
                 document.querySelector('textarea[placeholder*="Lyrics"]') ||
                 document.querySelector('textarea[placeholder*="words"]') ||
                 document.querySelector('textarea[placeholder*="insert"]');
        if (ta) return ta;

        const textareas = Array.from(document.querySelectorAll('textarea'));
        for (const t of textareas) {
            const ph = (t.placeholder || '').toLowerCase();
            const name = (t.name || '').toLowerCase();
            if (ph.includes('lyrics') || ph.includes('words') || name.includes('lyrics')) {
                return t;
            }
        }
        if (textareas.length === 2) {
            return textareas[0];
        }
        return null;
    }

    function waitForElement(checkFn, callback, timeout = 3000) {
        const startTime = Date.now();
        function check() {
            const result = checkFn();
            if (result) {
                callback(result);
            } else if (Date.now() - startTime < timeout) {
                setTimeout(check, 50);
            } else {
                callback(null);
            }
        }
        check();
    }

    function findExtendInput() {
        let input = document.querySelector('input[placeholder*="0:00"]') ||
                    document.querySelector('input[placeholder*="00:00"]') ||
                    document.querySelector('input[name*="extend"]') ||
                    document.querySelector('input[placeholder*="0:01"]') ||
                    document.querySelector('input[placeholder*="00:01"]');
        if (input) return input;

        const inputs = Array.from(document.querySelectorAll('input'));
        for (const inp of inputs) {
            const ph = (inp.placeholder || '').toLowerCase();
            const name = (inp.name || '').toLowerCase();
            const id = (inp.id || '').toLowerCase();
            if (ph.includes('0:') || ph.includes('00:') || name.includes('extend') || id.includes('extend')) {
                return inp;
            }
            
            // Traverse up to 3 levels to find text like "extend from" or "extend point"
            let current = inp.parentElement;
            let levels = 0;
            while (current && levels < 3) {
                const text = (current.textContent || '').toLowerCase();
                if (text.includes('extend from') || text.includes('extend point') || text.includes('extend time')) {
                    if (inp.type !== 'hidden' && inp.type !== 'checkbox' && inp.type !== 'radio') {
                        return inp;
                    }
                }
                current = current.parentElement;
                levels++;
            }
        }
        return null;
    }

    function findCreateButton() {
        const buttons = Array.from(document.querySelectorAll('button'));
        for (const btn of buttons) {
            const text = btn.innerText.toLowerCase().trim();
            if (text.includes('create') && !text.includes('playlist') && !text.includes('folder') && !text.includes('persona')) {
                return btn;
            }
        }
        return document.querySelector('button[type="submit"]') || 
               document.querySelector('.orange-button') ||
               document.querySelector('[class*="create-button"]') ||
               document.querySelector('[class*="SubmitButton"]');
    }

    function findCustomToggle() {
        const elements = Array.from(document.querySelectorAll('button, div, label, span'));
        for (const el of elements) {
            const text = el.innerText.toLowerCase().trim();
            if (text === 'custom' || text === 'custom mode') {
                return el;
            }
        }
        return null;
    }

    function ensureCustomMode() {
        const styleBox = findStyleTextarea();
        const lyricsBox = findLyricsTextarea();
        if (styleBox && lyricsBox) {
            return true;
        }
        const toggle = findCustomToggle();
        if (toggle) {
            toggle.click();
            console.log("VNR: Clicked Custom Mode toggle.");
            return true;
        }
        return false;
    }

    function findModeDropdown() {
        let panelContainer = null;
        const styleTextarea = findStyleTextarea();
        if (styleTextarea) {
            panelContainer = styleTextarea.closest('form') || 
                             styleTextarea.closest('[class*="create"]') || 
                             styleTextarea.closest('[class*="panel"]') || 
                             styleTextarea.closest('[class*="sidebar"]') ||
                             styleTextarea.parentElement?.parentElement?.parentElement;
        }
        
        const searchScope = panelContainer || document;

        let drop = searchScope.querySelector('[class*="mode-select"]') || 
                   searchScope.querySelector('[id*="mode-select"]') ||
                   searchScope.querySelector('[class*="ModeSelect"]') ||
                   searchScope.querySelector('button[aria-haspopup="listbox"]') ||
                   searchScope.querySelector('button[aria-haspopup="menu"]');
        if (drop) return drop;

        const modes = ['Cover', 'Extend', 'Remix', 'Add Instrumental', 'Add Vocals', 'Mashup'];
        const elements = Array.from(searchScope.querySelectorAll('button, div, span, p'));
        
        // 1. Cleaned text exact match (to handle "Cover ▼" -> "Cover")
        for (const el of elements) {
            if (el.offsetWidth === 0 && el.offsetHeight === 0) continue;
            const rawText = el.innerText || '';
            const cleanText = rawText.replace(/[^a-zA-Z0-9\s]/g, '').trim();
            if (modes.includes(cleanText)) {
                if (el.tagName === 'BUTTON' || el.getAttribute('role') === 'button' || el.onclick || el.className.includes('button') || el.className.includes('select') || el.className.includes('trigger')) {
                    return el;
                }
            }
        }
        
        // 2. Substring match
        for (const el of elements) {
            if (el.offsetWidth === 0 && el.offsetHeight === 0) continue;
            const rawText = (el.innerText || '').trim();
            for (const mode of modes) {
                if (rawText === mode || rawText.startsWith(mode) || rawText.includes(mode + ' ')) {
                    if (el.tagName === 'BUTTON' || el.getAttribute('role') === 'button' || el.className.includes('button') || el.className.includes('select') || el.className.includes('trigger')) {
                        return el;
                    }
                }
            }
        }

        // Global fallback if container search failed
        if (searchScope !== document) {
            const globalElements = Array.from(document.querySelectorAll('button, div, span, p'));
            for (const el of globalElements) {
                if (el.offsetWidth === 0 && el.offsetHeight === 0) continue;
                const rawText = el.innerText || '';
                const cleanText = rawText.replace(/[^a-zA-Z0-9\s]/g, '').trim();
                if (modes.includes(cleanText)) {
                    if (el.tagName === 'BUTTON' || el.getAttribute('role') === 'button' || el.onclick || el.className.includes('button') || el.className.includes('select') || el.className.includes('trigger')) {
                        return el;
                    }
                }
            }
        }
        
        return null;
    }

    function switchToMode(targetMode, callback) {
        console.log(`VNR: switchToMode called for: ${targetMode}`);
        const extendInput = findExtendInput();
        if (targetMode === 'Extend' && extendInput) {
            console.log("VNR: Already in Extend mode (extend input visible).");
            if (callback) callback();
            return;
        }
        if (targetMode === 'Cover' && !extendInput) {
            const currentDropdown = findModeDropdown();
            if (currentDropdown) {
                const currentText = (currentDropdown.innerText || '').replace(/[^a-zA-Z0-9\s]/g, '').trim().toLowerCase();
                if (currentText === 'cover') {
                    console.log("VNR: Already in Cover mode.");
                    if (callback) callback();
                    return;
                }
            }
        }

        // Helper to find a direct tab/button for targetMode (e.g. side-by-side tabs)
        function findDirectTab() {
            const candidates = Array.from(document.querySelectorAll('button, [role="tab"], [role="button"], a, span'));
            for (const el of candidates) {
                if (el.offsetWidth === 0 && el.offsetHeight === 0) continue;
                const rawText = el.innerText || '';
                const cleanText = rawText.replace(/[^a-zA-Z0-9\s]/g, '').trim().toLowerCase();
                if (cleanText === targetMode.toLowerCase()) {
                    const isDropdown = el.querySelector('[class*="arrow"]') || el.innerText.includes('▼') || el.innerText.includes('▾');
                    if (!isDropdown && (el.tagName === 'BUTTON' || el.getAttribute('role') === 'tab' || el.className.includes('button') || el.className.includes('tab'))) {
                        return el;
                    }
                }
            }
            return null;
        }

        const directTab = findDirectTab();
        if (directTab) {
            console.log(`VNR: Found direct tab/button for ${targetMode}. Clicking it.`);
            directTab.click();
            
            if (targetMode === 'Extend') {
                waitForElement(findExtendInput, (el) => {
                    if (el) {
                        console.log("VNR: Successfully switched to Extend mode via direct tab.");
                        if (callback) callback();
                    } else {
                        console.warn("VNR: Extend input did not appear after clicking direct tab. Trying dropdown.");
                        tryDropdownFlow();
                    }
                }, 1200);
            } else {
                setTimeout(callback, 300);
            }
            return;
        }

        tryDropdownFlow();

        function tryDropdownFlow() {
            const dropdown = findModeDropdown();
            if (dropdown) {
                dropdown.click();
                console.log("VNR: Clicked mode dropdown.");
                
                // Poll for the options menu to appear rather than static timeout
                const getMenuOptions = () => {
                    const opts = Array.from(document.querySelectorAll('div, span, button, li, p, a, [role="menuitem"], [role="option"]'));
                    return opts.filter(opt => {
                        if (opt.offsetWidth === 0 && opt.offsetHeight === 0) return false;
                        const rawOptText = opt.innerText || '';
                        const optTextClean = rawOptText.trim().toLowerCase();
                        const lines = rawOptText.split('\n').map(l => l.trim().toLowerCase());
                        
                        return lines.includes(targetMode.toLowerCase()) || 
                               lines[0] === targetMode.toLowerCase() ||
                               optTextClean === targetMode.toLowerCase() ||
                               optTextClean.startsWith(targetMode.toLowerCase() + ' ') ||
                               optTextClean.startsWith(targetMode.toLowerCase() + ':') ||
                               optTextClean.startsWith(targetMode.toLowerCase() + '\n');
                    });
                };

                waitForElement(() => {
                    const matches = getMenuOptions();
                    return matches.length > 0 ? matches[0] : null;
                }, (opt) => {
                    if (opt) {
                        opt.click();
                        console.log(`VNR: Clicked dropdown option for: ${targetMode}`);
                        showToast(`Switched page to ${targetMode} mode automatically!`, "success");
                        
                        if (callback) {
                            if (targetMode === 'Extend') {
                                waitForElement(findExtendInput, (el) => {
                                    if (el) {
                                        console.log("VNR: Extend input appeared after dropdown selection.");
                                        if (callback) callback();
                                    } else {
                                        console.warn("VNR: Extend input did not appear after dropdown selection.");
                                        if (callback) callback();
                                    }
                                }, 2000);
                            } else if (targetMode === 'Cover') {
                                waitForElement(() => !findExtendInput(), () => {
                                    if (callback) callback();
                                }, 2000);
                            } else {
                                setTimeout(callback, 300);
                            }
                        }
                    } else {
                        console.warn(`VNR: Menu option for ${targetMode} not found after clicking dropdown.`);
                        showToast(`Could not find '${targetMode}' option in menu. Please select it manually.`, "warning");
                        if (callback) callback();
                    }
                }, 1500); // Wait up to 1.5s for menu options to appear
            } else {
                showToast(`Mode dropdown not found. Please click '${targetMode}' manually.`, "warning");
                if (callback) callback();
            }
        }
    }

    // 🧬 React Fiber Extraction
    function getReactFiber(el) {
        if (!el) return null;
        const key = Object.keys(el).find(k => k.startsWith('__reactFiber$') || k.startsWith('__reactInternalInstance$'));
        return key ? el[key] : null;
    }

    function findMetadataInFiber(node) {
        if (!node) return null;
        let visited = new Set();
        let queue = [node];
        
        while (queue.length > 0) {
            let current = queue.shift();
            if (!current || visited.has(current)) continue;
            visited.add(current);
            
            if (current.memoizedProps) {
                const props = current.memoizedProps;
                const clip = props.clip || props.song || props.track || props.audioItem || props.mediaItem;
                if (clip && typeof clip === 'object') {
                    const lyrics = clip.lyrics || clip.metadata?.lyrics || '';
                    const style = clip.prompt || clip.metadata?.tags || clip.metadata?.prompt || clip.tags || '';
                    if (lyrics || style) {
                        return { lyrics, style };
                    }
                }
                
                if (props.lyrics && (props.prompt || props.tags)) {
                    return { lyrics: props.lyrics, style: props.prompt || props.tags };
                }
            }
            
            if (current.child) queue.push(current.child);
            if (current.sibling) queue.push(current.sibling);
            if (current.return) queue.push(current.return);
        }
        return null;
    }

    // 🔍 Scrape DOM/Fiber fallback
    function scrapeActiveMetadata() {
        const playerEl = document.querySelector('[class*="player" i]') || 
                         document.querySelector('[class*="Player" i]') ||
                         document.querySelector('footer') ||
                         document.querySelector('[class*="playbar" i]');
        if (playerEl) {
            const fiber = getReactFiber(playerEl);
            const meta = findMetadataInFiber(fiber);
            if (meta && (meta.lyrics || meta.style)) {
                return meta;
            }
        }

        const mainEl = document.querySelector('main') || document.body;
        const mainFiber = getReactFiber(mainEl);
        const mainMeta = findMetadataInFiber(mainFiber);
        if (mainMeta && (mainMeta.lyrics || mainMeta.style)) {
            return mainMeta;
        }

        let lyrics = "";
        let style = "";
        const lyricElements = Array.from(document.querySelectorAll('[class*="lyrics" i], [class*="Lyric" i], pre, [style*="pre-wrap"]'));
        for (const el of lyricElements) {
            const text = el.innerText || "";
            if (text.includes('[') && text.includes(']') && text.split('\n').length > 3) {
                lyrics = text.trim();
                break;
            }
        }
        if (!lyrics) {
            for (const el of lyricElements) {
                const text = el.innerText || "";
                if (text.split('\n').length > 5 && text.length > 50) {
                    lyrics = text.trim();
                    break;
                }
            }
        }

        const tagElements = Array.from(document.querySelectorAll('a[href*="/style/"], a[href*="/genre/"], [class*="tag" i], [class*="genre" i]'));
        let tagsCollected = [];
        for (const el of tagElements) {
            const tagText = el.innerText.trim();
            if (tagText && !tagsCollected.includes(tagText) && tagText.length < 30) {
                tagsCollected.push(tagText);
            }
        }
        if (tagsCollected.length > 0) {
            style = tagsCollected.join(', ');
        }

        return { lyrics, style };
    }

    // 🦾 Auto-Remix trigger
    function findRemixButton() {
        const player = document.querySelector('[class*="player" i]') || document.querySelector('[class*="Player" i]');
        if (player) {
            const btns = Array.from(player.querySelectorAll('button'));
            for (const b of btns) {
                const txt = b.innerText.toLowerCase();
                const aria = (b.getAttribute('aria-label') || '').toLowerCase();
                if (txt.includes('remix') || aria.includes('remix')) {
                    return b;
                }
            }
        }

        const menuOptions = Array.from(document.querySelectorAll('div, span, button, li, p, a'));
        for (const opt of menuOptions) {
            if (opt.innerText.trim().toLowerCase() === 'remix') {
                return opt;
            }
        }

        const allBtns = Array.from(document.querySelectorAll('button'));
        for (const b of allBtns) {
            const txt = b.innerText.toLowerCase();
            const aria = (b.getAttribute('aria-label') || '').toLowerCase();
            if (txt.includes('remix') || aria.includes('remix')) {
                return b;
            }
        }
        return null;
    }

    function ensureRemixPanelOpen(callback) {
        if (findStyleTextarea() || findLyricsTextarea() || findExtendInput()) {
            if (callback) callback();
            return;
        }

        const checkPanelOpened = () => {
            return findStyleTextarea() || findLyricsTextarea() || findExtendInput();
        };

        const remixBtn = findRemixButton();
        if (remixBtn) {
            remixBtn.click();
            showToast("Opening Remix panel automatically...", "info");
            waitForElement(checkPanelOpened, (el) => {
                if (el) {
                    setTimeout(callback, 150); // Small buffer for rendering
                } else {
                    console.warn("VNR: Timeout waiting for panel textareas to appear.");
                    if (callback) callback();
                }
            }, 3000);
        } else {
            const player = document.querySelector('[class*="player" i]') || document.querySelector('[class*="Player" i]');
            if (player) {
                const optBtn = player.querySelector('button[aria-label*="option" i]') || 
                               player.querySelector('button[title*="option" i]') ||
                               Array.from(player.querySelectorAll('button')).find(b => b.innerText.includes('...'));
                if (optBtn) {
                    optBtn.click();
                    setTimeout(() => {
                        const menuOptions = Array.from(document.querySelectorAll('div, span, button, li, p, a'));
                        const remixOption = menuOptions.find(o => o.innerText.trim().toLowerCase() === 'remix');
                        if (remixOption) {
                            remixOption.click();
                            showToast("Opening Remix panel automatically...", "info");
                            waitForElement(checkPanelOpened, (el) => {
                                if (el) {
                                    setTimeout(callback, 150);
                                } else {
                                    if (callback) callback();
                                }
                            }, 3000);
                        } else {
                            showToast("Please click 'Remix' on your winning track manually.", "warning");
                        }
                    }, 250);
                    return;
                }
            }
            showToast("Please click 'Remix' on your winning track manually.", "warning");
        }
    }

    // 🚀 Vault Actions
    function grabFieldsToVault() {
        let styleVal = "";
        let lyricsVal = "";
        
        const styleBox = findStyleTextarea();
        const lyricsBox = findLyricsTextarea();
        
        if (styleBox && styleBox.value.trim()) {
            styleVal = styleBox.value.trim();
        }
        if (lyricsBox && lyricsBox.value.trim()) {
            lyricsVal = lyricsBox.value.trim();
        }

        if (!styleVal || !lyricsVal) {
            const scraped = scrapeActiveMetadata();
            if (!styleVal) styleVal = scraped.style || "";
            if (!lyricsVal) lyricsVal = scraped.lyrics || "";
        }

        if (styleVal || lyricsVal) {
            if (styleVal) localStorage.setItem('vnr-original-style', styleVal);
            if (lyricsVal) localStorage.setItem('vnr-original-lyrics', lyricsVal);
            syncVaultUI();
            showToast("Grabbed active metadata into Vault!", "success");
        } else {
            showToast("No active fields or player track found to grab.", "warning");
        }
    }

    function pushVaultToFields() {
        const styleBox = findStyleTextarea();
        const lyricsBox = findLyricsTextarea();
        const savedStyle = localStorage.getItem('vnr-original-style') || "";
        const savedLyrics = localStorage.getItem('vnr-original-lyrics') || "";

        ensureCustomMode();

        let pushed = false;
        if (styleBox && savedStyle) {
            setReactInputValue(styleBox, savedStyle);
            pushed = true;
        }
        if (lyricsBox && savedLyrics) {
            setReactInputValue(lyricsBox, savedLyrics);
            pushed = true;
        }

        if (pushed) {
            showToast("Vault metadata injected to active fields!", "success");
        } else {
            showToast("Vault is empty or fields are missing on page.", "warning");
        }
    }

    // 🏎️ Main Pipeline Auto Actions
    function runGenesis() {
        const styleBox = findStyleTextarea();
        const lyricsBox = findLyricsTextarea();
        
        ensureCustomMode();

        // Use what's in the field; save to vault. Do NOT reconstruct.
        let savedStyle = localStorage.getItem('vnr-original-style') || "";
        if (styleBox && styleBox.value.trim()) {
            savedStyle = styleBox.value.trim();
            localStorage.setItem('vnr-original-style', savedStyle);
        }
        if (styleBox && savedStyle) {
            setReactInputValue(styleBox, savedStyle);
        }

        // Lyrics: use as-is, never re-wrap
        if (lyricsBox) {
            let lyrics = lyricsBox.value.trim();
            if (!lyrics) {
                lyrics = localStorage.getItem('vnr-original-lyrics') || "";
            }
            if (lyrics) {
                setReactInputValue(lyricsBox, lyrics);
                localStorage.setItem('vnr-original-lyrics', lyrics);
            }
        }

        syncVaultUI();
        showToast("Genesis style & lyrics locked to vault as-is.", "success");
        triggerAutoCreate();
    }

    function configureRemasterModal() {
        const modal = document.querySelector('[role="dialog"]') || document.querySelector('[class*="modal" i]') || document.querySelector('[class*="Modal" i]');
        if (!modal) {
            triggerRemasterMenuOption();
            return;
        }
        
        const elements = Array.from(modal.querySelectorAll('button, div, span, label, input'));
        let clickedModel = false;
        let clickedStrength = false;
        let remasterBtn = null;
        
        for (const el of elements) {
            const txt = (el.innerText || el.value || '').trim().toLowerCase();
            if (txt === 'v5.5' || txt === '5.5') {
                el.click();
                clickedModel = true;
            }
            if (txt === 'normal') {
                el.click();
                clickedStrength = true;
            }
            if (txt === 'remaster' && (el.tagName === 'BUTTON' || el.role === 'button' || el.className.includes('button'))) {
                remasterBtn = el;
            }
        }
        
        if (clickedModel || clickedStrength) {
            showToast("Configured Remaster to v5.5 Normal strength.", "success");
            if (remasterBtn) {
                const autoClick = document.getElementById('vnr-auto-create-cb')?.checked;
                if (autoClick) {
                    setTimeout(() => {
                        remasterBtn.click();
                        showToast("Remaster triggered!", "success");
                    }, 800);
                }
            }
        }
    }

    function triggerRemasterMenuOption() {
        const player = document.querySelector('[class*="player" i]') || document.querySelector('[class*="Player" i]');
        if (player) {
            const btns = Array.from(player.querySelectorAll('button'));
            const optBtn = btns.find(b => {
                const aria = (b.getAttribute('aria-label') || '').toLowerCase();
                const title = (b.getAttribute('title') || '').toLowerCase();
                return aria.includes('more') || aria.includes('option') || title.includes('more') || title.includes('option') || b.innerText.includes('...');
            });
            if (optBtn) {
                optBtn.click();
                setTimeout(() => {
                    const menuOptions = Array.from(document.querySelectorAll('div, span, button, li, p, a'));
                    const remasterOption = menuOptions.find(o => o.innerText.trim().toLowerCase().includes('remaster'));
                    if (remasterOption) {
                        remasterOption.click();
                        setTimeout(configureRemasterModal, 400);
                    } else {
                        const editOption = menuOptions.find(o => o.innerText.trim().toLowerCase() === 'edit');
                        if (editOption) {
                            editOption.click();
                            setTimeout(() => {
                                const nestedOptions = Array.from(document.querySelectorAll('div, span, button, li, p, a'));
                                const nestedRemaster = nestedOptions.find(o => o.innerText.trim().toLowerCase().includes('remaster'));
                                if (nestedRemaster) {
                                    nestedRemaster.click();
                                    setTimeout(configureRemasterModal, 400);
                                }
                            }, 200);
                        }
                    }
                }, 200);
            }
        }
    }

    function applyStepAction(stepNum) {
        let savedStyle = localStorage.getItem('vnr-original-style') || "";
        let savedLyrics = localStorage.getItem('vnr-original-lyrics') || "";
        
        // AUTOMATED GRAB: If we don't have style or lyrics saved yet, grab them now!
        if (!savedStyle && !savedLyrics) {
            console.log("VNR: No saved metadata found in Vault. Automatically grabbing...");
            grabFieldsToVault();
            savedStyle = localStorage.getItem('vnr-original-style') || "vocals, genre";
            savedLyrics = localStorage.getItem('vnr-original-lyrics') || "";
        }
        
        switch(stepNum) {
            case 1: // Genesis Base
                runGenesis();
                break;
                
            case 2: // Extend @ 0:01 (DNA Lock)
                ensureRemixPanelOpen(() => {
                    switchToMode('Extend', () => {
                        const extendInput = findExtendInput();
                        const styleBox = findStyleTextarea();
                        const lyricsBox = findLyricsTextarea();
                        if (extendInput) {
                            setReactInputValue(extendInput, "00:01.0");
                            if (styleBox) setReactInputValue(styleBox, "");
                            if (lyricsBox) setReactInputValue(lyricsBox, savedLyrics);
                            showToast("Locked extend @ 0:01. Cleared style, re-pasted lyrics.", "success");
                            triggerAutoCreate();
                        } else {
                            showToast("Extend input not found. Try toggling 'Extend' manually.", "error");
                        }
                    });
                });
                break;
                
            case 3: // Vocal Pass (Extend @ 0:06)
                ensureRemixPanelOpen(() => {
                    switchToMode('Extend', () => {
                        const extendInput = findExtendInput();
                        const styleBox = findStyleTextarea();
                        const lyricsBox = findLyricsTextarea();
                        if (extendInput) {
                            setReactInputValue(extendInput, "00:06.0");
                            if (styleBox) setReactInputValue(styleBox, "");
                            if (lyricsBox) setReactInputValue(lyricsBox, savedLyrics);
                            showToast("Locked extend @ 0:06 (Vocal Pass). Cleared style, re-pasted lyrics.", "success");
                            triggerAutoCreate();
                        } else {
                            showToast("Extend input not found. Try toggling 'Extend' manually.", "error");
                        }
                    });
                });
                break;
            case 4: // Cover: No Style
                ensureRemixPanelOpen(() => {
                    switchToMode('Cover', () => {
                        const styleBox = findStyleTextarea();
                        const lyricsBox = findLyricsTextarea();
                        if (styleBox) setReactInputValue(styleBox, "");
                        if (lyricsBox) setReactInputValue(lyricsBox, savedLyrics);
                        showToast("Waveform-only cover setup. Cleared style, re-pasted lyrics.", "success");
                        triggerAutoCreate();
                    });
                });
                break;
                
            case 5: // Get Whole Song (Stitch)
                showToast("Click option button (...) -> Select 'Get Whole Song' from Suno's track menu.", "info");
                triggerRemasterMenuOption();
                break;
                
            case 6: // Cover (Style + Lyrics)
                ensureRemixPanelOpen(() => {
                    switchToMode('Cover', () => {
                        const styleBox = findStyleTextarea();
                        const lyricsBox = findLyricsTextarea();
                        if (styleBox) setReactInputValue(styleBox, savedStyle);
                        if (lyricsBox) setReactInputValue(lyricsBox, savedLyrics);
                        showToast("Restored style and re-pasted lyrics for Cover pass.", "success");
                        triggerAutoCreate();
                    });
                });
                break;
                
            case 7: // Remaster (Guide)
                configureRemasterModal();
                break;
        }
    }

    function triggerAutoCreate() {
        const autoClick = document.getElementById('vnr-auto-create-cb')?.checked;
        if (autoClick) {
            setTimeout(() => {
                const createBtn = findCreateButton();
                if (createBtn) {
                    createBtn.click();
                    showToast("Automated creation triggered!", "success");
                } else {
                    showToast("Could not find the 'Create' button to click.", "warning");
                }
            }, 800);
        }
    }

    // Set active step
    function setStep(stepNum) {
        currentStep = stepNum;
        try {
            localStorage.setItem('vnr-current-step', stepNum.toString());
        } catch (e) {}
        renderSteps();
    }

    // Render step list dynamically
    function renderSteps() {
        const container = panel.querySelector('#vnr-steps-container');
        if (!container) return;
        container.innerHTML = '';

        steps.forEach(step => {
            const stepEl = document.createElement('div');
            stepEl.className = `vnr-step-item ${step.num === currentStep ? 'active' : ''} ${step.num < currentStep ? 'completed' : ''}`;
            
            stepEl.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                setStep(step.num);
            }, true);
            
            let statusChar = step.num < currentStep ? '✓' : (step.num === 3 ? '2.5' : step.num > 3 ? step.num - 1 : step.num);
            stepEl.innerHTML = `
                <span class="vnr-step-icon">${statusChar}</span>
                <div class="vnr-step-details">
                    <span class="vnr-step-name">${step.title}</span>
                    <span class="vnr-step-desc">${step.desc}</span>
                </div>
            `;
            container.appendChild(stepEl);
        });

        // Sync main action button text
        const actionBtn = panel.querySelector('#vnr-action-btn');
        if (actionBtn) {
            const matchedStep = steps.find(s => s.num === currentStep);
            if (matchedStep) {
                actionBtn.innerText = matchedStep.actionText;
                actionBtn.style.display = "flex";
            } else {
                actionBtn.style.display = "none";
            }
        }
    }

    // Sync Vault inputs
    function syncVaultUI() {
        const styleVal = localStorage.getItem('vnr-original-style') || "";
        const lyricsVal = localStorage.getItem('vnr-original-lyrics') || "";
        
        const styleInput = panel.querySelector('#vnr-vault-style');
        const lyricsTextarea = panel.querySelector('#vnr-vault-lyrics');
        
        if (styleInput) styleInput.value = styleVal;
        if (lyricsTextarea) lyricsTextarea.value = lyricsVal;
    }

    // Diagnostics / LED scan
    function runDiagnostics() {
        const styleLed = panel.querySelector('#vnr-led-style');
        const lyricsLed = panel.querySelector('#vnr-led-lyrics');
        const extendLed = panel.querySelector('#vnr-led-extend');

        if (styleLed) {
            if (findStyleTextarea()) {
                styleLed.classList.add('connected');
            } else {
                styleLed.classList.remove('connected');
            }
        }
        if (lyricsLed) {
            if (findLyricsTextarea()) {
                lyricsLed.classList.add('connected');
            } else {
                lyricsLed.classList.remove('connected');
            }
        }
        if (extendLed) {
            if (findExtendInput()) {
                extendLed.classList.add('connected');
            } else {
                extendLed.classList.remove('connected');
            }
        }
    }

    // Synchronize UI layout
    function syncUI() {
        if (!document.body) return;

        if (!document.getElementById('vnr-styles')) {
            (document.head || document.body).appendChild(style);
        }

        let existingToggle = document.getElementById('vnr-toggle-btn');
        if (!existingToggle) {
            document.documentElement.appendChild(toggleBtn);
        } else if (existingToggle !== toggleBtn) {
            existingToggle.replaceWith(toggleBtn);
        }

        let existingPanel = document.getElementById('vnr-control-panel');
        if (!existingPanel) {
            document.documentElement.appendChild(panel);
            bindPanelListeners();
            renderSteps();
            syncVaultUI();
        } else if (existingPanel !== panel) {
            existingPanel.replaceWith(panel);
            bindPanelListeners();
            renderSteps();
            syncVaultUI();
        }

        if (isPanelVisible) {
            panel.classList.add('open');
            document.body.classList.add('vnr-panel-open');
            toggleBtn.style.setProperty('display', 'none', 'important');
        } else {
            panel.classList.remove('open');
            document.body.classList.remove('vnr-panel-open');
            toggleBtn.style.setProperty('display', 'flex', 'important');
        }

        runDiagnostics();
    }

    function bindPanelListeners() {
        // Close Button
        const closeBtn = panel.querySelector('#vnr-close-btn');
        if (closeBtn) {
            closeBtn.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                isPanelVisible = false;
                try { localStorage.setItem('vnr-panel-visible', 'false'); } catch (err) {}
                syncUI();
            };
        }

        // Hide Panel
        const hideBtn = panel.querySelector('#vnr-hide-btn');
        if (hideBtn) {
            hideBtn.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                isPanelVisible = false;
                try { localStorage.setItem('vnr-panel-visible', 'false'); } catch (err) {}
                syncUI();
            };
        }

        // Toggle Handle
        toggleBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            isPanelVisible = true;
            try { localStorage.setItem('vnr-panel-visible', 'true'); } catch (err) {}
            syncUI();
        };

        // Reset Button
        const resetBtn = panel.querySelector('#vnr-reset-btn');
        if (resetBtn) {
            resetBtn.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                localStorage.removeItem('vnr-original-style');
                localStorage.removeItem('vnr-original-lyrics');
                syncVaultUI();
                setStep(1);
                showToast("Path restarted. Selected Step 1 and cleared Vault metadata.", "info");
            };
        }

        // Main Action Button
        const actionBtn = panel.querySelector('#vnr-action-btn');
        if (actionBtn) {
            actionBtn.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                applyStepAction(currentStep);
                
                if (currentStep < steps.length) {
                    setStep(currentStep + 1);
                }
            };
        }

        // Vault Toggle Accordion
        const vaultToggle = panel.querySelector('#vnr-vault-toggle');
        const vaultContent = panel.querySelector('#vnr-vault-content');
        const vaultArrow = panel.querySelector('#vnr-vault-arrow');
        if (vaultToggle && vaultContent) {
            vaultToggle.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                const isOpen = vaultContent.classList.toggle('open');
                vaultArrow.innerText = isOpen ? '▼' : '▶';
            };
        }

        // Vault input listeners
        const vaultStyleInput = panel.querySelector('#vnr-vault-style');
        if (vaultStyleInput) {
            vaultStyleInput.oninput = function() {
                localStorage.setItem('vnr-original-style', vaultStyleInput.value.trim());
            };
        }
        const vaultLyricsInput = panel.querySelector('#vnr-vault-lyrics');
        if (vaultLyricsInput) {
            vaultLyricsInput.oninput = function() {
                localStorage.setItem('vnr-original-lyrics', vaultLyricsInput.value.trim());
            };
        }
    }

    // Sync loop
    setInterval(syncUI, 500);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', syncUI);
    } else {
        syncUI();
    }

})();
