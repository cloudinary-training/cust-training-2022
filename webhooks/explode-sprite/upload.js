require('dotenv').config();
const cloudinary = require('cloudinary').v2;


cloudinary.uploader
    .upload('https://media.giphy.com/media/3o6Mb5vZliC9MGIYiQ/giphy.gif', {
      public_id:'skiing',
      folder: 'explode'
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });

