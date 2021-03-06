require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// supply the tag shared by images to be animated
// replace the notification_url with your own webhook.site URL

cloudinary.uploader
  .multi('multi-nature',
    { delay: 1000 , format: 'gif', notification_url: 'https://webhook.site/1a0678f1-afc3-4077-8666-e232a5fe8c2d'}
  )
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
