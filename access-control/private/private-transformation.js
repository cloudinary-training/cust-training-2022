require('dotenv').config()
const cloudinary = require('cloudinary').v2

// you don't need to sign a private asset to create a transformation

const url = cloudinary.url('security/goldfish', {
  type: 'private',
  secure: true,
  width: 300,
  height: 300,
  crop: 'limit'
})
console.log(url)

