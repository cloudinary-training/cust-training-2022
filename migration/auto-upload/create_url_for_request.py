from dotenv import load_dotenv
load_dotenv()

import cloudinary
from cloudinary.utils import cloudinary_url

# create an auto-upload url with transformations
# this will be uploaded when we request the URL
# and a dervided asset should be created because we added a preset with the same name

url, options = cloudinary_url(
    'remote-images/pineapple.jpg'
)
print(url)

# check DAM to see that you've created derived assets due to preset
