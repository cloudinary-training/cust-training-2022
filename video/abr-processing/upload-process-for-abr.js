require('dotenv').config()
const cloudinary = require('cloudinary').v2

// create dash/vp9 (chrome/ff/edge), hls/h265(apple), hls/h264 (universal) custom profiles
// skiing video ~36MB/13 seconds
const upOptions = {
    public_id: 'diving',
    resource_type: "video",
    type: "upload",
    eager: [
        {
            streaming_profile: "full_hd_wifi",
            format: "m3u8",
        },
        {
            streaming_profile: "full_hd_wifi_h265",
            format: "m3u8",
        },
        {
            streaming_profile: "full_hd_wifi_vp9",
            format: "mpd",
        }
    ],
    eager_async: true,
    eager_notification_url:
        "https://webhook.site/8b604e48-bccd-4c40-84db-b2ab216a2d90",
    overwrite: true,
    invalidate: true
}
cloudinary.uploader
    .upload('./assets/diving.mp4', upOptions)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })