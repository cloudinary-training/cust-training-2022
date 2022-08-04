from dotenv import load_dotenv
load_dotenv()

from cloudinary.utils import cloudinary_url
import cloudinary
import cloudinary.uploader
import cloudinary.api


config = cloudinary.config(secure=True)

print("**** Set up and configure the SDK:****\nCredentials: ",
      config.cloud_name, config.api_key, "\n")

def uploadImage():

  # Upload image and get URL
  # ==============================

  # Upload image
  # Set the asset's public ID and allow overwriting the asset with new versions
  cloudinary.uploader.upload("https://res.cloudinary.com/jen-brissman/image/upload/v1659110959/butterfly.jpg", public_id="butterfly", overwrite=True)

  # Build the URL for the image and save it in the variable 'srcURL'
  srcURL = cloudinary.CloudinaryImage("baby_on_horse").build_url()

  # Log the image URL to the console.
  # Copy this URL in a browser tab to generate the image on the fly.
  print("**** Upload an image****\nDelivery URL: ", srcURL, "\n")


def createTransformations():

# Perform RESIZE transformation
    transformation1 = url, options = cloudinary_url(
        'cld-sample',
        width=300,
        crop="fit",
    )
# print the transformation URL
    print("****Transform to scale down, maintaining original aspect ratio****\nTransformation URL --> " + url)

# Perform CROP transformation
    transformation2 = url, options = cloudinary_url(
        'cld-sample',
        width="400",
        crop="thumb",
        gravity="face",
    )
# print the transformation URL
    print("****Transform the to a thumb crop and a width of 500, focusing on the face****\nTransformation URL --> " + url)

# OPTIMIZATION of an image
    transform_image = url, options = cloudinary_url(
        'chameleon',
        fetch_format="auto",
        quality="auto"
    )
# print the transformation URL
    print("****Transform to apply auto format and quality****\nTransformation URL --> " + url)

# OPTIMIZATION of a video
    transform_video = url, options = cloudinary_url(
        'closeupchameleon.mp4',
        resource_type="video",
        fetch_format="auto",
        quality="auto"
    )
# print the transformation URL
    print("****Optimization of a video - Transform to apply auto format and quality****\nTransformation URL --> " + url)


# Perform AESTHETICS/EFFECTS transformations
    transformation5 = url, options = cloudinary_url(
        'cld-sample',
        width=500,
        height=500,
        crop="thumb",
        gravity="face",
        radius="max",
        effect="saturation:80",
        fetch_format="auto",
        quality="auto"
    )
# print the transformation URL
    print("****Transform thumb crop, gravity to find face, width and height 500, round corners, and increasing saturation at 40****\nTransformation URL --> " + url)

# Perform image OVERLAY transformation on an image
    transformation6 = url, options = cloudinary_url("gal", transformation=[
        {'crop': 'fill', 'width': 500},
        {'fetch_format': 'auto'},
        {'quality': 'auto'},
        {'overlay': 'cld-training-logo'},
        {'opacity': 50},
        {'width': 100},
        {'flags': "layer_apply", 'gravity': "north_east", 'y': 10, 'x': 10}
    ])
# print the transformation URL
    print("****Transform to add a Cloudinary logo overlay to the north east corner of an image****\nTransformation URL --> " + url)

# Perform text OVERLAY transformation on a video 
    transformation7 = url, options = cloudinary_url("closeupchameleon", transformation=[
        {'resource_type':'video'},
        {'crop': 'fill', 'width': 500},
        {'fetch_format': 'auto'},
        {'quality': 'auto'},
        {'overlay': {'font_family': "Arial", 'font_size': 80, 'text': "Chameleon!"}},
        # {'opacity': 50},
        # {'width': 100},
        # {'flags': "layer_apply", 'gravity': "north_east", 'y': 10, 'x': 10}
        {'flags': "layer_apply"}
    ])
# print the transformation URL
    print("****Transform to add a text overlay Chameleon! to the north east corner of a video****\nTransformation URL --> " + url)

#     transformation8 = CloudinaryVideo("ski_jump").video(transformation=[
#     {'flags': "splice", 'overlay': "video:ski_jump"},
#     {'effect': "reverse"},
#     {'flags': "layer_apply"},
#     {'flags': "splice", 'overlay': "video:ski_jump"},
#     {'effect': "accelerate:-50"},
#     {'flags': "layer_apply"},
#     {'width': 400, 'crop': "scale"},
#     {'radius': "max"}
#     ])



def main():
    createTransformations()


main()
