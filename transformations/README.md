# Transformations

This code was used to prepare for the `Transforming Media with Cloudinary for Developers` training.


In this module we look at transformations of images and video using the React/JavaScript SDK V2 on the frontend, and using the Python SDK on the backend. We'll also look at programmatically creating and using named transformations and upload presets. 

## Frontend
### JavaScript Code Sample Repository

You can find the code for all of  the JavaScript examples in a separate training repository, [next-transformations](https://github.com/cloudinary-training/next-transformations).  Next.js is a popular framework created by [Vercel](https://vercel.com/) on top of React.  Vercel also hosts code and you can find the executable code [here](https://next-transformations.vercel.app/)

## Backend
### Python Environment Setup

#### Mac Users
[Download Python for Mac](https://www.python.org/downloads/)

Using Homebrew:

```bash
brew install python
```

#### Windows Users
[Download Python for Windows](https://www.python.org/downloads/windows/)

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

- All of the scripts for this module are located in the  `/transformations` directory
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
Run scripts from the root of the repository.  Local assets are referenced relative to the root.

```bash
python3 transformations/Python/validate_config.py
```
Once you run `validate_config.py`, you should your cloud name. Keep your API_SECRET a secret!


### Run Code: Run code in the Python directory
Example: run script to validate your configuration run the following command and you should see your Cloud Name in the terminal.

```bash
python3 transformations/Python/validate_config.py
```

Example: upload all the assets to your cloud that are used in this training.

```bash
python3 transformations/Python/upload_example_assets.py
```

Example: to create a url programatically

```bash
python3 transformations/Python/resize.py
```

### Video Tutorial
You can find a [video tutorial](https://cloudinary.com/documentation/upload_programmatically_tutorial) in Cloudinary Documentation that covers Node.js setup and upload to your Cloudinary cloud. The setup for Python is similar, and Python users can pattern match what is shown in the Upload Programmatically tutorial video for Node.js users.


## Asset Credits

Image by Pixabay on Pexels: https://www.pexels.com/photo/yellow-and-green-coated-lizard-62289/

Video by Pressmaster on Pexels: https://www.pexels.com/video/close-up-footage-of-a-chameleon-right-eye-3191352/