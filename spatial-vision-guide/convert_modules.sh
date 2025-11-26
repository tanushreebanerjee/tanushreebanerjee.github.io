#!/bin/bash

cd "$(dirname "$0")/modules"

for file in *.md.html; do
    if [[ -f "$file" ]]; then
        echo "Converting $file..."
        
        # Extract content between <code> tags
        content=$(sed -n '/<code style="display:none">/,/<\/code>/p' "$file" | sed '1d;$d')
        
        # Get the title
        title=$(echo "$content" | head -1 | sed 's/^# *//')
        
        # Fix navigation links
        content=$(echo "$content" | sed 's|../index\.md\.html|../index.html|g')
        
        # Create new file
        cat > "$file" << EOF
<!DOCTYPE html>
<meta charset="utf-8" emacsmode="-*- markdown -*-">
<link rel="stylesheet" href="https://casual-effects.com/markdeep/latest/journal.css?">
<style>
/* Burgundy color theme override */
.md h1, .md h2, .md h3, .md h4, .md h5, .md h6 { color: #8B1538; }
.md a { color: #8B1538; }
.md a:hover { color: #A0446C; }
</style>

$content

<!-- Markdeep: --><style class="fallback">body{visibility:hidden;white-space:pre;font-family:monospace}</style><script src="markdeep.min.js" charset="utf-8"></script><script src="https://morgan3d.github.io/markdeep/latest/markdeep.min.js" charset="utf-8"></script><script>window.alreadyProcessedMarkdeep||(document.body.style.visibility="visible")</script>
EOF
        
        echo "✓ Converted $file"
    fi
done

echo "All modules converted successfully!"