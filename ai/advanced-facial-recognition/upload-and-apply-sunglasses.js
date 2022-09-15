require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader
  .upload('./assets/sunglasses.png', {
    public_id: 'ai/sunglasses',
  })
  .then((uploadResult) => {
    console.log(JSON.stringify(uploadResult, null, 2));
    console.log(
      cloudinary.url('ai/arya-stark', {
        overlay: 'ai:sunglasses',
        width: 1.7,
        flags: 'region_relative',
        gravity: 'adv_eyes',
      })
    );
  })
  .catch((error) => console.error(error));
