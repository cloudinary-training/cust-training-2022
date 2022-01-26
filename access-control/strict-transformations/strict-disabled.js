// upload a file after disabling Strict Transformations
// access via secure_url and cloudinary.url - no signing
require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// format included
console.log(
  'OK to supply format? without signature',
  cloudinary.url('turtle', {
    type: 'upload',
    format: 'jpg',
  })
);

// OK to use just public id
console.log(
  'RESOURCE NOT FOUND leave off format without signature',
  cloudinary.url('turtle', { type: 'upload' })
);

// transformation
console.log(
  'RESOURCE NOT FOUND add a transformation without signature',
  cloudinary.url('turtle', {
    type: 'upload',
    transformation: [
      {
        overlay: {
          font_family: 'Arial',
          font_size: 200,
          font_weight: 'bold',
          text: 'THIS IS MY BRANDED PHOTO',
        },
        color: 'yellow',
        gravity: 'south_east',
        y: 50,
      },
    ],
  })
);
