from dotenv import load_dotenv
load_dotenv()

import cloudinary.api
import cloudinary.uploader
import cloudinary

config = cloudinary.config(secure=True)

#creating named transformation
cloudinary.api.create_transformation('avatar', dict(
    transformation=[{'crop': 'thumb', 'width': 200, 'height':200, 'gravity': 'face', 'radius': 'max'}]))

#applying named transformation to a file
# print(cloudinary.url("", { transformation: ["example_NT"] }))

#deleting named transformation
# cloudinary.api.delete_transformation('example_NT')
