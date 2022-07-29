from dotenv import load_dotenv
load_dotenv()

import cloudinary
import cloudinary.uploader
import cloudinary.api
import json

config = cloudinary.config(secure=False)

print("****1. Set up and configure the SDK:****\nCredentials: ", config.cloud_name, config.api_key, "\n")

def uploadImage():

  # Upload image and get URL
  # ==============================

  # Upload image
  # Set the asset's public ID and allow overwriting the asset with new versions
  cloudinary.uploader.upload("https://res.cloudinary.com/jen-brissman/image/upload/v1659110959/baby%20on%20horse.jpg", public_id="baby_on_horse", unique_filename = False, overwrite=True)


  # Build the URL for the image and save it in the variable 'srcURL'
  srcURL = cloudinary.CloudinaryImage("quickstart_butterfly").build_url()

  # Log the image URL to the console. 
  # Copy this URL in a browser tab to generate the image on the fly.
  print("****2. Upload an image****\nDelivery URL: ", srcURL, "\n")

def createTransformations():

  # Transform the images
  # ==============================

  # Create an image tag with transformations applied to the src URL.
    transformation1 = cloudinary.CloudinaryImage("baby_on_horse").image(radius="max", effect="sepia"),
    transformation2 = cloudinary.CloudinaryImage("baby_on_horse").image(effect="sepia")
    transformation3 = cloudinary.CloudinaryImage("baby_on_horse").image(transformation=[
    {'gravity': "face", 'height': 500, 'width': 500, 'crop': "crop"},
    {'radius': "max"},
    {'width': 300, 'crop': "scale"}
    ])

    transformation4 = cloudinary.CloudinaryImage("baby_on_horse").image(transformation=[
    {'gravity': "face", 'height': 500, 'width': 500, 'crop': "crop"},
    {'radius': "max"},
    {'width': 300, 'crop': "scale"},
    {'effect' : "replace_color:green"}
    ])

    transformation5 = cloudinary.CloudinaryImage("baby_on_horse").image(transformation=[
    {'gravity': "face", 'height': 500, 'width': 500, 'crop': "crop"},
    {'radius': "max"},
    {'width': 300, 'crop': "scale"},
    {'effect': "cartoonify"}
    ])

  # Log the image tag to the console
    print("****3. Transform the image to sepia with rounded corners****\nTransfrmation URL: ", transformation1, "\n"),
    print("****3. Transform the image to sepia****\nTransfrmation URL: ", transformation2, "\n")
    print("****3. Transform to find the baby's face and round corners****\nTransfrmation URL: ", transformation3, "\n")
    print("****3. Transform to make baby's face green + previous transformation****\nTransfrmation URL: ", transformation4, "\n")
    print("****3. Transform to cartoonify + previous transformation****\nTransfrmation URL: ", transformation5, "\n")

def main():
  uploadImage()
  createTransformations()
main();