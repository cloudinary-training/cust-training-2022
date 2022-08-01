from dotenv import load_dotenv
load_dotenv()

from cloudinary.utils import cloudinary_url
import cloudinary
import cloudinary.uploader
import cloudinary.api


config = cloudinary.config(secure=True)

print("**** Set up and configure the SDK:****\nCredentials: ", config.cloud_name, config.api_key, "\n")

# def uploadImage():

#   # Upload image and get URL
#   # ==============================

#   # Upload image
#   # Set the asset's public ID and allow overwriting the asset with new versions
#   cloudinary.uploader.upload("https://res.cloudinary.com/jen-brissman/image/upload/v1659110959/butterfly.jpg", public_id="butterfly", unique_filename = False, overwrite=True)

#   # Build the URL for the image and save it in the variable 'srcURL'
#   srcURL = cloudinary.CloudinaryImage("baby_on_horse").build_url()

#   # Log the image URL to the console. 
#   # Copy this URL in a browser tab to generate the image on the fly.
#   print("**** Upload an image****\nDelivery URL: ", srcURL, "\n")

def createTransformations():
    
    transformation1 = url, options = cloudinary_url(
        'lorikeet',
        width=500,
        crop="fill",
        gravity="auto",
        effect="sharpen:50",
        fetch_format="auto",
        quality="auto"
    )
    print("**** Transformation 1 --> Transform the to fill 400, round corners, apply the sepia effect, auto format and quality****\nTransformation URL: " + url)

    transformation2 = url, options = cloudinary_url(
        'lorikeet',
        width=500,
        crop="fill",
        radius="max",
        effect="replace_color:green",
        gravity="auto",
        fetch_format="auto",
        quality="auto"
    )
    print("**** Transformation 2 --> Transform the to 500x500, round corners, apply green color, auto format and quality****\nTransformation URL: " + url)

    transformation3 = url, options = cloudinary_url(
        'lorikeet',
        width=500,
        crop="fill",
        gravity="auto",
        radius="max",
        effect="saturation:40",
        fetch_format="auto",
        quality="auto"
    )
    print("**** Transformation 3 --> Transform the to crop into face, width 500, round corners, apply the cartoonify effect at 30%, auto format and quality****\nTransformation URL: " + url)
    

def main():
  createTransformations()
main();