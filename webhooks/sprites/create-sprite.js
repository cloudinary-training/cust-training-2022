require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// replace the notification_url with your own webhook.site URL


// image and css
cloudinary.uploader
  .generate_sprite('iconduck', {
    notification_url:
      'https://webhook.site/1a0678f1-afc3-4077-8666-e232a5fe8c2d',
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
