require('dotenv').config()
const cloudinary = require('cloudinary').v2

// authenticated type: no access to original unless URL is signed
// type: 'authenticated' because that is how we uploaded it
// sign_url signs the image and transformations
// secure: true make the URL HTTPS

const url = cloudinary.url('dolphin', {
  type: 'authenticated',
  secure: true,
  width: 300,
  height: 300,
  crop: 'limit',
  sign_url: true
})
console.log(url)

