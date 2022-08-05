from dotenv import load_dotenv
load_dotenv()

import cloudinary
from cloudinary.utils import cloudinary_url

config = cloudinary.config(secure=True)

def validate_config():
    print(cloudinary.config().cloud_name)


def resize():
# Perform RESIZE transformation
    url, options = cloudinary_url(
        "cld-sample",
        width=300,
        crop="fit",
    )
    print("****Transform to scale down, maintaining original aspect ratio****\nTransformation URL --> " + url)

def main():
    validate_config()
    resize()


main()
