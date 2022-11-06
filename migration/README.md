# Migration

## Data Prep
Create a test file from GitHub cloudinary-training Advanced Concepts assets/images

```bash
gh api \
  -H "Accept: application/vnd.github+json" \
  /repos/cloudinary-training/advanced-concepts/contents/assets/image > images.csv

```

Run a script that looks at the output from GitHub.
- get the path  
- append to the github.io domain and repo to get the URL  
- create context values for migration date and tshirt size of the file  
- use Amazon Rekognition auto tagging to tag what's in the image  

The input file is JSON with an array of data like the object shown below.  If you're starting with a CSV file you can use libraries to turn it in to JSON which is better for not having to deal with escape characters. See https://pypi.org/search/?q=csv+to+json.


```JSON
   {
        "migration_date": "11/03/22",
        "tshirt": "medium",
        "url": "https://cloudinary-training.github.io/advanced-concepts/assets/images/goldfish.jpg"
    },
```

## CLOUDINARY_URL Environemnt Variable

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

## Cloudinary CLI

The Cloudinary CLI is built on top of the Cloudinary SDK. Instruction for setup are available in the [Intro to Cloudinary CLI course repository](https://github.com/cloudinary-training/cld-cli-intro).  The course is available in the [Cloudinary Academy](https://training.cloudinary.com/learn/course/introduction-to-cloudinarys-cli-one-hour-course/lessons/what-is-cloudinary-0747).

The CLI is a tool that you can use for migration.  You could create a script that incorporates calls to the python uploader class from the command line.  There is also a sync option that works kind of like git.  When you sync a local folder to your Cloudinary cloud, any changes locally will be pushed to a folder in Cloudinary.

```zsh
pip3 install cloudinary-cli
# set CLOUDIANRY_URL environment variable with cloud name, api_secret and api_key
# Mac
export CLOUDINARY_URL=cloudinary://123456789012345:abcdefghijklmnopqrstuvwxyzA@cloud_name
# Windows
set CLOUDINARY_URL=cloudinary://123456789012345:abcdefghijklmnopqrstuvwxyzA@cloud_name
# run config to verify credentials
cld config

# command to sync
# cld [cli options] sync [command options] local_folder cloudinary_folder
# run this from root
cld sync --push ./migration/cld-cli/migration-assets cli-migration

# and another file to the ./migration/cld-cli/migration-assets directory and run again
cld sync --push ./migration/cld-cli/migration-assets cli-migration

```
