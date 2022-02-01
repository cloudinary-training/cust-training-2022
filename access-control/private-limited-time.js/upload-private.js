require('dotenv').config()
const cloudinary = require('cloudinary').v2
const moment = require('moment')


// use upload API to upload a private asset
// you cannot access the private asset without a signed URL
// but you can apply transformations to it

cloudinary.uploader.upload('./assets/lionfish.jpg', {
  public_id: 'security/lionfish',
  type: 'private'
})
  .then(uploadResult => {
    console.log(uploadResult)
  })
  .catch(error => console.error(error))


