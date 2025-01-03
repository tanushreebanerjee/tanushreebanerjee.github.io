from PIL import Image
import os

# Define paths
input_folder = "images"
output_folder = "images_resized"

# Create output directory if it doesn't exist
os.makedirs(output_folder, exist_ok=True)

# Define max dimensions
max_width = 400
max_height = 400

# Resize and save images
for file_name in os.listdir(input_folder):
    if file_name.endswith(('.jpg', '.jpeg', '.png')):
        with Image.open(os.path.join(input_folder, file_name)) as img:
            # Convert RGBA to RGB if needed
            if img.mode == 'RGBA':
                img = img.convert('RGB')
            
            # Resize the image
            img.thumbnail((max_width, max_height))
            
            # Save the image
            output_path = os.path.join(output_folder, file_name)
            img.save(output_path, optimize=True)
            print(f"Processed: {file_name}")