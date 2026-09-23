import re

with open('index.html', 'r') as f:
    html = f.read()

# Swap Titles in HUD
html = html.replace('<div class="ai-algo-title">AI ALGORITHM STACK</div>', '<div class="ai-algo-title">AI FEATURES</div>')
html = html.replace('<div class="sensor-title">SENSOR ARRAY</div>', '<div class="sensor-title">AI ALGORITHMS</div>')

# Reorder car slides
match = re.search(r'(<div class="car-slide.*?</div>\s+</div>\n\n)', html, re.DOTALL)
# Actually the slides look like this:
#         <div class="car-slide active" data-index="0">
#           ...
#         </div>

# Let's extract all slides
slides_match = re.search(r'(<div class="car-slide.*?</div>\n        </div>\n\n)', html, re.DOTALL)
if not slides_match:
    print("Could not find slides block")
    
# Better to just use regex to find each block:
slides = re.findall(r'(\s*<div class="car-slide[^>]*>.*?</div>\n)', html, re.DOTALL)

# In the current HTML, it looks like:
#         <div class="car-slide active" data-index="0">
#           <div class="car-img-bg" style="background-image:url('assets/BYD%20Sealion%20.png');"></div>
#           <img class="car-img-main" src="assets/BYD%20Sealion%20.png" alt="BYD Sealion" />
#           <div class="car-img-overlay"></div>
#         </div>
slides_raw = re.findall(r'\s*<div class="car-slide[^>]*>.*?<div class="car-img-overlay"></div>\n\s*</div>', html, re.DOTALL)

if len(slides_raw) == 7:
    # 0: Sealion
    # 1: Seal
    # 2: X7
    # 3: Velar
    # 4: Model Y
    # 5: Cyberster
    # 6: eMax
    
    # New order: 0, 1, 6, 2, 3, 4, 5
    ordered = [slides_raw[0], slides_raw[1], slides_raw[6], slides_raw[2], slides_raw[3], slides_raw[4], slides_raw[5]]
    
    # Update data-index and active class
    for i in range(7):
        ordered[i] = re.sub(r'data-index="\d+"', f'data-index="{i}"', ordered[i])
        if i == 0:
            if 'active' not in ordered[i]:
                ordered[i] = ordered[i].replace('car-slide', 'car-slide active', 1)
        else:
            ordered[i] = ordered[i].replace(' active', '')

    new_slides_block = "\n".join(ordered)
    
    # Replace the old block
    old_block = "".join(slides_raw)
    html = html.replace(old_block, new_slides_block)

# Remove feature strips HTML
fs_block = re.search(r'\s*<!-- Feature Strips -->[\s\S]*?</div>\n\s*</div>\n\s*</div>', html)
if fs_block:
    html = html.replace(fs_block.group(0), '')

with open('index.html', 'w') as f:
    f.write(html)
print("Updated index.html")
