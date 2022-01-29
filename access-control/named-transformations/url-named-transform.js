require('dotenv').config();
const cloudinary = require('cloudinary').v2;

const url = cloudinary.url('shark.jpg', {
  secure: true,
  transformation: ['auto-400-xform'],
});
console.log(url);
