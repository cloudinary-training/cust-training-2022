// docs: https://cloudinary.com/documentation/upload_images#update_already_uploaded_images
// test public_id is dolphin which is authenticated

require('dotenv').config()
const cloudinary = require('cloudinary').v2
cloudinary.config()

// dolphin requires signing for original or transformation (authenticated)
console.log('authenticated original:',cloudinary.url('dolphin', {
  type: 'authenticated',
  secure: true,
  sign_url: true
}))
console.log('authenticated with transformation:',cloudinary.url('dolphin', {
  type: 'authenticated',
  secure: true,
  width: 400,
  height: 400,
  crop: 'limit',
  sign_url: true
}))


// goldfish requires signing for original
console.log('private:',cloudinary.url('goldfish', {
  type: 'private',
  sign_url: true
}))

// goldfish does not require signing transformation (private)
console.log('private:',cloudinary.url('goldfish', {
  type: 'private',
  secure: true,
  width: 400,
  height: 400,
  crop: 'limit'
}))

