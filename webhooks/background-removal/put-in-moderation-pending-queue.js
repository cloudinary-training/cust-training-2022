require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// once background removal is complete (check webhook)
// put the image in the "manual" moderation queue
// you need to manually approve in the DAM manual moderation queue
cloudinary.uploader
  .explicit('yellow-shoes-02', {
    type: 'authenticated',
    moderation: 'manual'
  .then((result) => {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch((error) => {
    console.log(error);
  });
