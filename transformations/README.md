# Transformations

This code was used to prepare for the `Transforming Media with Cloudinary for Developers` training.


In this module we look at transformations of images and video using the React using the JavaScript SDK V2 on the Frontend, and using the Python SDK on the backend. We'll also look at programmatically creating and using named transformations and upload presets. 


## Environment Setup

### Install Node.js and NPM
You will need to install Node.js on your machine, version 10 or higher.
 Installing Node.js will also install npm, the package manager for Node.js.

#### Mac Users
Using Homebrew:

```bash
brew install python3
```

#### Windows
[Download for windows](https://nodejs.org/en/download/)

#### Verify Python/Pip install

```bash
# verify versions
$ python3 --version
Python 3.10.5

$ pip3 --version
pip 22.2
```

### Choose an IDE or Use Text Editor

[Visual Studio Code](https://code.visualstudio.com/download)
[WebStorm](https://www.jetbrains.com/webstorm/)
[Sublime](https://www.sublimetext.com/)
[Atom](https://atom.io/)
[iTerm](https://iterm2.com/)

### Download Repository

[cust-training-2022 GitHub Repository](https://github.com/cloudinary-training/cust-training-2022)

- Node scripts for this module are located in the  `/transformations` directory
- Run code from root directory 

### Credentials

1. Create a free account on Cloudinary at [https://www.cloudinary.com/signup]

2. Navigate to the Dashboard. Copy the `CLOUDINARY_URL` into your clipboard.

![Dashboard](../assets/env_variable.png)

- Key: CLOUDINARY_URL
- Value: cloudinary://API_KEY:API_SECRET@CLOUD_NAME


3. Create a `.env` file in the root of the project. Paste the CLOUDINARY_URL environment variable into your `.env` file.

### Run Code: Test Credentials

pip3 install libraries. You will be using the `cloudinary` and the `python-dotenv` libraries.

```bash
pip3 install cloudinary
```

```bash
pip3 install python-dotenv
```

```bash
python3 transformations/scripts/transformations.py
```
Once you run `transformations.py`, you should your cloud name and API key reported in the format below. Keep your API_SECRET a secret!

```bash
Set up and configure the SDK:
`Credentials:  cloudname key `
```

### Run Code: Run code in transformations directory
Example: run script to upload image and associated transformations

```bash
python3 transformations/scripts/transformations.py
```
### Video Tutorial
You can find a [video tutorial](https://cloudinary.com/documentation/upload_programmatically_tutorial) in Cloudinary Documentation that covers Node.js setup and upload to your Cloudinary cloud.


## Asset Credits

Photo by Mark Broadhurst: https://www.pexels.com/photo/blue-orange-and-green-bird-on-yellow-flower-105808