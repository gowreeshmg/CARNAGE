import json
import os
from PIL import Image

manifest = {
  "name": "CARNAGE AI Auto",
  "short_name": "CARNAGE",
  "description": "Intelligent Automotive Intelligence Platform",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#030309",
  "theme_color": "#030309",
  "icons": [
    {
      "src": "assets/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "assets/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    {
      "src": "assets/apple-touch-icon.png",
      "sizes": "180x180",
      "type": "image/png"
    }
  ]
}

with open("manifest.json", "w") as f:
    json.dump(manifest, f, indent=2)

try:
    img = Image.open("assets/carnage-logo.jpg")
    # Convert to square by adding black padding
    w, h = img.size
    size = max(w, h)
    new_img = Image.new("RGB", (size, size), (3, 3, 9))
    new_img.paste(img, ((size - w) // 2, (size - h) // 2))
    
    # Generate 192, 512, 180
    new_img.resize((192, 192), Image.LANCZOS).save("assets/icon-192.png")
    new_img.resize((512, 512), Image.LANCZOS).save("assets/icon-512.png")
    new_img.resize((180, 180), Image.LANCZOS).save("assets/apple-touch-icon.png")
    print("Icons generated successfully!")
except Exception as e:
    print(f"Error generating icons: {e}")
