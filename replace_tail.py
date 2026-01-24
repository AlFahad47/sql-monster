
path = r"f:\CODES\Programming-Hero\Milestone 12\sql-monster\src\data\chapters_bn.js"
content_path = r"f:\CODES\Programming-Hero\Milestone 12\sql-monster\new_chapters_6_7_8.js"

with open(content_path, 'r', encoding='utf-8') as f:
    new_content = f.read()

with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find Chapter 6 start
ch6_index = -1
for i, line in enumerate(lines):
    if "id: 'chapter-6'" in line:
        ch6_index = i
        break

if ch6_index == -1:
    print("Error: Chapter 6 not found!")
    exit(1)

# ch6_index is the line with id.
# ch6_index - 1 should be `{`.
start_obj_index = ch6_index - 1
if "{" not in lines[start_obj_index]:
    print(f"Warning: Line {start_obj_index+1} is not {{. It is: {lines[start_obj_index]}")

# We want to replace from start_obj_index to the END of the file.
# But verify we are not deleting too much (like export footer).
# But there is no export footer, just ];
# So replacing to end is safe.

print(f"Replacing from line {start_obj_index+1} to EOF with new content.")

final_lines = lines[:start_obj_index]
# Ensure previous line needs a comma?
# Chapter 5 should have ended with `},\n`.
# We verify lines[start_obj_index-1]
print(f"Preceding line: {lines[start_obj_index-1].rstrip()}")

final_lines.append(new_content)

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(final_lines)

print("File updated.")
