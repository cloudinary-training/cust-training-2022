require('dotenv').config()
const cloudinary = require('cloudinary').v2

// upload an authenticated image
// no access to original or ability to create transformations without a signed URL
// secure: true makes an HTTPS URL

cloudinary.uploader.upload('./assets/seahorse.jpg', {
  public_id: 'security/seahorse',
  type: 'authenticated'
})
  .then(uploadResult => {
    console.log(uploadResult)
    console.log(cloudinary.url(`${uploadResult.public_id}`, { secure: true }))
  })
  .catch(error => console.error(error))
