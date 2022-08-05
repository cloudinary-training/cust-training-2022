from dotenv import load_dotenv
load_dotenv()

import cloudinary
from cloudinary.utils import cloudinary_url

config = cloudinary.config(secure=True)

def validate_config():
    print(cloudinary.config().cloud_name)


def video_optimization():
    url, options = cloudinary_url(
        'closeupchameleon.mp4',
        resource_type="video",
        fetch_format="auto",
        quality="auto"
    )
    print("****Optimization of a video - Transform to apply auto format and quality****\nTransformation URL --> " + url)
   

def main():
    validate_config()
    video_optimization()


main()
