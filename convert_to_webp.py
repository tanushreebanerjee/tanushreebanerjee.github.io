from PIL import Image
import os
import subprocess

def convert_to_webp(input_folder='images', output_folder='images_webp', quality=80):
    """
    Convert images to WebP with multiple optimizations
    
    Args:
        input_folder (str): Source image directory
        output_folder (str): Destination WebP directory
        quality (int): Compression quality (0-100)
    """
    # Create output directory if it doesn't exist
    os.makedirs(output_folder, exist_ok=True)
    
    # Supported image formats
    supported_formats = ['.jpg', '.jpeg', '.png', '.tiff', '.bmp']
    
    # Conversion statistics
    total_converted = 0
    total_saved = 0
    
    for filename in os.listdir(input_folder):
        # Check file extension
        if any(filename.lower().endswith(fmt) for fmt in supported_formats):
            input_path = os.path.join(input_folder, filename)
            output_filename = os.path.splitext(filename)[0] + '.webp'
            output_path = os.path.join(output_folder, output_filename)
            
            try:
                # Open image
                with Image.open(input_path) as img:
                    # Convert RGBA to RGB if needed
                    if img.mode in ('RGBA', 'LA'):
                        background = Image.new('RGB', img.size, (255, 255, 255))
                        background.paste(img, mask=img.split()[-1])
                        img = background
                    
                    # Save as WebP
                    img.save(output_path, 'WEBP', quality=quality, method=6)
                
                # Calculate file size reduction
                original_size = os.path.getsize(input_path)
                webp_size = os.path.getsize(output_path)
                size_reduction = (1 - webp_size / original_size) * 100
                
                print(f"Converted {filename} to WebP")
                print(f"Size reduction: {size_reduction:.2f}%")
                
                total_converted += 1
                total_saved += size_reduction
            
            except Exception as e:
                print(f"Error converting {filename}: {e}")
    
    # Print overall statistics
    print(f"\nTotal images converted: {total_converted}")
    print(f"Average size reduction: {total_saved / total_converted if total_converted > 0 else 0:.2f}%")

# Run the conversion
convert_to_webp()
