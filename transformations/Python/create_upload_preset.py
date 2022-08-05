from dotenv import load_dotenv
load_dotenv()
import json

import cloudinary.api
import cloudinary

def validate_config():
    print(cloudinary.config().cloud_name)

# creating upload preset
def create_upload_preset(name):
  resp = cloudinary.api.create_upload_preset(
    name = name,
    folder = "user-profiles",
    unsigned = False, 
    allowed_formats = "png",
    transformation=[{"crop": "thumb", "width": 200, "height":200, "gravity": "face", "radius": "max"}]
  )
  print(json.dumps(resp, indent=4, sort_keys=True))

def main():
    validate_config()
    create_upload_preset("avatar")

main()

