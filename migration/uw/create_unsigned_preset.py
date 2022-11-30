from dotenv import load_dotenv
load_dotenv()

#import cloudinary after load dotnev
import cloudinary
from cloudinary.api import create_upload_preset

# add large/small tag based on width of image discovered during upload
cloudinary.api.create_upload_preset( name = "migration-unsigned-preset",
    unsigned = True, 
    use_filename=True,
    gravity='custom',
    crop='crop',
    notification_url = 'https://webhook.site/5e86fa7e-25f5-44ac-8952-5d4bdf37c4d6',
    folder="migration-uw",
    eval = "if (resource_info.width >= 1280) { upload_options['tags']='large'} else {upload_options['tags'] = 'small'}",
    allowed_formats = "jpg,png,jpeg")
