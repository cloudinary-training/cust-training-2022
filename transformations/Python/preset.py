from dotenv import load_dotenv
load_dotenv()

import cloudinary.api
import cloudinary.uploader
import cloudinary

config = cloudinary.config(secure=True)

#creating upload preset
cloudinary.api.create_upload_preset(
  name = "my_preset",
  unsigned = True, 
  tags = "remote", 
  allowed_formats = "jpg,png")

#upload using preset
cloudinary.uploader.upload("https://res.cloudinary.com/jen-brissman/image/upload/v1659110959/baby%20on%20horse.jpg", public_id="baby_on_horse", unique_filename = False, overwrite=True)
