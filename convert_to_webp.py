from PIL import Image
import os

input_folder = "images"
output_folder = "images_webp"
os.makedirs(output_folder, exist_ok=True)

for filename in os.listdir(input_folder):
    if filename.endswith(('.png', '.jpg', '.jpeg')):
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, os.path.splitext(filename)[0] + '.webp')
        
        with Image.open(input_path) as img:
            img.save(output_path, 'WEBP')
            print(f"Converted {filename} to WebP")
