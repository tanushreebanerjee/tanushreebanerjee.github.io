#!/bin/bash

# Fix all module files to use proper Markdeep format
cd "$(dirname "$0")/modules"

for file in *.md.html; do
    if [[ -f "$file" ]]; then
        echo "Processing $file..."
        
        # Create a temporary file
        temp_file=$(mktemp)
        
        # Read the file content between <code> tags (excluding the wrapper)
        sed -n '/<code style="display:none">/,/<\/code>/p' "$file" | \
        sed '1d;$d' | \
        sed 's|../index\.md\.html|../index.html|g' > "$temp_file"
        
        # Extract the title from the original file
        title=$(grep -o '<title>[^<]*</title>' "$file" | sed 's/<title>//; s/<\/title>//')
        
        # Create new file with proper Markdeep format
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

EOF
        
        # Append the content and fix the footer
        cat "$temp_file" | \
        sed 's|</div>|---|' | \
        sed 's|</body>||' | \
        sed 's|</html>||' | \
        sed 's|<div style="text-align: center; margin-top: 2em;">|---|' >> "$file"
        
        # Add proper Markdeep footer
        echo "" >> "$file"
        echo "<!-- Markdeep: --><style class=\"fallback\">body{visibility:hidden;white-space:pre;font-family:monospace}</style><script src=\"markdeep.min.js\" charset=\"utf-8\"></script><script src=\"https://morgan3d.github.io/markdeep/latest/markdeep.min.js\" charset=\"utf-8\"></script><script>window.alreadyProcessedMarkdeep||(document.body.style.visibility=\"visible\")</script>" >> "$file"
        
        # Clean up
        rm "$temp_file"
    fi
done

echo "All module files processed!"