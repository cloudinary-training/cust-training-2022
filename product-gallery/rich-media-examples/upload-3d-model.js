require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader
  .upload('./assets/CLdLogo3D.glb', {
    public_id: 'cld-logo-3d',
    resource_type: 'image',
  })
  .then((result) => {
    console.log(result.secure_url);
  })
  .catch((error) => {
    console.log(error);
  });
