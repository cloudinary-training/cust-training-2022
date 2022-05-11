require('dotenv').config();
const cloudinary = require('cloudinary').v2;


cloudinary.uploader
    .upload('./assets/ski-team.gif', {
      public_id:'webhooks/ski-team'
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });

