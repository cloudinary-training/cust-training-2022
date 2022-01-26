require('dotenv').config()
const cloudinary = require('cloudinary').v2

// use upload API to upload a private asset
// you cannot access the private asset without a signed URL
// but you can apply transformations to it

cloudinary.uploader.upload('./assets/goldfish.jpg', {
  public_id: 'goldfish',
  type: 'private'
})
  .then(uploadResult => {
    console.log(uploadResult)
  })
  .catch(error => console.error(error))


