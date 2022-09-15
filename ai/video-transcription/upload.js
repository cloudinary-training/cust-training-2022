require('dotenv').config()
const cloudinary = require('cloudinary').v2

cloudinary.uploader
  .upload('./assets/UnderwritersLaboratoryPsa.mp4', {
    resource_type: 'video',
    public_id: 'ai/ul-video',
    raw_convert: 'google_speech:srt:vtt',
    duration: '16',
    notification_url:
      'https://webhook.site/1d0a41ba-d2e7-4840-afab-84241eb78fc8'
  })
  .then(result => console.log(JSON.stringify(result, null, 2)))
  .catch(error => console.log(error))
