require('dotenv').config()
const cloudinary = require('cloudinary').v2

// https://replit.com/@rpeltz/eager-abr#index.js
cloudinary.api
  .create_upload_preset({
    name: 'video-streaming',
    type: "upload",
    overwrite: true,
    invalidate: true,
    resource_type: "video",
    eager: [
      { raw_transformation: 'f_webm,vc_vp9,q_auto/mp4' },
      { raw_transformation: 'f_mp4,vc_h265,q_auto/mp4' },
      { raw_transformation: 'f_mp4,vc_h264,q_auto/mp4' }
    ],
    eager_async: true,
    notification_url: 'https://webhook.site/1a0678f1-afc3-4077-8666-e232a5fe8c2d'
  })
  .then(uploadResult => console.log(uploadResult))
  .catch(error => console.error(error))