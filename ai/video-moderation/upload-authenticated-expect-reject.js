require('dotenv').config()
const cloudinary = require('cloudinary').v2

// using add on Google AI Video Moderation
// possible is a lower confidence meaning more will be accepted
cloudinary.uploader
  .upload('./assets/hot-tub.mp4', {
    resource_type: 'video',
    public_id: 'hot-tub',
    type: 'authenticated',
    moderation: 'google_video_moderation:possible',
    notification_url:
      'https://webhook.site/1d0a41ba-d2e7-4840-afab-84241eb78fc8'
  })
  .then(result => {
    console.log(result)
    console.log(result.moderation.response)
  })
  .catch(error => console.log(error))
