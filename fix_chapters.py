
path = r"f:\CODES\Programming-Hero\Milestone 12\sql-monster\src\data\chapters_bn.js"

with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Lines are 1-based in my analysis.
# I want to KEEP lines 1 to 553.
# DELETE lines 554 to 728.
# KEEP lines 729 onwards.

# 0-based indices:
# Keep 0 to 552 (inclusive).
# Delete 553 to 727 (inclusive). 
# Keep 728 onwards.

# Let's verify context:
print(f"Line 553 (Index 552): {lines[552].rstrip()}")
print(f"Line 554 (Index 553): {lines[553].rstrip()}") # Should be empty or garbage start
print(f"Line 728 (Index 727): {lines[727].rstrip()}") # Should be garbage end `    },`
print(f"Line 729 (Index 728): {lines[728].rstrip()}") # Should be Chapter 3 start `{`

new_lines = lines[:553] + lines[728:]

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("File updated.")
