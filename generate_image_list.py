import os
import json

# Path to the Image folder (adjust if needed)
base_folder = "Image"

# Extensions to include
valid_extensions = (".jpg", ".jpeg", ".png", ".webp")

# Final dictionary
project_images = {}

# Loop through each folder inside Image/
for folder_name in sorted(os.listdir(base_folder)):
    folder_path = os.path.join(base_folder, folder_name)
    if os.path.isdir(folder_path):
        image_list = []
        for file_name in os.listdir(folder_path):
            if file_name.lower().endswith(valid_extensions):
                relative_path = os.path.join(base_folder, folder_name, file_name).replace("\\", "/")
                image_list.append(relative_path)
        if image_list:
            project_images[folder_name] = image_list

# Output JSON file
with open("project_images.json", "w") as f:
    json.dump(project_images, f, indent=2)

print("✅ project_images.json generated successfully!")
