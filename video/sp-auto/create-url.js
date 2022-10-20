require('dotenv').config()
const cloudinary = require('cloudinary').v2
//https://res.cloudinary.com/cloudinary-training/video/upload/sp_auto/video/fall.m3u8
console.log(cloudinary.url("video/fall",{format: "m3u8", streaming_profile: "auto", resource_type: "video"}))