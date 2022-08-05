from dotenv import load_dotenv
load_dotenv()

import cloudinary
from cloudinary.utils import cloudinary_url

config = cloudinary.config(secure=True)

def validate_config():
    print(cloudinary.config().cloud_name)


def video_overlay():
    url, options = cloudinary_url("closeupchameleon.mp4",
    resource_type="video",
    transformation=[
        {"crop": "fill", "width": 500},
        {'color': "#FFFFFF", "overlay": {"font_family": "Arial", "font_size": 80, "text": "Chameleon!"}},
        {"flags": "layer_apply", 'gravity': "south", 'y': "0.05"}
    ])
    # print the transformation URL
    print("****Transform to add a text overlay Chameleon! to the north east corner of a video****\nTransformation URL --> " + url)

def main():
    validate_config()
    video_overlay()


main()
