require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// upload original for underlay
cloudinary.uploader
  .upload('./assets/yoga.jpg', {
    public_id: 'yoga',
    overwrite: true,
    invalidate: true,
  })
  .then((result) => {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch((error) => {
    console.log(error);
  });

// upload for background removal
// include notification url because async

cloudinary.uploader
  .upload('./assets/yoga.jpg', {
    public_id: 'yoga-no-bg',
    background_removal: 'cloudinary_ai',
    overwrite: true,
    invalidate: true,
    notification_url: "https://webhook.site/de25ea32-0a68-47b8-ad2a-2a31e2db0f63"
  })
  .then((result) => {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch((error) => {
    console.log(error);
  });
