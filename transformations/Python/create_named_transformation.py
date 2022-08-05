from dotenv import load_dotenv
load_dotenv()
import json

import cloudinary.api
import cloudinary

def validate_config():
    print(cloudinary.config().cloud_name)

#creating named transformation
def create_named_transformation(name):
    resp = cloudinary.api.create_transformation(name, dict(
        transformation=[{'crop': 'thumb', 'width': 200, 'height':200, 'gravity': 'face', 'radius': 'max'}]))
    print(json.dumps(resp, indent=4, sort_keys=True))

def main():
    validate_config()
    create_named_transformation('avatar')

main()
