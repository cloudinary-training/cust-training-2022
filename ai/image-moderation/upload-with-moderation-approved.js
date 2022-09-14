require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// using default moderation .5 for all moderation categories
cloudinary.uploader
  .upload('./assets/hot-tub.jpg', {
    public_id: 'ai/hot-tub-default',
    moderation: 'aws_rek',
    notification_url:
      'https://webhook.site/1d0a41ba-d2e7-4840-afab-84241eb78fc8',
  })
  .then((result) => console.log(result))
  .catch((error) => {
    console.log(error);
  });
