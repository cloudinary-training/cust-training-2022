require('dotenv').config();
const cloudinary = require('cloudinary').v2;

console.log(
  cloudinary.url('ai/arya-stark', {
    overlay: 'ai:sunglasses',
    width: 1.7,
    flags: 'region_relative',
    gravity: 'adv_eyes',
  })
);
