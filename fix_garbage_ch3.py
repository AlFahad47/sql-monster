
path = r"f:\CODES\Programming-Hero\Milestone 12\sql-monster\src\data\chapters_bn.js"

with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Goal: Delete lines 756 to 901 (inclusive, 1-based)
# Python indices: 755 to 900

# Verification
print(f"Line 755 (Index 754, KEEP): {lines[754].rstrip()}") # Expected: },
print(f"Line 756 (Index 755, DELETE): {lines[755].rstrip()}") # Expected: levels: [
print(f"Line 901 (Index 900, DELETE): {lines[900].rstrip()}") # Expected: },
print(f"Line 902 (Index 901, KEEP): {lines[901].rstrip()}") # Expected: { (Chapter 4 start)

new_lines = lines[:755] + lines[901:]

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("File updated.")
