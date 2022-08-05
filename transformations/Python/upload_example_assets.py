from distutils.command.upload import upload
from dotenv import load_dotenv
load_dotenv()

from cloudinary.utils import cloudinary_url
import cloudinary
import cloudinary.uploader
import cloudinary.api
import json

def validateConfig():
    print(cloudinary.config().cloud_name)

def uploadAsset(source,public_id,resource_type):

    resp = cloudinary.uploader.upload(source, public_id=public_id, resource_type=resource_type, overwrite=True)
    print(json.dumps(resp, indent=4, sort_keys=True))

def main():
    validateConfig()
    # frontend
    uploadAsset("https://res.cloudinary.com/jen-brissman/image/upload/butterfly.jpg","butterfly","image")
    uploadAsset("https://res.cloudinary.com/cloudinary-training/video/upload/wave.mp4", "wave", "video")
    uploadAsset("https://res.cloudinary.com/cloudinary-training/image/upload/images/forest-reflection", "cld-forest-reflection", "image")
    uploadAsset("https://res.cloudinary.com/cloudinary-training/image/upload/green-car.jpg","green-car","image")
    uploadAsset("https://res.cloudinary.com/cloudinary-training/image/upload/logo.png","logo-solid-blue","image")
    # backend
    uploadAsset("./assets/chameleon.jpg","chameleon","image")
    uploadAsset("./assets/closeupchameleon.mp4","closeupchameleon","video")
    uploadAsset("./assets/logo.png","cld-training-logo","image")
    uploadAsset("https://res.cloudinary.com/cloudinary-training/image/upload/c_fill,g_face,h_1000,w_1000/doctor.png","doctor-profile","image")
  
main()