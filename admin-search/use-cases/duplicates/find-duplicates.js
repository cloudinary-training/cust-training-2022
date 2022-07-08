require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader
  .explicit('eagle', { type: 'upload', moderation: 'duplicate:0' })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
