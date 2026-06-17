// ==UserScript==
// @name         SunoForge X (Twitter) Marketing Assistant
// @namespace    vossneuralresearch.com
// @version      2.5.6
// @description  Fully autonomous browser agent that scans X searches, filters complaints using Groq, and replies directly in-page.
// @author       the_duck / Voss Neural Research
// @match        *://x.com/*
// @match        *://twitter.com/*
// @grant        GM_xmlhttpRequest
// @connect      api.groq.com
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    if (window.vnrAutopilotInitialized) {
        console.log("VNR: Autopilot already initialized on this page. Exiting.");
        return;
    }
    window.vnrAutopilotInitialized = true;

    console.log("VNR: SunoForge X Marketing Assistant Initializing...");

    // Groq API Key from your suno.env
    const groqApiKey = "";

    // SoundCloud Tracks list from 5 months ago until now
    const tracks = [
        { name: "sandman", url: "https://soundcloud.com/ducktronikz/sandman-19" },
        { name: "the drought", url: "https://soundcloud.com/ducktronikz/the-drought-17" },
        { name: "error", url: "https://soundcloud.com/ducktronikz/error-18" },
        { name: "a punishing force", url: "https://soundcloud.com/ducktronikz/a-punishing-force-14" },
        { name: "power of karate", url: "https://soundcloud.com/ducktronikz/power-of-karate-16" },
        { name: "after these messages", url: "https://soundcloud.com/ducktronikz/after-these-messages-15" },
        { name: "codeine code", url: "https://soundcloud.com/ducktronikz/codeine-code-20" },
        { name: "truth pours in", url: "https://soundcloud.com/ducktronikz/truth-pours-in-23" },
        { name: "victim city", url: "https://soundcloud.com/ducktronikz/victim-city-25" },
        { name: "palantir", url: "https://soundcloud.com/ducktronikz/palantir-21" },
        { name: "cyberg0d", url: "https://soundcloud.com/ducktronikz/sets/cyberg0d" }
    ];

    // Inject Custom CSS Styles
    const style = document.createElement('style');
    style.id = 'vnr-x-styles';
    style.innerHTML = "#vnr-x-panel { position: fixed !important; bottom: 20px !important; left: 20px !important; width: 320px !important; background: rgba(10, 10, 18, 0.95) !important; border: 2px solid #ff00cc !important; border-radius: 12px !important; box-shadow: 0 0 20px rgba(255, 0, 204, 0.5) !important; color: #ffffff !important; font-family: 'Roboto Mono', 'Courier New', monospace !important; font-size: 11px !important; z-index: 9999999 !important; padding: 12px !important; backdrop-filter: blur(10px) !important; pointer-events: auto !important; display: block !important; }\n" +
        "#vnr-x-panel h3 { margin: 0 0 8px 0 !important; color: #00ffff !important; text-shadow: 0 0 8px #00ffff !important; text-align: center !important; font-size: 12px !important; text-transform: uppercase !important; border-bottom: 1px solid rgba(0, 255, 255, 0.3) !important; padding-bottom: 3px !important; }\n" +
        ".vnr-x-btn { display: block !important; width: 100% !important; background: linear-gradient(90deg, #ff00cc, #8a2be2) !important; color: #fff !important; border: none !important; border-radius: 4px !important; padding: 6px !important; margin-top: 8px !important; font-weight: bold !important; cursor: pointer !important; text-transform: uppercase !important; transition: all 0.2s ease !important; text-align: center !important; pointer-events: auto !important; }\n" +
        ".vnr-x-btn:hover { box-shadow: 0 0 10px rgba(255, 0, 204, 0.8) !important; }\n" +
        ".vnr-x-status { margin-top: 6px !important; font-size: 10px !important; color: #00ffcc !important; text-align: left !important; border-top: 1px solid rgba(255, 255, 255, 0.1) !important; padding-top: 6px !important; max-height: 120px !important; overflow-y: auto !important; white-space: pre-wrap !important; }";

    // Create GUI element
    const panel = document.createElement('div');
    panel.id = 'vnr-x-panel';
    panel.innerHTML = "<h3>VNR X AUTOPILOT v2.5.6</h3>" +
        "<button id='vnr-autopilot-btn' class='vnr-x-btn' style='background:#24243e; border:1px solid #00ffff; color:#00ffff;'>Autopilot (OFF)</button>" +
        "<button id='vnr-hunter-btn' class='vnr-x-btn' style='background:#1da1f2; color:#fff;'>Go to X Search Feed</button>" +
        "<div id='vnr-x-status' class='vnr-x-status'>Autopilot inactive. Click \"Go to X Search Feed\" then toggle Autopilot ON.</div>";

    let autopilotInterval = null;
    let processedTweets = JSON.parse(localStorage.getItem('vnr_processed_tweets') || '[]');
    let consecutiveIdleRounds = 0;
    let isLoopRunning = false; // Mutex to prevent concurrent executions of the scanning loop

    // Bind event listeners using capturing mode (true) and stopPropagation to bypass X.com intercepts
    const autopilotBtn = panel.querySelector('#vnr-autopilot-btn');
    if (autopilotBtn) {
        autopilotBtn.addEventListener('click', function(e) {
            console.log("VNR X: Autopilot toggle clicked.");
            e.preventDefault();
            e.stopPropagation();
            toggleAutopilot();
        }, true);
    }

    const hunterBtn = panel.querySelector('#vnr-hunter-btn');
    if (hunterBtn) {
        hunterBtn.addEventListener('click', async function(e) {
            console.log("VNR X: AI Search generation clicked.");
            e.preventDefault();
            e.stopPropagation();
            
            hunterBtn.innerText = "AI Thinking...";
            hunterBtn.style.setProperty('background', '#666', 'important');
            
            const query = await generateSearchQuery();
            if (query) {
                logStatus("Generated Query: " + query);
                hunterBtn.innerText = "Redirecting...";
                window.location.href = "https://x.com/search?q=" + encodeURIComponent(query) + "&f=live";
            } else {
                logStatus("Failed to generate AI query, using fallback.");
                hunterBtn.innerText = "Go to X Search Feed";
                hunterBtn.style.setProperty('background', '#1da1f2', 'important');
                window.location.href = "https://x.com/search?q=suno%20quality%20OR%20suno%20vocals%20OR%20suno%20distortion%20OR%20suno%20sound&f=live";
            }
        }, true);
    }

    function logStatus(msg) {
        const statusEl = panel.querySelector('#vnr-x-status');
        if (statusEl) {
            statusEl.innerText = "[" + new Date().toLocaleTimeString() + "] " + msg;
        }
        console.log("[VNR Autopilot] " + msg);
    }

    async function generateSearchQuery() {
        const topics = [
            "metallic vocals or robotic voice in Suno/Udio",
            "tinny, compressed, or low-bitrate sound quality",
            "distortion, clipping, or muddy mix in AI songs",
            "mixing, mastering, or structure troubles in AI music",
            "vocal clarity, volume levels, or background noise",
            "overall frustration with AI music quality vs real production",
            "Suno or Udio sounding like garbage, trash, or shit",
            "glitches, artifacts, or weird noises in generated tracks"
        ];
        const randomTopic = topics[Math.floor(Math.random() * topics.length)];
        
        const prompt = "You are Voss Neural Research's lead strategist. Generate a single highly targeted Twitter search query to find people complaining about, asking for help with, or frustrated by AI music generator sound quality.\n" +
            "Focus on this specific angle: " + randomTopic + ".\n" +
            "Rules:\n" +
            "1. Use Twitter search operators (OR, parenthetical groups, quotes, negative filters).\n" +
            "2. You MUST include terms targeting Suno, Udio, or general AI music generators.\n" +
            "3. Exclude links, spam, and self-promotion by adding filters like -filter:links and -filter:replies if appropriate.\n" +
            "4. Keep the query under 100 characters so it fits within Twitter's constraints.\n" +
            "5. Respond with ONLY the raw query string. No quotes, no prefix, no markdown.\n\n" +
            "Example output: (suno OR udio OR \"ai music\") (metallic OR robotic OR distortion) -filter:links";

        return new Promise((resolve) => {
            GM_xmlhttpRequest({
                method: "POST",
                url: "https://api.groq.com/openai/v1/chat/completions",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + groqApiKey
                },
                data: JSON.stringify({
                    model: "llama-3.1-8b-instant",
                    messages: [{ role: "user", content: prompt }],
                    temperature: 0.8,
                    max_tokens: 50
                }),
                onload: function(response) {
                    if (response.status === 200) {
                        try {
                            const data = JSON.parse(response.responseText);
                            let query = data.choices[0].message.content.trim();
                            // Clean up quotes if the model wrapped it
                            if (query.startsWith('"') && query.endsWith('"')) {
                                query = query.slice(1, -1);
                            }
                            resolve(query);
                        } catch(e) {
                            resolve(null);
                        }
                    } else {
                        resolve(null);
                    }
                },
                onerror: () => resolve(null)
            });
        });
    }

    function toggleAutopilot(forceState) {
        const btn = panel.querySelector('#vnr-autopilot-btn');
        if (!btn) return;

        const turningOn = forceState !== undefined ? forceState : !autopilotInterval;

        if (!turningOn) {
            if (autopilotInterval) {
                clearInterval(autopilotInterval);
                autopilotInterval = null;
            }
            localStorage.setItem('vnr_autopilot_state', 'OFF');
            btn.innerText = "Autopilot (OFF)";
            btn.style.setProperty('background', '#24243e', 'important');
            btn.style.setProperty('border', '1px solid #00ffff', 'important');
            btn.style.setProperty('color', '#00ffff', 'important');
            logStatus("Autopilot suspended.");
        } else {
            if (!window.location.href.includes('search')) {
                logStatus("WARNING: You must navigate to the X Search page first.");
                return;
            }
            localStorage.setItem('vnr_autopilot_state', 'ON');
            btn.innerText = "Autopilot (ON)";
            btn.style.setProperty('background', '#00ffcc', 'important');
            btn.style.setProperty('border', 'none', 'important');
            btn.style.setProperty('color', '#000', 'important');
            logStatus("Launching scan loop...");
            
            // Run scan loop immediately, and repeat every 30 seconds
            runAutonomousLoop();
            if (!autopilotInterval) {
                autopilotInterval = setInterval(runAutonomousLoop, 30000);
            }
        }
    }

    // Main Autonomous Loop: Scrapes, Classifies, and Replies directly on page
    async function runAutonomousLoop() {
        if (isLoopRunning) {
            console.log("VNR X: Loop already running. Skipping concurrent execution.");
            return;
        }
        isLoopRunning = true;

        // Reload processed tweets from localStorage to ensure cross-tab sync
        processedTweets = JSON.parse(localStorage.getItem('vnr_processed_tweets') || '[]');

        try {
            if (!window.location.href.includes('search')) {
                logStatus("Suspended: Not on search page.");
                toggleAutopilot(false); // Turn off
                return;
            }

            logStatus("Scanning visible tweets...");
            const tweets = Array.from(document.querySelectorAll('article[data-testid="tweet"]'));
            logStatus("Found " + tweets.length + " tweets on screen. Filtering...");

            let newTweetsFound = 0;

            for (let tweet of tweets) {
                // Extract tweet link to get Tweet ID via the timestamp element (most robust)
                const timeEl = tweet.querySelector('time');
                const statusLink = timeEl ? timeEl.closest('a[href*="/status/"]') : null;
                if (!statusLink) continue;
                
                const href = statusLink.getAttribute('href');
                const tweetId = href.split('/status/')[1]?.split('?')[0];
                if (!tweetId) continue;

                // Skip if already processed
                if (processedTweets.includes(tweetId)) continue;

                // Mark as processed IMMEDIATELY to prevent concurrent intervals from processing the same tweet
                processedTweets.push(tweetId);
                if (processedTweets.length > 500) processedTweets.shift();
                localStorage.setItem('vnr_processed_tweets', JSON.stringify(processedTweets));

                // Skip if it is our own tweet to prevent infinite self-reply loops
                let myHandle = "bc_research_";
                const profileLink = document.querySelector('[data-testid="AppTabBar_Profile_Link"]');
                if (profileLink) {
                    const profileHref = profileLink.getAttribute('href');
                    if (profileHref) myHandle = profileHref.slice(1).toLowerCase();
                }
                const authorLink = tweet.querySelector('[data-testid="User-Name"] a[href^="/"]');
                if (authorLink) {
                    const authorHandle = authorLink.getAttribute('href').slice(1).toLowerCase();
                    if (authorHandle === myHandle || authorHandle === "bc_research_" || authorHandle === "ducktronikz") {
                        console.log("VNR X: Skipping own tweet.");
                        continue;
                    }
                }

                newTweetsFound++;

                const tweetText = tweet.querySelector('div[data-testid="tweetText"]')?.innerText || "";
                if (!tweetText) continue;

                logStatus("Analyzing tweet ID: " + tweetId + "...");

                let isLead = false;
                try {
                    isLead = await checkIsLead(tweetText);
                } catch (err) {
                    logStatus("API Error: " + err);
                    continue;
                }

                if (isLead) {
                    logStatus("Lead confirmed! Drafting reply...");
                    let replyText = await generatePitch(tweetText);
                    
                    if (replyText) {
                        logStatus("Replying to tweet ID: " + tweetId + "...");
                        
                        // Scroll tweet into view to ensure buttons are clickable
                        tweet.scrollIntoView({ block: 'center' });
                        await delay(1000);

                        // Find and click reply button
                        const replyBtn = tweet.querySelector('[data-testid="reply"]');
                        if (replyBtn) {
                            replyBtn.click();
                            await delay(2000); // Wait for modal to open

                            // Find textbox
                            const textarea = document.querySelector('[data-testid="tweetTextarea_0"]') || document.querySelector('div[role="textbox"]');
                            if (textarea) {
                                textarea.focus();
                                document.execCommand('insertText', false, replyText);
                                textarea.dispatchEvent(new Event('input', { bubbles: true }));
                                textarea.dispatchEvent(new Event('change', { bubbles: true }));
                                await delay(1500);

                                // Find and click post button
                                const postBtn = document.querySelector('[data-testid="tweetButton"]') || document.querySelector('[data-testid="tweetButtonInline"]');
                                if (postBtn) {
                                    postBtn.click();
                                    logStatus("Replied successfully to ID: " + tweetId);
                                    await delay(3000); // Wait for post to submit
                                } else {
                                    logStatus("Could not find post submit button.");
                                }
                            } else {
                                logStatus("Could not find text input box.");
                            }
                        } else {
                            logStatus("Could not find reply button.");
                        }
                    }
                }
                
                await delay(2000);
            }

            if (newTweetsFound === 0) {
                consecutiveIdleRounds++;
                logStatus("Idle round " + consecutiveIdleRounds + "/3. No new tweets found.");
            } else {
                consecutiveIdleRounds = 0;
            }

            // If we have no new tweets or we've been idle for 3 rounds, rotate the search query autonomously!
            if (consecutiveIdleRounds >= 3 || tweets.length === 0) {
                logStatus("No new leads found. AI rotating search feed to find new targets...");
                consecutiveIdleRounds = 0;
                const newQuery = await generateSearchQuery();
                if (newQuery) {
                    logStatus("Rotating to: " + newQuery);
                    await delay(2000);
                    window.location.href = "https://x.com/search?q=" + encodeURIComponent(newQuery) + "&f=live";
                    return;
                }
            }

            logStatus("Scan round complete. Auto-scrolling down to load new posts...");
            const visibleTweets = document.querySelectorAll('article[data-testid="tweet"]');
            if (visibleTweets.length > 0) {
                const lastTweet = visibleTweets[visibleTweets.length - 1];
                lastTweet.scrollIntoView({ behavior: 'smooth', block: 'end' });
            } else {
                window.scrollBy({ top: 400, behavior: 'smooth' });
            }
        } catch(err) {
            logStatus("Error in autonomous loop: " + err);
        } finally {
            isLoopRunning = false;
        }
    }

    async function checkIsLead(tweetText) {
        const prompt = "Classify this tweet. Is the user complaining about, struggling with, or asking for help/advice regarding Suno AI music generator sound quality, key issues, mixing, vocals, structure, or creation settings?\n" +
            "Suno self-promotional song shares or general music posting without complaints must be classified as NO.\n" +
            "Respond with ONLY \"YES\" or \"NO\". Do not include punctuation.\n" +
            "Tweet: \"" + tweetText + "\"";

        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: "POST",
                url: "https://api.groq.com/openai/v1/chat/completions",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + groqApiKey
                },
                data: JSON.stringify({
                    model: "llama-3.1-8b-instant",
                    messages: [{ role: "user", content: prompt }],
                    temperature: 0.1,
                    max_tokens: 5
                }),
                onload: function(response) {
                    if (response.status === 200) {
                        const data = JSON.parse(response.responseText);
                        const result = data.choices[0].message.content.trim().toUpperCase();
                        resolve(result.includes("YES"));
                    } else {
                        try {
                            const data = JSON.parse(response.responseText);
                            reject("HTTP " + response.status + ": " + (data.error?.message || response.statusText));
                        } catch(e) {
                            reject("HTTP " + response.status + ": " + (response.statusText || 'Unknown Error'));
                        }
                    }
                },
                onerror: (err) => reject("Network error or permission blocked.")
            });
        });
    }

    async function generatePitch(tweetText) {
        const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
        const prompt = "Classify this tweet complaining about Suno/Udio AI music quality into one of these three categories:\n\n" +
            "1: Vocal issues, prompts, or how to use the generator. (Template: ur not using suno correctly. your prompts literally dont matter. - this is the only correct way to use it)\n" +
            "2: Mixing, distortion, clipping, or bad sound quality. (Template: your shit sounds bad bc you don't know how to use it. it's a precise sequence and if you aren't using it, your song isn't going to improve)\n" +
            "3: General trash-talking of AI music, skepticism, or claims that all AI music is garbage. (Template: i would agree with u in most cases but check this out - AI is capable of creating mindbending production but the companies who own it make more money when it fucks up!)\n\n" +
            "Respond with ONLY the category number: \"1\", \"2\", or \"3\". Do not include any other text, explanation, or formatting. Be highly strict.\n\n" +
            "Tweet: \"" + tweetText + "\"";

        return new Promise((resolve) => {
            GM_xmlhttpRequest({
                method: "POST",
                url: "https://api.groq.com/openai/v1/chat/completions",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + groqApiKey
                },
                data: JSON.stringify({
                    model: "llama-3.1-8b-instant",
                    messages: [{ role: "user", content: prompt }],
                    temperature: 0.1,
                    max_tokens: 5
                }),
                onload: function(response) {
                    if (response.status === 200) {
                        try {
                            const data = JSON.parse(response.responseText);
                            const choice = data.choices[0].message.content.trim();
                            let templateText = "";
                            if (choice.includes("1")) {
                                templateText = "ur not using suno correctly. your prompts literally dont matter. - this is the only correct way to use it - " + randomTrack.url;
                            } else if (choice.includes("2")) {
                                templateText = "your shit sounds bad bc you don't know how to use it. it's a precise sequence and if you aren't using it, your song isn't going to improve - " + randomTrack.url;
                            } else if (choice.includes("3")) {
                                templateText = "i would agree with u in most cases but check this out - AI is capable of creating mindbending production but the companies who own it make more money when it fucks up! - " + randomTrack.url;
                            } else {
                                // Default/fallback if classifier output is messy
                                if (tweetText.toLowerCase().includes("vocal") || tweetText.toLowerCase().includes("voice") || tweetText.toLowerCase().includes("prompt")) {
                                    templateText = "ur not using suno correctly. your prompts literally dont matter. - this is the only correct way to use it - " + randomTrack.url;
                                } else if (tweetText.toLowerCase().includes("trash") || tweetText.toLowerCase().includes("garbage") || tweetText.toLowerCase().includes("shit") || tweetText.toLowerCase().includes("hate")) {
                                    templateText = "i would agree with u in most cases but check this out - AI is capable of creating mindbending production but the companies who own it make more money when it fucks up! - " + randomTrack.url;
                                } else {
                                    templateText = "your shit sounds bad bc you don't know how to use it. it's a precise sequence and if you aren't using it, your song isn't going to improve - " + randomTrack.url;
                                }
                            }
                            resolve(templateText);
                        } catch(e) {
                            resolve(null);
                        }
                    } else {
                        resolve(null);
                    }
                },
                onerror: () => resolve(null)
            });
        });
    }

    function cleanModelResponse(text) {
        if (!text) return "";
        let cleaned = text.trim();
        
        // Remove surrounding quotes if present
        if (cleaned.startsWith('"') && cleaned.endsWith('"')) {
            cleaned = cleaned.slice(1, -1);
        }
        if (cleaned.startsWith("'") && cleaned.endsWith("'")) {
            cleaned = cleaned.slice(1, -1);
        }
        
        // If the model returned multiple options (e.g. "Option 1: ... Option 2: ..."), extract just the first one
        if (cleaned.toLowerCase().includes("option 1")) {
            const match = cleaned.match(/option\s+1\s*:?\s*([\s\S]+?)(?=\n+option\s+2|$)/i);
            if (match && match[1]) {
                cleaned = match[1].trim();
            }
        }
        
        // Remove surrounding quotes again in case they were inside Option 1
        if (cleaned.startsWith('"') && cleaned.endsWith('"')) {
            cleaned = cleaned.slice(1, -1);
        }
        
        return cleaned.trim();
    }

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Synchronize UI elements persistently to prevent deletion by X.com's SPA framework
    function syncUI() {
        if (!document.body) return;

        // 1. Ensure style is injected
        if (!document.getElementById('vnr-x-styles')) {
            (document.head || document.body).appendChild(style);
        }

        // 2. Ensure panel is in the DOM
        let existingPanel = document.getElementById('vnr-x-panel');
        if (!existingPanel) {
            document.body.appendChild(panel);
            console.log("VNR X: Injected autopilot control panel.");
        } else if (existingPanel !== panel) {
            existingPanel.replaceWith(panel);
            console.log("VNR X: Replaced duplicate autopilot control panel.");
        }
    }

    // Run synchronization loop
    setInterval(syncUI, 500);

    // Auto-resume state if saved as ON and on search page
    setTimeout(() => {
        if (localStorage.getItem('vnr_autopilot_state') === 'ON' && window.location.href.includes('search')) {
            toggleAutopilot(true);
        }
    }, 2000);

    // Initial sync
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', syncUI);
    } else {
        syncUI();
    }

})();
