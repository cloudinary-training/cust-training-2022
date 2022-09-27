require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader
  .upload('./assets/hat.mp4', {
    public_id: 'ai/hat',
    resource_type: 'video',
    categorization: 'google_video_tagging',
    auto_tagging: 0.5,
    overwrite: true,
    invalidate: true,
    notification_url: "https://webhook.site/0057f756-8c9c-41d5-96e6-346f08e9cb59"
  })
  .then((result) => {
    // log google tagging result
    console.log(JSON.stringify(result, null, 2));
  })
  .catch((error) => {
    console.log(error);
  });
