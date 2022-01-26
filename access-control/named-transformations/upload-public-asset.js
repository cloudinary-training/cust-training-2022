require('dotenv').config()
const cloudinary = require('cloudinary').v2

cloudinary.uploader.upload('./assets/shark.jpg', {
  public_id: 'shark',
  type: 'upload'
})
  .then(uploadResult => {
    console.log(uploadResult)
    const url = uploadResult.secure_url
  })
  .catch(error => console.error(error))
