require('dotenv').config()
const cloudinary = require('cloudinary').v2

// using add on Google AI Video Moderation
// Google cloud video intelligence

// webhook will look like this https://my-cld-webhook.netlify.app/.netlify/functions/webhook_process_google_moderation_queues

cloudinary.uploader
  .upload('https://res.cloudinary.com/cloudinary-training/video/upload/v1588613988/elephants.mp4', {
    resource_type: 'video',
    public_id: 'elephants1',
    access_control: [{ access_type: 'token' }],
    moderation: 'google_video_moderation:possible',
    notification_url:'<WEBHOOK>'
  })
  .then(result => {
    console.log(result)
    console.log(result.moderation.response)
  })
  .catch(error => console.log(error))
