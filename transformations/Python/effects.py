from dotenv import load_dotenv
load_dotenv()

import cloudinary
from cloudinary.utils import cloudinary_url

config = cloudinary.config(secure=True)

def validate_config():
    print(cloudinary.config().cloud_name)


def effects():
    url, options = cloudinary_url(
        'cld-sample',
        width=500,
        height=500,
        crop="thumb",
        gravity="face",
        radius="max",
        effect="saturation:80",
        fetch_format="auto",
        quality="auto"
    )
    print("****Transform thumb crop, gravity to find face, width and height 500, round corners, and increasing saturation at 40****\nTransformation URL --> " + url)

def main():
    validate_config()
    effects()


main()
