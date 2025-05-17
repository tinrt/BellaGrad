import os
from PIL import Image

# Set the directory containing images
image_folder = 'public\images'  # Change this to your actual folder path

# Supported image extensions
image_extensions = ('.png', '.jpg', '.jpeg', '.bmp', '.gif', '.tiff', '.webp')

# Iterate over files in the directory
for filename in os.listdir(image_folder):
    if filename.lower().endswith(image_extensions):
        path = os.path.join(image_folder, filename)
        try:
            with Image.open(path) as img:
                width, height = img.size
                print(f"{filename}: {width}x{height}")
        except Exception as e:
            print(f"Error opening {filename}: {e}")
