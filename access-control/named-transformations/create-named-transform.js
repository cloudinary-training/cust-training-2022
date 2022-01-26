require('dotenv').config()
const cloudinary = require('cloudinary').v2

cloudinary.api
  .create_transformation('auto-400-xform1', {
    width: 400,
    height: 400,
    crop: 'limit'
  })
  .then(result => console.log(result))
  .catch(error => console.log(error))
