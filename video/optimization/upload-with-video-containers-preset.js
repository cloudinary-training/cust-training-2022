require('dotenv').config()
const cloudinary = require('cloudinary').v2

 
cloudinary.uploader
  .upload('./assets/climbing.mp4',{
    public_id: 'video/video-containers',
    resource_type: 'video',
    upload_preset: 'video-containers'
  })
  .then(uploadResult => console.log(uploadResult))
  .catch(error => console.error(error))
