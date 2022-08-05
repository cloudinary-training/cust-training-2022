from dotenv import load_dotenv
load_dotenv()
import json

import cloudinary.api
import cloudinary

# deleting named transformation
resp= cloudinary.api.delete_transformation('avatar')
print(json.dumps(resp, indent=4, sort_keys=True))