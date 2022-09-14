require('dotenv').config()
const cloudinary = require('cloudinary').v2
// use upload API to upload an authenticated asset
cloudinary.uploader
  .upload('./assets/elephants.mp4', {
    public_id: 'elephants',
    resource_type: 'video',
    type: 'authenticated',
    moderation: 'google_video_moderation:possible',
    notification_url:
      'https://webhook.site/1d0a41ba-d2e7-4840-afab-84241eb78fc8',
    invalidate: true
  })
  .then(uploadResult => {
    console.log(uploadResult)
  })
  .catch(error => console.error(error))
