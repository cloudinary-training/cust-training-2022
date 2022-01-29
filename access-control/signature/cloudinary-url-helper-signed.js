// docs: https://cloudinary.com/documentation/upload_images#update_already_uploaded_images
// test public_id is seahorse which is authenticated

require('dotenv').config()
const cloudinary = require('cloudinary').v2
cloudinary.config()

// seahorse requires signing for original or transformation (authenticated)
console.log('authenticated ORIGINAL:\n',cloudinary.url('seahorse.jpg', {
  secure: true,
  type: 'authenticated',
  sign_url: true
}))
console.log('authenticated with transformation:\n',cloudinary.url('seahorse', {
  secure: true,
  type: 'authenticated',
  secure: true,
  width: 400,
  height: 400,
  crop: 'limit',
  sign_url: true
}))


// goldfish requires signing for original
console.log('private: ORIGINAL:\n',cloudinary.url('goldfish.jpg', {
  secure: true,
  type: 'private',
  sign_url: true
}))

// goldfish does not require signing transformation (private)
console.log('private:\n',cloudinary.url('goldfish', {
  secure: true,
  type: 'private',
  width: 400,
  height: 400,
  crop: 'limit'
}))

