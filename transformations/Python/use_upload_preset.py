from dotenv import load_dotenv
load_dotenv()
import json

import cloudinary.uploader
import cloudinary


def validate_config():
    print(cloudinary.config().cloud_name)

#upload using preset
def use_upload_preset(filepath,my_preset):
  resp = cloudinary.uploader.upload(filepath,upload_preset=my_preset)
  print(json.dumps(resp, indent=4, sort_keys=True))

def main():
    validate_config()
    # filepath and name of preset args
    use_upload_preset("./assets/doctor-profile.png","avatar")

main()