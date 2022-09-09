require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// use the background removal with the yoga image
// to make the model stand out

console.log(
  cloudinary.url('yoga', {
    transformation: [
      {
        effect: 'grayscale',
      },
      {
        effect: 'tint:50:pink',
      },
      {
        overlay: 'yoga-no-bg',
        format: 'png',
      },
    ],
  })
);

console.log(
  cloudinary.url('space', {
    transformation: [
      { width: 600, crop: 'fill' },
      {
        overlay: 'yoga-no-bg',
        format: 'png',
        aspect_ratio: '1:1',
        width: '400',
        crop: 'fill',
      },
    ],
  })
);

// on the fly background removal
