# Fixing the skipping issue for entries like the 'Sun' that have specific shapes such as 'circle'

import uuid
import json

# Your original data for the image map
image_map_data = [
    {
        "alt": "Washing-Machine",
        "title": "Washing-Machine",
        "coords": [1133, 762, 1288, 959],
        "shape": "rect",
    },
    {
        "alt": "Sun",
        "title": "Sun",
        "coords": [906, 138, 137],
        "shape": "circle",
    },
    {
        "alt": "Tic-Tac-Toe",
        "title": "Tic-Tac-Toe",
        "coords": [709, 972, 709, 874, 652, 624, 436, 606, 384, 961, 501, 989],
        "shape": "poly",
    },
]

# Function to convert the data into the required format
def convert_to_image_map_format(data):
    formatted_data = []
    for item in data:
        coords = item["coords"]
        shape = item["shape"]
        
        # Handle different shapes
        if shape == "poly":
            if len(coords) % 2 != 0:
                print(f"Skipping invalid polygon entry: {item}")
                continue
            polygon = [[coords[i], coords[i + 1]] for i in range(0, len(coords), 2)]
        elif shape in ["rect", "circle"]:  # Rectangles and circles are handled directly
            polygon = None
        else:
            print(f"Skipping unsupported shape: {item['shape']}")
            continue

        formatted_data.append({
            "id": str(uuid.uuid4()),
            "title": item["title"],
            "shape": shape,
            "name": item["alt"],
            "fillColor": "#00ff194c",
            "strokeColor": "black",
            "coords": coords,
            "polygon": polygon,
        })
    return formatted_data

# Convert and display the result
formatted_data = convert_to_image_map_format(image_map_data)
print(json.dumps(formatted_data, indent=2))
