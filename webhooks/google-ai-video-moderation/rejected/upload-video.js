require('dotenv').config()
const cloudinary = require('cloudinary').v2

// Enable Google AI Video Moderation Add-on

// webhook will look like this https://my-cld-webhooks.netlify.app/.netlify/functions/webhook_process_google_moderation_queues
// upload to root

cloudinary.uploader
  .upload('./assets/hot-tub.mp4', {
    resource_type: 'video',
    public_id: 'hot-tub',
    overwrite:true,
    invalidate: true,
    access_control: [{ access_type: 'token' }],
    moderation: 'google_video_moderation:possible',
    notification_url:'https://webhook.site/1a0678f1-afc3-4077-8666-e232a5fe8c2d'
  })
  .then(result => {
    console.log(result)
    console.log(result.moderation.repsonse)
  })
  .catch(error => console.log(error))
