from dotenv import load_dotenv
load_dotenv()

import cloudinary
from cloudinary.utils import cloudinary_url

config = cloudinary.config(secure=True)

def validate_config():
    print(cloudinary.config().cloud_name)


def to_png():
    url, options = cloudinary_url ( 
        "doctor",
        format="png",
        crop="thumb",
        width=200,
        height=200,
        gravity="face",
        radius="max",
    )
    print("****Transform from jpg to png****\nTransformation URL --> " + url)

def main():
    validate_config()
    to_png()


main()
