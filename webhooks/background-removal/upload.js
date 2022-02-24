require('dotenv').config()
const cloudinary = require('cloudinary').v2

// Enable Cloudinary AI Background Removal
// upload to root
// image will need a signed URL to access
// when background removal is complete, a webhook will be called
// image will be moved to 'webhooks' directory
cloudinary.uploader
  .upload('./assets/yellow-shoes.jpg', {
    public_id: 'yellow-shoes1',
    type: 'authenticated',
    background_removal: 'cloudinary_ai',
    notification_url:
      'https://webhook.site/1a0678f1-afc3-4077-8666-e232a5fe8c2d'
  })
  .then(uploadResult => {
    console.log(JSON.stringify(uploadResult, null, 1))
  })
  .catch(error => console.error(error))
