require('dotenv').config()
const cloudinary = require('cloudinary').v2

// create dash/vp9 (chrome/ff), hls/h265(apple), hls/h264 (universal) custom profiles
const upOptions = {
  resource_type: 'video',
  eager: [
    { streaming_profile: 'hd_vp9', format: 'mpd' },
    { streaming_profile: 'hd_h265', format: 'm3u8' },
    { streaming_profile: 'hd', format: 'm3u8' }
  ],
  eager_async: true,
  eager_notification_url:
    'https://webhook.site/1a0678f1-afc3-4077-8666-e232a5fe8c2d',
  public_id: 'product-gallery/sports-car',
  overwrite: true,
  invalidate: true
}
cloudinary.uploader
  .upload('https://res.cloudinary.com/cloudinary-training/video/upload/v1651850335/product-gallery/sports-car.mp4', upOptions)
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  })
