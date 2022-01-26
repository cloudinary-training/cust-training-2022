require('dotenv').config()
const cloudinary = require('cloudinary').v2

// turn on strict transformations

cloudinary.uploader.upload('./assets/killer-whale.jpg', {
  public_id: 'killer-whale',
  type: 'upload'
})
  .then(uploadResult => {
    console.log(uploadResult)
    console.log(uploadResult.secure_url)
    //can you transform?
  })
  .catch(error => console.error(error))
