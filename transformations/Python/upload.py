from dotenv import load_dotenv
load_dotenv()

from cloudinary.utils import cloudinary_url
import cloudinary
import cloudinary.uploader
import cloudinary.api

config = cloudinary.config(secure=True)

print("**** Set up and configure the SDK:****\nCredentials: ",
      config.cloud_name, config.api_key, "\n")


# Upload assets
# Set the asset's public ID and allow overwriting the asset with new versions

# Upload 
cloudinary.uploader.upload("https://res.cloudinary.com/jen-brissman/image/upload/v1659458882/samples/logo.png", public_id="logo", overwrite=True)

# Upload
cloudinary.uploader.upload("https://res.cloudinary.com/jen-brissman/image/upload/v1659367861/chameleon.jpg", public_id="chameleon", overwrite=True)

# Upload
cloudinary.uploader.upload("https://res.cloudinary.com/jen-brissman/video/upload/v1659487494/closeupchameleon.mp4", public_id="closeupchameleon", overwrite=True)

# Upload
cloudinary.uploader.upload("https://res.cloudinary.com/jen-brissman/image/upload/v1659109791/gal.jpg", public_id="gal", overwrite=True)
