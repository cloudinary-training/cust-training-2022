require('dotenv').config()
const cloudinary = require('cloudinary').v2

// 52 MB, 19 seconds
const upOptions = {
    public_id: 'video/downhill-skiing',
    resource_type: "video",
    type: "upload",
    overwrite: true,
    invalidate: true
}
cloudinary.uploader
    .upload('./assets/downhill-skiing.mp4', upOptions)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })

// Watermarking - overlay image over video
console.log(cloudinary.url("downhill-skiing.mp4", {resource_type: "video", transformation: [{width: 400, crop: "scale"},
{overlay: "cloudinary_logo", height: "40", gravity: "north_east", x: 10, y: 10}]}));
