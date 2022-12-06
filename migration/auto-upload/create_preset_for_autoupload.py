from dotenv import load_dotenv
load_dotenv()

from cloudinary.api import create_upload_preset
import cloudinary

# import cloudinary after load dotnev

# add large/small tag based on width of image discovered during upload
cloudinary.api.create_upload_preset(
    name="remote-images",
    use_filename=True,
    unique_filename=False,
    categorization='aws_rek_tagging',
    unsigned=False,
    context="source=github",
    eager_async=True,
    eager=[{"crop": "thumb", "height": "300",
            "width": "300", "gravity": "auto"
            }
           ]

)
