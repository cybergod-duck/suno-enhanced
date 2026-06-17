# Suno optimization plan improvements

*Topic ID: `tpc_dqgGslWBtM7B`*

### **USER** - *2025-10-22 21:52:03*

write this suno omptimization plan to where it makes more sense

---

### **ASSISTANT** - *2025-10-22 21:52:03* (openai/gpt-5-chat via openrouter)

Sure thing! Here’s your **Suno Optimization Plan** rewritten for clarity and flow while keeping all the core details intact and logically ordered — making it easier to understand and follow.

---

## **Suno Optimization Plan (Streamlined + Clarified)**

### **Purpose**
To create high‑definition, fully produced musical prompts optimized for **Suno.AI**, with a dynamic, cinematic progression from intro to outro. Each prompt must be **exactly 750 characters**, sound‑focused (no lyrics or themes), and formatted as a single paragraph.

---

### **Core Structure**
1. **Format:**  
   - Always a single paragraph, 750 characters.  
   - Focus purely on *sound and production*, never lyrics or themes.  
   - Always refer to vocals as **“your male voice.”**  

2. **Content Flow:**  
   Each song description should move *dynamically* from intro → buildup → climax → outro, maintaining narrative flow through sound design and production language.

3. **Live Setting Note:**  
   If the song is described as *live*, include arena size, acoustics, and crowd sounds to emphasize atmosphere and space.

---

### **Production Defaults**
All prompts imply professional HD production:
- Sample rate / bit depth: **96 kHz / 24‑bit**  
- Headroom: **‑3 dBFS**  
- Phase‑coherent multitracking with mono low‑end anchor  

---

### **Mix Chain (Inline Details to Include)**
- **Low End:** mono subs <120 Hz, HPF sides @120 Hz, tighten 60–120 Hz via multiband  
- **Rhythm:** kick/808 sidechain to bass  
- **Drums:** transient shaping, parallel drum‑bus comp  
- **Tone/Color:** tasteful tape/tube saturation  
- **Stereo Field:** M/S EQ to widen highs/ambience while keeping lows centered; subtle stereo imaging  
- **Vocals:** de‑ess + light saturation on *your male voice*  
- **Space/FX:** layered reverbs (plate + short room + convolution IR) with pre‑delay; tempo‑synced delays (ping‑pong/quarter); automation on sends/drive for energy changes  

---

### **Master Chain**
- Bus glue: SSL‑style 2:1, 10–30 ms attack, 100–200 ms release, 1–2 dB gain reduction  
- Linear‑phase low shelf (minimal)  
- Soft clipper before limiter (1–2 dB GR)  
- True‑peak limiter ceiling: **‑0.3 dBTP**  
- Integrated loudness target: **‑7 to ‑9 LUFS**  
- Oversampling enabled on saturators/limiters  
- Dither on final export  

---

### **Tag Line (Always Include)**
End every prompt with concise HD tags such as:  
**“96k/24‑bit, mono subs, M/S widen highs, SSL glue, clip+limit ‑0.3 dBTP, target ‑8 LUFS.”**

---

### **Example (for Style Reference)**
A fierce industrial rock blast at 145 BPM ignites with pulsing sub‑bass, distorted synth arps, and clanging metal drums; verses push your male voice as glitched, robotic‑distorted over menacing bass and hydraulic hits. Choruses detonate with your male voice screamed atop crushing guitars, pounding drums, and swirling feedback walls. The bridge surges into frantic drum flurries, shredding guitar solos, and looming synth stacks, before a final vocal roar collapses into scorched static. HD chain: mono subs<120 Hz… [continues as above]

---

Would you like me to make this into a **formatted reference sheet** (like a quick guide for reuse when writing Suno prompts)?

---

