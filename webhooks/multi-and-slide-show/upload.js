require('dotenv').config();
const cloudinary = require('cloudinary').v2;

const uploadWithTag = (image, publicId, tag) => {
  cloudinary.uploader
    .upload(image, {
      public_id: publicId,
      tags: [tag],
      transformation: [
        {
          width: 600,
          height: 400,
          fill: 'crop',

        },
      ],
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

// the tag will bring these assets together
// the public id will determine the order
uploadWithTag('./assets/butterfly.jpg', 'webhooks/butterfly', 'multi-nature');
uploadWithTag(
  './assets/butterflies.jpg',
  'webhooks/butterflies',
  'multi-nature'
);
uploadWithTag('./assets/garden.jpg', 'webhooks/garden', 'multi-nature');
