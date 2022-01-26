require('dotenv').config()
const cloudinary = require('cloudinary').v2

// upload an authenticated image
// no access to original or ability to create transformations without a signed URL
// secure: true makes an HTTPS URL

cloudinary.uploader.upload('./assets/dolphin.jpg', {
  public_id: 'dolphin',
  type: 'authenticated'
})
  .then(uploadResult => {
    console.log(uploadResult)
    console.log(cloudinary.url(`${uploadResult.public_id}`, { secure: true }))
  })
  .catch(error => console.error(error))
