from dotenv import load_dotenv
load_dotenv()

import cloudinary
from cloudinary.utils import cloudinary_url

config = cloudinary.config(secure=True)

def validate_config():
    print(cloudinary.config().cloud_name)


def resize_with_crop():
# Perform RESIZE transformation
    url, options = cloudinary_url(
      'cld-sample',
        width="400",
        crop="thumb",
        gravity="face",
    )
    print("****Transform the to a thumb crop and a width of 500, focusing on the face****\nTransformation URL --> " + url)


def main():
    validate_config()
    resize_with_crop()


main()
