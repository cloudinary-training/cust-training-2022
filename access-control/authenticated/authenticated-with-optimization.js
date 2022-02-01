require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// authenticated type: no access to original unless URL is signed
// sign_url signs the image and transformations
// secure: true make the URL HTTPS
// add f_auto, q_auto

const url = cloudinary.url('security/seahorse', {
  type: 'authenticated',
  secure: true,
  sign_url: true,
  transformation: [
    { width: 300, height: 300, crop: 'limit' },
    { fetch_format: 'auto', quality: 'auto' },
  ],
});
console.log(url);
