from dotenv import load_dotenv
load_dotenv()

import cloudinary
from cloudinary.utils import cloudinary_url

config = cloudinary.config(secure=True)

def validate_config():
    print(cloudinary.config().cloud_name)


def image_optimization():
    url, options = cloudinary_url(
        'chameleon',
        fetch_format="auto",
        quality="auto"
    )
    print("****Transform to apply auto format and quality****\nTransformation URL --> " + url)


def main():
    validate_config()
    image_optimization()


main()
