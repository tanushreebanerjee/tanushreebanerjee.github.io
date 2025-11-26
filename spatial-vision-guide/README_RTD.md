# ReadTheDocs Setup for Spatial Vision Guide

This guide is now set up to use ReadTheDocs with Sphinx and MyST Markdown.

## Structure

```
spatial-vision-guide/
├── docs/
│   └── source/
│       ├── conf.py              # Sphinx configuration
│       ├── index.md             # Main index with toctree
│       ├── modules/             # All module markdown files
│       ├── reading-list.md      # Bibliography
│       └── _static/
│           └── custom.css       # Burgundy theme (#8B1538)
├── .readthedocs.yml             # ReadTheDocs configuration
└── requirements.txt             # Python dependencies
```

## Setup Instructions

### 1. Install Dependencies

```bash
pip install -r requirements.txt
```

### 2. Build Locally

```bash
cd docs
sphinx-build -b html source _build/html
```

Open `_build/html/index.html` in your browser.

### 3. Set Up on ReadTheDocs

1. Go to [readthedocs.org](https://readthedocs.org/)
2. Sign in with GitHub
3. Click "Import a Project"
4. Select your repository (`tanushreebanerjee.github.io`)
5. Set the project name (e.g., "spatial-vision-guide")
6. Set documentation type to "Sphinx"
7. Set path to `docs/`
8. Click "Build"

ReadTheDocs will automatically:
- Build from the `docs/` directory
- Use `.readthedocs.yml` configuration
- Apply the burgundy theme
- Enable search across all pages

## Color Theme

The burgundy theme (#8B1538) is configured in:
- `docs/source/_static/custom.css` - Custom CSS overrides
- `docs/source/conf.py` - Theme options

## Features

✅ **Built-in search** - No custom JavaScript needed  
✅ **Burgundy color theme** - Matches personal website  
✅ **Mobile responsive** - Works on all devices  
✅ **PDF/EPUB export** - Automatic document generation  
✅ **Version control** - Easy to maintain multiple versions  
✅ **System fonts** - Matches personal website typography  

## Converting New Modules

If you add new modules:

1. Create `.md` file in `docs/source/modules/`
2. Add to appropriate toctree in `docs/source/index.md`
3. Push to GitHub - ReadTheDocs will auto-build

## Local Development

```bash
# Install dependencies
pip install -r requirements.txt

# Build documentation
cd docs && sphinx-build -b html source _build/html

# Auto-rebuild on file changes (requires sphinx-autobuild)
pip install sphinx-autobuild
sphinx-autobuild docs/source docs/_build/html
```

## Notes

- All content is in standard Markdown (MyST flavor)
- Math equations use LaTeX syntax (works with MathJax)
- Images should be in `docs/source/_static/` and referenced as `/_static/image.png`
- Code blocks support syntax highlighting automatically

