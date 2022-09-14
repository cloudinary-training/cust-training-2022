# Customer Education Training 2022

Every month we focus on a different theme.

## January: Optimization

Look at optimizing images and video.

## February: Access Control and Security

How to secure your asset and deliver assets when they are restricted.

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

- Node scripts for this module are located in the  `/optimization`, `access-control` directories
- Assets are located in `/assets` directory
- Run code from root directory 

### Credentials

1. Create a free account on Cloudinary at [https://www.cloudinary.com/signup]

2. Navigate to the Dashboard. Copy the `CLOUDINARY_URL` into your clipboard.

![Dashboard](./assets/env_variable.png)

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
You should see your cloud name and API key reported.  Keep your API_SECRET a secret!

### Run Code: Run code in optimization directory
Example: run image upload script in optimization directory

```bash
node optimization/images/upload.js
```



# Credits 

## assets/images  


doctor.jpg [Photo by Gustavo Fring:](https://www.pexels.com/photo/crop-doctor-in-medical-uniform-with-stethoscope-standing-in-clinic-corridor-4173251/)

dolphin.jpg [Photo by Daniel Torobekov from Pexels](https://www.pexels.com/photo/lonely-dolphin-in-blue-water-4886378/)

goldfish.jpg [Pixabay](https://pixabay.com/photos/goldfish-carp-fish-1900832/)  

hat.mp4 Video by [Polina Tankilevitch from Pexels](https://www.pexels.com/video/woman-fitting-clothes-in-front-of-a-mirror-5585950/)
 
killer-whale.jpg  [Photo by Andre Estevez from Pexels](https://www.pexels.com/photo/grayscale-photo-of-body-of-water-3309865/)  

lionfish.jpg Image by [Rudy and Peter Skitterians from Pixabay](https://pixabay.com/users/skitterphoto-324082)

koi.jpg  [Photo by Nika Akin from Pexels](https://pixabay.com/photos/koi-fish-minimal-minimalistic-in-4543131/)

shark.jpg  [Photo by Vova Krasilnikov from Pexels](https://www.pexels.com/photo/big-shark-underwater-2747248/)

turtle.jpg [Photo by Richard Segal from Pexels](https://www.pexels.com/photo/black-and-white-turtle-1618606/)

ski-team.gif [Pixabay US Ski Team](https://media.giphy.com/media/CC3HbQ6poN4XVLqzqT/giphy.gif)  
 
vase.jpg [Photo by Beyza Efe from Pexels](https://www.pexels.com/photo/clay-vase-with-bunch-of-wheat-8549835/)  
 
Photo by Athena: https://www.pexels.com/photo/woman-wearing-pink-overcoat-and-black-inner-top-2043590/  

Photo by Radomir Jordanovic: https://www.pexels.com/photo/three-women-smiling-1644888/    

Photo by Natalie: https://www.pexels.com/photo/photo-of-woman-meditating-3759657/ 

Photo by Faik  Akmd: https://www.pexels.com/photo/photo-of-night-sky-1025469/  

Photo by Shane Aldendorff: https://www.pexels.com/photo/white-hi-top-sneaker-1302321/
  
Photo by Ron Lach : https://www.pexels.com/photo/woman-in-black-swimwear-relaxing-in-a-jacuzzi-8844601/  

Photo by Vijay Putra: https://www.pexels.com/photo/grayscale-photo-of-person-holding-a-gun-64699/
