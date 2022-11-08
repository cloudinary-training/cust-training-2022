
from dotenv import load_dotenv
load_dotenv()

#import cloudinary after load dotnev
import cloudinary
from cloudinary.api import create_upload_preset

# add large/small tag based on width of image discovered during upload
cloudinary.api.create_upload_preset( name = "migration-unsigned-preset",
    unsigned = True, 
    use_filename=True,
    notification_url = 'https://webhook.site/ad0238a9-bf83-4791-b649-98c18fe6e51c',
    folder="migration-uw",
    eval = "if (resource_info.width >= 1280) { upload_options['tags']='large'} else {upload_options['tags'] = 'small'}",
    allowed_formats = "jpg,png,jpeg")
