require('dotenv').config()
const cloudinary = require('cloudinary').v2

// Enable Google AI Video Moderation Add-on

// webhook will look like this https://my-cld-webhooks.netlify.app/.netlify/functions/webhook_process_google_moderation_queues
// upload to root

cloudinary.uploader
  .upload('./assets/hot-tub.mp4', {
    resource_type: 'video',
    public_id: 'hot-tub',
    access_control: [{ access_type: 'token' }],
    moderation: 'google_video_moderation:possible',
    notification_url:'<WEBHOOK>'
  })
  .then(result => {
    console.log(result)
    console.log(result.moderation.repsonse)
  })
  .catch(error => console.log(error))
