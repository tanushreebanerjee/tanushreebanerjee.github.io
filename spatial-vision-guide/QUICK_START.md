# Quick Start: ReadTheDocs Setup

## What's Changed

✅ Migrated from Markdeep to **ReadTheDocs + Sphinx**  
✅ Built-in search (no custom JavaScript needed)  
✅ Burgundy theme (#8B1538) matching your website  
✅ All 38 modules converted to Markdown  

## Setup on ReadTheDocs (5 minutes)

1. **Go to ReadTheDocs**: https://readthedocs.org/
2. **Sign in** with GitHub
3. **Import Project**:
   - Click "Import a Project"
   - Select `tanushreebanerjee/tanushreebanerjee.github.io` (or your repo)
   - Set name: `spatial-vision-guide`
   - Documentation type: **Sphinx**
   - Configuration file: `.readthedocs.yml`
   - Python configuration file: `requirements.txt`
   - Default branch: `main` (or your default branch)
4. **Advanced Settings** (optional):
   - Install Project: `requirements.txt`
   - Python interpreter: `3.11`
5. **Click "Build"**

That's it! ReadTheDocs will:
- Automatically build from `docs/source/`
- Apply the burgundy theme
- Enable search
- Generate PDF/EPUB versions

## Verify Local Build (Optional)

```bash
cd spatial-vision-guide
pip install -r requirements.txt
cd docs
sphinx-build -b html source _build/html
open _build/html/index.html
```

## Files Structure

```
docs/source/
├── conf.py           # Sphinx config + burgundy theme
├── index.md          # Main page with toctree
├── modules/          # All 38 modules (markdown)
├── reading-list.md   # Bibliography
└── _static/
    └── custom.css    # Burgundy colors (#8B1538)
```

## Features You Get

✅ **Search** - Built-in, works across all pages  
✅ **Mobile responsive** - Works on phones/tablets  
✅ **PDF/EPUB export** - Automatic document generation  
✅ **Version control** - Easy versioning  
✅ **Burgundy theme** - Matches your website  
✅ **System fonts** - Clean typography  

## Next Steps

1. Push changes to GitHub
2. Connect to ReadTheDocs (steps above)
3. Share the URL! (e.g., `spatial-vision-guide.readthedocs.io`)

---

**Questions?** See `README_RTD.md` for detailed documentation.

