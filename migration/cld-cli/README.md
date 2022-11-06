# Migration using the Cloudinary CLI




## Cloudinary CLI

The Cloudinary CLI is built on top of the Cloudinary SDK. Instruction for setup are available in the [Intro to Cloudinary CLI course repository](https://github.com/cloudinary-training/cld-cli-intro).  The course is available in the [Cloudinary Academy](https://training.cloudinary.com/learn/course/introduction-to-cloudinarys-cli-one-hour-course/lessons/what-is-cloudinary-0747).

### CLI sync option
The CLI is a tool that you can use for migration.  You could create a script that incorporates calls to the python uploader class from the command line.  There is also a sync option that works kind of like git.  When you *sync* a local folder to your Cloudinary cloud, any changes locally will be pushed to a folder in Cloudinary.


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

### CLI Upload-dir Option

Upload a directory and maintain folder structure.  If the folder you upload to doesn't exist it will be created. You can use presets and on-the-fly transformations to files you upload.  You can also specify concurrent worker threads


```zsh
# set up credentials as above

# cld [cli options] upload_dir [command options] [local_folder]


```