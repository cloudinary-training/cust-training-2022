// add your CLOUDINARY_URL to a .env file
// read .env into process.env
require('dotenv').config()

// load Cloudinary node.js library
const cloudinary = require('cloudinary').v2

// execute Cloudinary config to break out credentials from CLOUDINARY_URL
const credentials = cloudinary.config({'secure':'true'})
console.log(credentials.cloud_name)
console.log(credentials.api_key)

// Keep your secret private
// console.log(credentials.api_secret)
