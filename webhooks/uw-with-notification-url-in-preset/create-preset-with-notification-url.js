require('dotenv').config()
const cloudinary = require('cloudinary').v2

// create unsigned preset
// instruct Cloudinary to call a webhook with response information
cloudinary.api
  .create_upload_preset({
    name: 'track-with-webhook',
    unsigned: true,
    notification_url: 'https://webhook.site/1a0678f1-afc3-4077-8666-e232a5fe8c2d'
  })
  .then(uploadResult => console.log(uploadResult))
  .catch(error => console.error(error))
