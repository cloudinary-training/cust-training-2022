from dotenv import load_dotenv
load_dotenv()

import cloudinary.api
import cloudinary.uploader
import cloudinary

config = cloudinary.config(secure=True)

cloudinary.api.create_upload_preset(
  name = "my_preset",
  unsigned = True, 
  tags = "remote", 
  allowed_formats = "jpg,png")