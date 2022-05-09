require('dotenv').config()
const cloudinary = require('cloudinary').v2


cloudinary.api
  .create_upload_preset({
    name: 'video-streaming',
    type: "upload",
    overwrite: true,
    invalidate: true,
    resource_type: "video",
    eager: [
      {
        streaming_profile: 'full_hd_wifi',
        format: 'm3u8'
      },
      {
        streaming_profile: 'full_hd_wifi_h265',
        format: 'm3u8'
      },
      {
        streaming_profile: 'full_hd_wifi_vp9',
        format: 'mpd'
      },
      { raw_transformation: 'f_webm,vc_vp9,q_auto/mp4' },
      { raw_transformation: 'f_mp4,vc_h265,q_auto/mp4' },
      { raw_transformation: 'f_mp4,vc_h264,q_auto/mp4' }
    ],

    eager_async: true,
    eager_notification_url:
    notification_url: 'https://webhook.site/1a0678f1-afc3-4077-8666-e232a5fe8c2d'
  })
  .then(uploadResult => console.log(uploadResult))
  .catch(error => console.error(error))