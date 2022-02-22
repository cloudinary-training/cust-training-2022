require('dotenv').config();
const cloudinary = require('cloudinary').v2;

const upload = (file) => {
  console.log(file);
  cloudinary.uploader
    .upload(file, {
      use_filename: true,
      unique_filename: false,
      folder: 'icons',
      tags: 'iconduck',
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

['./assets/home.svg', './assets/email.svg', './assets/github.svg'].forEach(
  (image) => {
    upload(image);
  }
);
