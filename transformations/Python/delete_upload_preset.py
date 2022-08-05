from dotenv import load_dotenv
load_dotenv()
import json

import cloudinary.api
import cloudinary

def validate_config():
    print(cloudinary.config().cloud_name)

# creating upload preset
def delete_upload_preset(my_preset_name):
  resp = cloudinary.api.delete_upload_preset(my_preset_name)
  print(json.dumps(resp, indent=4, sort_keys=True))

def main():
    validate_config()
    delete_upload_preset("avatar")

main()