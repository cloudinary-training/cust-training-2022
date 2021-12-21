require('dotenv').config()
const cloudinary = require('cloudinary').v2
cloudinary.config({'secure':'true'})

// .ur(publicID, options)
console.log(cloudinary.url("doctor",{format:"jpg"}))