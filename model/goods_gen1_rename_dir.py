import os

def rename_images_and_create_mapping(directory):
    for root, dirs, files in os.walk(directory):
        mapping = []
        counter = 21
        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg', '.png')):
                old_name = file
                new_name = f"{counter:02d}{os.path.splitext(file)[1]}"
                old_path = os.path.join(root, old_name)
                new_path = os.path.join(root, new_name)
                
                # Rename the file
                os.rename(old_path, new_path)
                
                # Add to mapping
                mapping.append(f"{old_name} -> {new_name}")
                
                counter += 1
        
        # Write mapping to txt file
        if mapping:
            with open(os.path.join(root, 'mapping.txt'), 'w') as f:
                for line in mapping:
                    f.write(line + "\n")

# Specify the directory you want to process
directory_to_process = "/Users/mac/Desktop/nagashiro/goods_m6_catz"

rename_images_and_create_mapping(directory_to_process)
