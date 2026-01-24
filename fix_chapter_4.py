
path = r"f:\CODES\Programming-Hero\Milestone 12\sql-monster\src\data\chapters_bn.js"
content_path = r"f:\CODES\Programming-Hero\Milestone 12\sql-monster\new_chapter_4_content.js"

with open(content_path, 'r', encoding='utf-8') as f:
    new_content = f.read()

# I want to insert new_content, but I need to make sure I add a newline if needed.
# And maybe a comma?
# The content file ends with `    },`.
# The next chapter starts with `{`.
# So I need a comma between them?
# Yes. `chaptersBn` is an array.
# But `new_chapter_4_content.js` does NOT have a trailing comma.
# The original file line 1023 was `},`.
# Line 1024 was `{`.
# In between them, there was implied comma from the previous line?
# Wait, `},` implies the comma is ON line 1023.
# My new content ends with `        ]` (line 1261) then `    }` (line 1262).
# It does NOT have a comma.
# So I should add a comma to the string I insert.

with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Replace lines 756 to 1023 (inclusive, 1-based)
# Python indices: 755 to 1022.

# Verification
print(f"Line 756 (Index 755, REPLACE START): {lines[755].rstrip()}") # Expected: {
print(f"Line 1023 (Index 1022, REPLACE END): {lines[1022].rstrip()}") # Expected: },
print(f"Line 1024 (Index 1023, KEEP): {lines[1023].rstrip()}") # Expected: { (Chapter 5)

# The new content should replace `lines[755:1023]`.
# `lines[755]` to `lines[1022]` are replaced.
# `lines[:755]` (Keep up to 755) + [new_content + ",\n"] + `lines[1023:]`.

# Wait, `lines[0:755]` is lines 1 to 755.
# Line 755 is `    },`. This is correct.
# Then I insert New Chapter 4 (which starts with `{`).
# Then I add comma.
# Then I append the rest.

# But `new_content` is a string. `lines` is a list of strings.
# I need to be careful with `new_content`.
# I should just make it a list of one string or split it.
# Splitting it is better for `writelines`.

# Also, ensure indentation of the new content is preserved (it is in the file).
# And ensure trailing comma.

import json # Just to be safe? No, it's JS.

final_lines = lines[:755]
final_lines.append(new_content)
final_lines.append(",\n")
final_lines.extend(lines[1023:])

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(final_lines)

print("File updated.")
