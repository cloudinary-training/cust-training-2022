require('dotenv').config()
const cloudinary = require('cloudinary').v2


// upload video

// image is the default resource type, to upload video we need to specify resource type video

cloudinary.uploader.upload('./assets/hat.mp4', {
    public_id: 'hat',
    type: 'upload',
    overwrite: true,
    invalidate: true,
    resource_type: 'video',
    tag: 'cust-training-2022'
  })
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      console.log(error)
    })
  