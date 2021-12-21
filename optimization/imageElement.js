require('dotenv').config()
const cloudinary = require('cloudinary').v2
cloudinary.config({ secure: 'true' })

console.log(cloudinary.image('doctor', { crop: 'thumb', gravity: 'face', fetch_format:'auto',width: 400, height: 400}))
console.log(cloudinary.image('doctor', { crop: 'thumb', gravity: 'face', format:'avif',width: 400, height: 400}))