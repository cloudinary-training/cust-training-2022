require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader
  .upload('./assets/butterfly.mp4', {
    public_id: 'ai/butterfly',
    resource_type: 'video',
    categorization: 'google_video_tagging',
    auto_tagging: 0.3,
    notification_url: "https://webhook.site/1d0a41ba-d2e7-4840-afab-84241eb78fc8"
  })
  .then((result) => {
    // log google tagging result
    console.log(JSON.stringify(result, null, 2));
  })
  .catch((error) => {
    console.log(error);
  });
