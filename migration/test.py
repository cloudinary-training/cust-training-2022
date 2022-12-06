import json

from dotenv import load_dotenv
load_dotenv()

#import cloudinary after load dotnev
import cloudinary
from cloudinary.uploader import upload

config = cloudinary.config(secure=True)
print(config.cloud_name)



# default values used if not specified
# if you don't specify use_filename, you get a random 20 character string
# if you  when you specifiy use_filename=True, 

# unique filename:false, and use_filename:true - expect just the filename
def uploadSingle(url,overwrite=True,invalidate=False,use_filename=False,unique_filename=True):
    print("overwrite:", overwrite)
    print("invalidate:", invalidate)
    print("use_filename:", use_filename)
    print("unique_filename:", unique_filename)

    response = upload(url, 
        folder='test-unique',
        overwrite = overwrite,
        invalidate = invalidate,
        use_filename=use_filename,
        unique_filename=unique_filename)
                      
    print("Upload response:")
    for key in sorted(response.keys()):
      print("  %s: %s" % (key, response[key]))
    print('---')


# uploadSingle('https://cloudinary-training.github.io/advanced-concepts/assets/images/banana.jpg',True,False, True,False)

# https://cloudinary.com/documentation/image_upload_api_reference#upload_optional_parameters
# docs say that you get an error if you say that unique_filename is false and overwrite is false and use_filename is true
  
# overwrite is False
# invalidate is False
# use_filename is True
# unique_filename is False
# result is random 20 character string
# Cloudinary is looking at the etag and seeing that it's the same asset
uploadSingle('https://cloudinary-training.github.io/advanced-concepts/assets/images/banana.jpg',False,False, True,False)



