require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader
.upload('./assets/vase.jpg', {
  public_id: 'vase',
  type: 'private',
  overwrite: true,
  invalidate: true,
  eager: [
    {
        overlay: 'logo',
        width: 200,
        x: 30,
        y: 30,
        gravity: 'south_east',
        opacity: 200
      },
  ],
  eager_async: true,
  eager_notification_url:
    "https://webhook.site/1a0678f1-afc3-4077-8666-e232a5fe8c2d",
})
.then((result) => {
  console.log(result);
})
.catch((error) => {
  console.log(error);
});