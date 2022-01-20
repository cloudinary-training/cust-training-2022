# Optimization

In this module we look at optimizing images and video.  We're using the node.js SDK.

## Images
- Goals
- Upload 
- SDK URL helper
- Resize
- Cropping and Gravity
- Quality
- Image formats
- Format
- SDK image tag


## Video

- Goals
- Upload
- Resize
- Cropping and Gravity
- Quality
- Codecs, Containers and Browsers
- Format
- SDK video tag helper

## Environment Setup

### Install Node.js and NPM
You will need to install Node.js on your machine, version 10 or higher.
 Installing Node.js will also install npm, the package manager for Node.js.

#### Mac Users
Using Homebrew:

```bash
brew install node
```

#### Windows
[Download for windows](https://nodejs.org/en/download/)

#### Verify Node/NPM install

```bash
# verify versions
$ node --version
v16.13.0

$ npm --version
8.1.0
```

### Choose an IDE or Use Text Editor

[Visual Studio Code](https://code.visualstudio.com/download)
[WebStorm](https://www.jetbrains.com/webstorm/)
[Sublime](https://www.sublimetext.com/)
[Atom](https://atom.io/)
[iTerm](https://iterm2.com/)

### Download Repository

[cust-training-2022 GitHub Repository](https://github.com/cloudinary-training/cust-training-2022)

- Node scripts for this module are located in the  `/optimization` directory
- Assets are located in `/assets` directory
- Run code from root directory 

### Credentials

1. Create a free account on Cloudinary at [https://www.cloudinary.com/signup]

2. Navigate to the Dashboard. Copy the `CLOUDINARY_URL` into your clipboard.

![Dashboard](../assets/env_variable.png)

- Key: CLOUDINARY_URL
- Value: cloudinary://API_KEY:API_SECRET@CLOUD_NAME


3. Create a `.env` file in the root of the project. Paste the CLOUDINARY_URL environment variable into your `.env` file.

### Run Code: Test Credentials

Npm install Node.js libraries. You will be using the `cloudinary` and the `dotenv` libraries.

```bash
npm i
```

```bash
node testCredentials.js
```
You should your cloud name and API key reported.  Keep your API_SECRET a secret!

### Run Code: Run code in optimization directory
Example: run image upload script

```bash
node optimization/images/upload.js
```
### Video Tutorial
You can find a [video tutorial](https://cloudinary.com/documentation/upload_programmatically_tutorial) in Cloudinary Documentation that covers Node.js setup and upload to your Cloudinary cloud.

## Asset Credits

Photo by Gustavo Fring: https://www.pexels.com/photo/crop-doctor-in-medical-uniform-with-stethoscope-standing-in-clinic-corridor-4173251/

Video by Ron Lach from Pexels:https://www.pexels.com/video/a-woman-trying-on-items-in-a-store-8322396/

Video by RODNAE Productions from Pexels: https://www.pexels.com/video/people-dancing-in-roller-skates-7334909/
