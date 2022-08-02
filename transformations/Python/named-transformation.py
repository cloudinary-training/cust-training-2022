from dotenv import load_dotenv
load_dotenv()

import cloudinary.api
import cloudinary.uploader
import cloudinary

config = cloudinary.config(secure=True)

#creating named transformation
cloudinary.api.create_transformation('avatar', dict(
    transformation=[{'crop': 'thumb', 'width': 200, 'height':200, 'gravity': 'face', 'radius': 'max'}]))

#applying named transformation to a file that already has a public ID
# cloudinary.url("gal", {transformation=["avatar"] })

#deleting named transformation
cloudinary.api.delete_transformation('avatar')
