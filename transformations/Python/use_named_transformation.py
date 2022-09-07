from dotenv import load_dotenv
load_dotenv()

import cloudinary
from cloudinary.utils import cloudinary_url

config = cloudinary.config(secure=True)

def validate_config():
    print(cloudinary.config().cloud_name)


def use_named_transformation():
    url, options = cloudinary_url(
        "doctor",
       transformation="avatar"
    )
    print("****Use a named transformation****\nTransformation URL --> " + url)

def main():
    validate_config()
    use_named_transformation()


main()
