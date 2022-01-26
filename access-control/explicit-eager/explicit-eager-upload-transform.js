require('dotenv').config()
const cloudinary = require('cloudinary').v2

// Strict transformations enabled
// explicit method using eager parameter to create a transformation
// running default synchronous explicit eager
// explicity allow us to act on already uploaded images
// in this case we'll create an eager transformation - this will make the transformation 
// available as a derived asset
cloudinary.uploader.explicit('killer-whale',
  {
    type: 'upload',
    eager: [{
      width: 300,
      height: 300,
      crop: 'limit'
    }]
  })
  .then(result => {
    console.log('result', result)
    // look at the transformed url
    console.log('transform url:', result.eager[0].secure_url)
  })
  .catch(error => console.log('error', error))
