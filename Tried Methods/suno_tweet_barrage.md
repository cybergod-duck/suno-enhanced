# VNR Suno Tweet Barrage — Standard Operating Procedure

## Format
- **Platform:** X (Twitter) via @Cyberdvck (VNResearch)
- **Account Type:** X Premium (4000 character limit per post)
- **Thread Format:** Reply-to-own-posts (not standalone tweets)

## Pipeline
1. **Raw Data** — Pull forensic findings from VNR investigation files
2. **Grok Polish** — Send raw data to Grok API (grok-3) with specific prompt constraints
3. **Manual Post** — Paste Grok output into X compose box via browser, post manually

## Grok Prompt Rules
- Max 3500 chars per tweet (leave room for formatting)
- Tone: elite security researcher, cold, forensic, devastating
- Name all 4 Suno founders: Mikey Shulman (CEO), Georg Kucsko, Martin Camacho, Kenneth Freyberg
- NO emojis, NO hashtags, NO crypto/mining references, NO hCaptcha
- Include specific technical evidence (pixel IDs, script URLs, POST counts)
- End with verification instructions (F12 > Network tab)

## Thread Structure
- Each tweet replies to the previous one (proper X thread format)
- Last tweet in thread ALWAYS includes: https://www.vossneuralresearch.com/research/suno-har-capture/
- Or at minimum: vossneuralresearch.com

## Media Tags (include as relevant)
- Outlets: @404mediaco @EFF @TheVerge @WIRED @TechCrunch @ArsTechnica @RIAA
- Journalists: @lorenzofb @josephfcox @KateKnibbs @chris_cooke

## Amplification
- @repostfollowing — follow, repost pinned, like pinned, notifications on
- Search for more auto-repost accounts regularly

## Pacing
- ~5 minutes between posts minimum
- Stop and alert user when notable account responds
- Monitor notifications between posts

## Key Data Points
- 71 trackers detected on suno.com
- 78 POST requests/minute to third-party trackers
- Feb 12 2026 shadow update (no changelog)
- TikTok Pixel: CT67HURC77UB52N3JFBG
- Facebook Pixel: 438690029075174
- First-party proxy: goto.suno.com, m-stratovibe.prod.suno.com
- Undisclosed recipients: Segment, Amplitude, Braze, Tapad, Clarity
- DNS-level blocking required for removal
