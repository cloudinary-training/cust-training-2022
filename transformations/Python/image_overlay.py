from dotenv import load_dotenv
load_dotenv()

import cloudinary
from cloudinary.utils import cloudinary_url

config = cloudinary.config(secure=True)

def validate_config():
    print(cloudinary.config().cloud_name)


def image_overlay():
    url, options = cloudinary_url("cld-sample", 
    transformation=[
        {'crop': 'fill', 'width': 500},
        {'fetch_format': 'auto'},
        {'quality': 'auto'},
        {'overlay': 'cld-training-logo'},
        {'opacity': 50},
        {'width': 100},
        {'flags': "layer_apply", 'gravity': "north_east", 'y': 10, 'x': 10}
    ])
    print("****Transform to add a Cloudinary logo overlay to the north east corner of an image****\nTransformation URL --> " + url)

def main():
    validate_config()
    image_overlay()


main()
