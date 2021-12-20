require('dotenv').config()
const cloudinary = require('cloudinary').v2

console.log(cloudinary.url("doctor", { secure: true }))