
path = r"f:\CODES\Programming-Hero\Milestone 12\sql-monster\src\data\chapters_bn.js"
content_path = r"f:\CODES\Programming-Hero\Milestone 12\sql-monster\new_chapter_5.js"

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
    # Try to proceed anyway or fail? better fail.
    # exit(1) # Commented out to inspect.

# I generally want to insert BEFORE start_obj_index.
# So split at start_obj_index.
# Check previous line for comma.
prev_line_index = start_obj_index - 1
prev_line = lines[prev_line_index].rstrip()
if not prev_line.endswith(","):
    print(f"Adding comma to line {prev_line_index+1}: {prev_line}")
    lines[prev_line_index] = lines[prev_line_index].rstrip() + ",\n"

# Verify context
print(f"Inserting BEFORE line {start_obj_index+1}: {lines[start_obj_index].rstrip()}")

final_lines = lines[:start_obj_index]
final_lines.append(new_content)
final_lines.append(",\n")
final_lines.extend(lines[start_obj_index:])

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(final_lines)

print("File updated.")
