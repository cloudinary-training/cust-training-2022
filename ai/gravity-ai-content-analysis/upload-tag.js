require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// upload an image and specify the cld-fashion model for content analysis
cloudinary.uploader
  .upload('./assets/fashion-athena.jpg', {
    public_id: 'fashion-athena',
    detection: 'cld-fashion',
    auto_tagging: '0.6',  //default 0.5
    overwrite: true,
    invalidate: true,
  })
  .then((result) => {
    console.log(JSON.stringify(result,null,2));
  })
  .catch((error) => {
    console.log(error);
  });
