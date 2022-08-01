from dotenv import load_dotenv
load_dotenv()

import json
import cloudinary.api
import cloudinary.uploader
import cloudinary


config = cloudinary.config(secure=False)

#creating named transformation
cloudinary.api.create_transformation('example_NT', dict(
    transformation=[{'crop': 'scale', 'width': 200, 'gravity': 'face'}]))

#applying named transformation to a file
print(cloudinary.url("", { transformation: ["example_NT"] }))

#deleting named transformation
# cloudinary.api.delete_transformation('example_NT')
