from dotenv import load_dotenv
load_dotenv()

import cloudinary.api
import cloudinary.uploader
import cloudinary
from cloudinary.utils import cloudinary_url


config = cloudinary.config(secure=True)

print("**** Set up and configure the SDK:****\nCredentials: ",
      config.cloud_name, config.api_key, "\n")

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

#RESIZE
    transformation3 = url, options = cloudinary_url(
        'lorikeet',
        width=300,
        crop="fit",
        # fetch_format="auto",
        # quality="auto"
    )
    print("**** Transformation 3: Resize - Transform to scale down, maintaining original aspect ratio****\nTransformation URL --> " + url)

#CROP
    transformation2 = url, options = cloudinary_url(
        'lorikeet',
        width="500",
        crop="thumb",
        gravity="face",
        # fetch_format="auto",
        # quality="auto"
    )
    print("**** Transformation 2: Crop - Transform the to a thumb crop and a width of 500, focusing on the face****\nTransformation URL --> " + url)

#OPTIMIZATION of an image
    transformation1_image = url, options = cloudinary_url(
        'lorikeet',
        fetch_format="auto",
        quality="auto"
    )

    print("**** Transformation 1: Optimization of an image - Transform to apply auto format and quality****\nTransformation URL --> " + url)

#OPTIMIZATION of a Video
    transformation1_video = url, options = cloudinary_url(
        'coffee.mp4',
        resource_type="video",
        fetch_format="auto",
        quality="auto"
    )
    print("**** Transformation 1: Optimization of a video - Transform to apply auto format and quality****\nTransformation URL --> " + url)


#AESTHETICS
    transformation4 = url, options = cloudinary_url(
        'gal',
        width=500,
        height=500,
        crop="thumb",
        gravity="face",
        radius="max",
        effect="saturation:80",
        fetch_format="auto",
        quality="auto"
    )
    print("**** Transformation 4: Aesthetics - Transform the to thumb crop into face, width and height 500 to make a perfect square, with rounded corners, and add the effect of increasing saturation at 40****\nTransformation URL --> " + url)

#OVERLAY
    transformation5 = url, options = cloudinary_url("gal", transformation=[
        {'crop':'fill', 'width':500},
        {'fetch_format':'auto'},
        {'quality':'auto'},
        {'overlay':'samples:logo'},
        {'opacity': 50},
        {'width':100},
        {'flags': "layer_apply", 'gravity': "north_east", 'y': 10, 'x':10}
        ])
    print("**** Transformation 5: Overlay - Transform to add an logo overlay to the north east corner of an image****\nTransformation URL --> " + url)

# url = cloudinary.url(transformation= [
#     (width= 100, height: 100, crop: 'fill'),
#     # { overlay: '', width: 100, height: 100, x: 100, crop: 'fill' },
#     (effect= 'shadow')
#   ]
# })

# print(url)


def main():
    createTransformations()
main()
