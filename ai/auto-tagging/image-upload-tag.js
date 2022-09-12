require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// upload original with google tagging
// set a high threshold
cloudinary.uploader
  .upload('./assets/garden.jpg', {
    public_id: 'ai/garden-with-tag',
    resource_type: 'image',
    categorization: 'google_tagging',
    auto_tagging: 0.8,
    overwrite: true,
    invalidate: true
  })
  .then((result) => {
    // log google tagging result
    console.log(JSON.stringify(result, null, 2));
  })
  .catch((error) => {
    console.log(error);
  });
