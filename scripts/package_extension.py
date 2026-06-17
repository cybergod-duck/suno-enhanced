import os
import shutil
import zipfile
import json
from PIL import Image

ext_dir = r"c:\Users\ovjup\Desktop\SUNO REVERSE ENGINEERING!\vnr_mud_kutter"

# 1. Clean directory
if os.path.exists(ext_dir):
    shutil.rmtree(ext_dir)
os.makedirs(ext_dir, exist_ok=True)

# 2. Create Icons (cropped to bounding box: left=84, top=252, right=603, bottom=771)
source_icon = r"C:\Users\ovjup\.gemini\antigravity\brain\2b716104-ed0b-4d2d-a538-09caffc14132\media__1781658398072.png"

try:
    img = Image.open(source_icon)
    # Crop to the centered rounded square
    cropped = img.crop((84, 252, 603, 771))
    
    # Save resized versions
    cropped.resize((16, 16), Image.Resampling.LANCZOS).save(os.path.join(ext_dir, "icon16.png"))
    cropped.resize((48, 48), Image.Resampling.LANCZOS).save(os.path.join(ext_dir, "icon48.png"))
    cropped.resize((128, 128), Image.Resampling.LANCZOS).save(os.path.join(ext_dir, "icon128.png"))
    print("Sharp icons created successfully.")
except Exception as e:
    print("Error creating icons:", e)

# 3. Write manifest.json with declarativeNetRequest and background service worker
manifest = {
    "manifest_version": 3,
    "name": "VNR MUD-KUTTER",
    "version": "1.1.0",
    "description": "Autonomous browser engine for Suno.com quality optimization and telemetry shielding.",
    "icons": {
        "16": "icon16.png",
        "48": "icon48.png",
        "128": "icon128.png"
    },
    "background": {
        "service_worker": "background.js"
    },
    "content_scripts": [
        {
            "matches": ["https://suno.com/*", "https://www.suno.com/*"],
            "js": ["suno_automation.js"],
            "run_at": "document_start"
        }
    ],
    "permissions": [
        "declarativeNetRequest"
    ],
    "declarative_net_request": {
        "rule_resources": [
            {
                "id": "ruleset_1",
                "enabled": True,
                "path": "rules.json"
            }
        ]
    }
}

with open(os.path.join(ext_dir, "manifest.json"), "w", encoding="utf-8") as f:
    json.dump(manifest, f, indent=2)
print("manifest.json written.")

# 4. Write background.js
background_js = """// background.js - VNR MUD-KUTTER Service Worker
chrome.runtime.onInstalled.addListener(() => {
    console.log("VNR MUD-KUTTER: Performance shield and telemetry blocker active.");
});
"""
with open(os.path.join(ext_dir, "background.js"), "w", encoding="utf-8") as f:
    f.write(background_js)
print("background.js written.")

# 5. Write rules.json (declarativeNetRequest rules to block trackers at network level)
rules = []
with open(os.path.join(ext_dir, "rules.json"), "w", encoding="utf-8") as f:
    json.dump(rules, f, indent=2)
print("rules.json written.")

# 6. Copy Suno automation script
suno_src = r"c:\Users\ovjup\Desktop\SUNO REVERSE ENGINEERING!\tampermonkey_scripts\suno_automation_script.user.js"
suno_dest = os.path.join(ext_dir, "suno_automation.js")
shutil.copy2(suno_src, suno_dest)
print("suno_automation.js written.")

# 7. Zip the extension folder
zip_path = r"c:\Users\ovjup\Desktop\SUNO REVERSE ENGINEERING!\vnr_mud_kutter.zip"
with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk(ext_dir):
        for file in files:
            file_path = os.path.join(root, file)
            arcname = os.path.relpath(file_path, ext_dir)
            zipf.write(file_path, arcname)
print(f"Extension zipped successfully to: {zip_path}")
