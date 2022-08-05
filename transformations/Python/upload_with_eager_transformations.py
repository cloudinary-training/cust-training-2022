from distutils.command.upload import upload
from dotenv import load_dotenv
load_dotenv()

from cloudinary.utils import cloudinary_url
import cloudinary
import cloudinary.uploader
import json

def validateConfig():
    print(cloudinary.config().cloud_name)

def upload_eager(source,resource_type):

    resp = cloudinary.uploader.upload(source, resource_type=resource_type, 
          eager = [{"width": 1000},{"width": 700},{"width": 150}]
    )
    print(json.dumps(resp, indent=4, sort_keys=True))

def main():
    validateConfig()
    upload_eager("./assets/doctor.jpg","image")
  
main()