require('dotenv').config()
const cloudinary = require('cloudinary').v2


cloudinary.api
  .create_upload_preset({
    name: 'video-containers',
    unsigned: false,
    invalidate: true,
    overwrite: true,
    eager: [
      { raw_transformation: "f_webp,fl_awebp,q_auto" },
      { raw_transformation: "f_avif,q_auto" },
      { raw_transformation: "f_mp4,vc_h265,q_auto" },
      { raw_transformation: "f_webm,vc_vp9,q_auto" },
      { raw_transformation: "f_mp4,vc_h264,q_auto" }
    ],
    eager_async: true,
    eager_notification_url: 'https://webhook.site/0057f756-8c9c-41d5-96e6-346f08e9cb59'
  })
  .then(uploadResult => console.log(uploadResult))
  .catch(error => console.error(error))
