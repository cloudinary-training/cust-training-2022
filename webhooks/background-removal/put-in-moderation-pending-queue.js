require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// once background removal is complete (check webhook)
// put the image in the "manual" moderation queue
// you need to manually approve in the DAM manual moderation queue
cloudinary.uploader
  .explicit('yellow-shoes1', {
    type: 'authenticated',
    moderation: 'manual',
    notification_url:
      'https://webhook.site/1a0678f1-afc3-4077-8666-e232a5fe8c2d',
  })
  .then((result) => {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch((error) => {
    console.log(error);
  });
