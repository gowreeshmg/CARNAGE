import re

with open('app.js', 'r') as f:
    code = f.read()

# Find the CARS array
match = re.search(r'const CARS = \[([\s\S]*?)\];\n\n// ──', code)
if not match:
    print("Could not find CARS")
    exit(1)

array_content = match.group(1)

# Split by `  {`
blocks = array_content.split('  {\n')
# The first element will be empty string before the first `  {`
blocks = blocks[1:]

def get_name(b):
    m = re.search(r'id:\s*\'([^\']+)\'', b)
    if m: return m.group(1)
    return ""

# Put them back with `  {\n` prefix
parsed_blocks = ["  {\n" + b for b in blocks]

# current order:
# 0: byd-sealion
# 1: byd-seal
# 2: bmw-x7
# 3: range-rover-velar
# 4: tesla-model-y
# 5: mg-cyberster
# 6: byd-emax

# Target order:
# sealion, seal, emax, x7, velar, model-y, cyberster
target_ids = ['byd-sealion', 'byd-seal', 'byd-emax', 'bmw-x7', 'range-rover-velar', 'tesla-model-y', 'mg-cyberster']

new_blocks = []
for tid in target_ids:
    for b in parsed_blocks:
        if get_name(b) == tid:
            new_blocks.append(b)
            break

# update index string like '01 / 07'
for i, b in enumerate(new_blocks):
    new_blocks[i] = re.sub(r"index:\s*'0\d / 07'", f"index: '0{i+1} / 07'", b)

new_array_content = "".join(new_blocks).rstrip() + "\n"

new_code = code[:match.start(1)] + new_array_content + code[match.end(1):]

with open('app.js', 'w') as f:
    f.write(new_code)
print("Updated app.js order")

