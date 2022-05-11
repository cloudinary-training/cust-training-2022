require('dotenv').config()
const cloudinary = require('cloudinary').v2

// Enable Google AI Video Moderation Add-on


// webhook will look like this https://my-cld-webhooks.netlify.app/.netlify/functions/webhook_process_google_moderation_queues

cloudinary.uploader
  .upload('https://res.cloudinary.com/cloudinary-training/video/upload/v1588613988/elephants.mp4', {
    resource_type: 'video',
    public_id: 'elephants',
    overwrite: true,
    invalidate: true,
    access_control: [{ access_type: 'token' }],
    moderation: 'google_video_moderation:possible',
    notification_url:'https://webhook.site/1a0678f1-afc3-4077-8666-e232a5fe8c2d'
  })
  .then(result => {
    console.log(result)
    console.log(result.moderation.response)
  })
  .catch(error => console.log(error))
