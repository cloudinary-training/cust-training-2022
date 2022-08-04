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
  

    # cloudinary.uploader.upload("https://res.cloudinary.com/cloudinary-training/video/upload/wave.mp4",
    #                            public_id="wave",resource_type="video", overwrite=True)

    # cloudinary.uploader.upload("https://res.cloudinary.com/cloudinary-training/video/upload/images/forest-reflection",
    #                            public_id="wave", overwrite=True)
    
    # cloudinary.uploader.upload("https://res.cloudinary.com/cloudinary-training/video/upload/images/green-car.jpg",
    #                            public_id="green-car", overwrite=True)

def main():
    validateConfig()
    uploadAsset("https://res.cloudinary.com/jen-brissman/image/upload/butterfly.jpg","butterfly","image")
    uploadAsset("https://res.cloudinary.com/cloudinary-training/video/upload/wave.mp4", "wave", "video")
    uploadAsset("https://res.cloudinary.com/cloudinary-training/image/upload/images/forest-reflection", "images/forest-reflection", "image")
    uploadAsset("https://res.cloudinary.com/cloudinary-training/image/upload/green-car.jpg","green-car","image")
   


main()