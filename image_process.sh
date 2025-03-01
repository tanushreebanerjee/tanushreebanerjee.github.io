#!/bin/bash

# Ensure required directories exist
mkdir -p images_webp
mkdir -p images_resized

# Run Rake tasks for image processing
bundle exec rake images:optimize
bundle exec rake images:webp

# Optional: Commit processed images
git add images_webp images_resized
git commit -m "Processed and optimized images"
