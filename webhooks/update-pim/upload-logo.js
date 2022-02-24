require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader
.upload('https://res.cloudinary.com/cloudinary-training/image/upload/v1633711027/logo-big.png', {
  public_id: 'logo'
})
.then((result) => {
  console.log(result);
})
.catch((error) => {
  console.log(error);
});