require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader
  .upload('./assets/arya-stark.jpg', {
    detection: 'adv_face',
    public_id: 'ai/arya-stark',
  })
  .then((uploadResult) => console.log(JSON.stringify(uploadResult, null, 2)))
  .catch((error) => console.error(error));
