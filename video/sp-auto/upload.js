require('dotenv').config()
const cloudinary = require('cloudinary').v2

// 52 MB, 19 seconds
const upOptions = {
    public_id: 'video/fall',
    resource_type: "video",
    type: "upload",
    overwrite: true,
    invalidate: true
}
cloudinary.uploader
    .upload('./assets/fall.mp4', upOptions)
    .then(result => {
        console.log(cloudinary.url(result.public_id,{format: "m3u8", streaming_profile: "auto", resource_type: "video"}))
    })
    .catch(error => {
        console.log(error)
    })