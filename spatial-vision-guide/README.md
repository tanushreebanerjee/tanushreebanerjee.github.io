# Spatial Vision Guide

An open educational resource for learning 3D/4D computer vision, neural rendering, and spatial understanding from foundations to frontiers.

**Style**: Hybrid encyclopedia/blog format - concise, factual content for foundations; deeper blog-style with personal insights for frontier topics.

## Structure

This guide is built using [Markdeep](https://casual-effects.com/markdeep/), a lightweight markdown extension that renders beautifully in browsers without a build step.

```
spatial-vision-guide/
├── index.md.html              # Main entry point
├── modules/                   # Individual topic modules
│   ├── 00-foundations-*.md.html
│   ├── 01-representation-*.md.html
│   └── ...
├── assets/                    # Images, diagrams, etc.
├── reading-list.md.html       # Complete bibliography
└── README.md                  # This file
```

## Viewing Locally

Simply open any `.md.html` file in a web browser. Markdeep will automatically render it. No build step required!

```bash
# Open the main index
open index.md.html

# Or serve locally with Python
python -m http.server 8000
# Then visit http://localhost:8000/index.md.html
```

## Integration with Jekyll Website

When you're ready to integrate this with your Jekyll site:

### Option 1: Static HTML Export (Recommended)
1. Markdeep files can be viewed as-is or converted to standalone HTML
2. Copy the `spatial-vision-guide/` directory into your Jekyll site
3. Add a link in your main site navigation pointing to `spatial-vision-guide/index.md.html`

### Option 2: Jekyll Collection
1. Create a Jekyll collection in `_config.yml`:
   ```yaml
   collections:
     spatial_vision:
       output: true
   ```
2. Copy markdeep files to `_spatial_vision/`
3. Create a Jekyll layout that wraps markdeep content
4. Reference markdeep.js in the layout

### Option 3: Separate Subdomain/Path
- Host the guide separately and link from your main site
- Keeps the guide independent but connected

## Building Standalone HTML (Optional)

If you want to generate static HTML files without the markdeep.js dependency:

```bash
# Install markdeep CLI (if available)
# Or use pandoc with markdeep processing

# For now, markdeep files work directly in browsers
```

## Adding New Content

1. Create a new `.md.html` file in the appropriate module directory
2. Follow the existing structure:
   - Start with `<!doctype html>` and markdeep script
   - Use clear headings and sections
   - Include paper citations with links
   - Add visualizations where helpful
3. Update `index.md.html` to link to the new module
4. Update the reading list if adding new papers

## Paper Citation Format

When citing papers, use this format:

```markdown
### Paper Title (Year)
**Authors** | [arXiv](link) | [Project Page](link) | [Code](link)

Brief description of the paper and why it's important.
```

## Visualizations

Place images in `assets/` and reference them:

```markdown
![Description](assets/image.png)
```

For diagrams, Markdeep supports LaTeX-style math and can render diagrams using its built-in diagram syntax.

## License

This work is dedicated to the public domain under [CC0 1.0 Universal (CC0 1.0) Public Domain Dedication](https://creativecommons.org/publicdomain/zero/1.0/).

You can copy, modify, distribute, and use this work, even for commercial purposes, all without asking permission.

See [LICENSE](LICENSE) file for full details.
