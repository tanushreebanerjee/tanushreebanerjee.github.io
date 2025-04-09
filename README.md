# Tanushree Banerjee's Academic Website

This repository contains the source code for my personal academic website, hosted on GitHub Pages at [tanushreebanerjee.github.io](https://tanushreebanerjee.github.io).

## Overview

This site is built with [Jekyll](https://jekyllrb.com/), a static site generator that transforms Markdown files into a complete website. It's hosted directly from this GitHub repository via [GitHub Pages](https://pages.github.com/).

## About Me

I'm a Research Assistant at the Princeton Computational Imaging Lab, working on explainable 3D perception via inverse generation under Prof. Felix Heide. Starting Fall 2025, I will be a PhD student in Computer Science at the University of Maryland, College Park, under Prof. Matthias Zwicker.

My research lies at the intersection of computer vision, computer graphics, and machine learning, focusing on:
- Leveraging generative model priors to interpret 3D information from everyday 2D visual data
- Reformulating visual perception as inverse rendering/generation problems

## Site Structure

- `_posts/`: Contains individual publication entries in Markdown format
- `images/`: Original images
- `images_resized/`: Optimized images for web display
- `pdfs/`: PDF files for papers, CV, etc.
- `_layouts/`: HTML templates for the site
- `_sass/`: SCSS styles that get compiled into the main CSS
- `style.scss`: Main stylesheet
- `_config.yml`: Jekyll configuration

## How to Update the Website

### Adding a New Publication/Project

1. Create a new Markdown file in the `_posts/` directory with the naming format: `YYYY-MM-DD-title.md`
2. Include the following front matter at the top of the file:

```yaml
---
layout: post
title:  "Publication Title"
date:   YYYY-MM-DD
image: /image-name.png
categories: research  # or independent, other, outreach
course: "Course Name (optional)"
author: "Tanushree Banerjee"
authors: Author list with HTML formatting
paper: pdfs/paper-filename.pdf
slides: pdfs/slides-filename.pdf
supplementary: link-to-supplementary
video: link-to-video
tags: [Tag1, Tag2, Tag3]
venue: "Conference/Journal Name"
arxiv: https://arxiv.org/link
code: https://github.com/link
website: https://project-page-link
highlight: true  # add this if you want to highlight the publication
---

Write your publication abstract or description here. This will be displayed as the excerpt on the main page.
```

3. Add your publication/project image to `images/` and run the resizing script to optimize it:
```
python make_thumbnails.py
```

4. If you have a PDF, add it to the `pdfs/` directory.

### Updating Your CV

1. Replace the existing `cv.pdf` in the `pdfs/` directory with your updated CV.

### Updating Profile Information

1. Edit the personal information in `_config.yml`
2. Update the about section in `index.html`

## Local Development

To run the site locally:

1. Install Ruby and Jekyll (https://jekyllrb.com/docs/installation/)
2. Clone this repository
3. Run `bundle install` to install dependencies
4. Run `bundle exec jekyll serve` to start a local server
5. Visit `http://localhost:4000` in your web browser

## Credits

Design adapted from [Leonid Keselman's Jekyll fork](https://github.com/leonidk/leonidk.github.io) of [Jon Barron's website](https://jonbarron.info/) using Claude 3.7 Sonnet.
