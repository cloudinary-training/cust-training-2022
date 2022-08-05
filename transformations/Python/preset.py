from dotenv import load_dotenv
load_dotenv()

import cloudinary.api
import cloudinary.uploader
import cloudinary

config = cloudinary.config(secure=True)

# creating background removal + folder sorting upload preset
cloudinary.api.create_upload_preset(
  name = "bg_removal",
  unsigned = True, 
  tags = '2022',
  allowed_formats = "jpg,png",
  categorization = "google_tagging",
  auto_tagging = 0.75,
  background_removal = "cloudinary_ai",  
  folder = "new-products")

#upload using preset
cloudinary.uploader.upload("bg_removal", public_id="",overwrite=True)
