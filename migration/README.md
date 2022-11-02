# Migration

Create a test file from GitHub cloudinary-training Advanced Concepts assets/images

```bash
gh api \
  -H "Accept: application/vnd.github+json" \
  /repos/cloudinary-training/advanced-concepts/contents/assets/image > images.csv

```

# CLOUDINARY_URL Environemnt Variable

```bash
pip3 install dotenv
```

Usage:

```Python
from dotenv import load_dotenv
load_dotenv()

#import cloudinary after load dotnev
import cloudinary
# use HTTP for creating URLs
config = cloudinary.config(secure=True)
print(config.cloud_name)
```