require('dotenv').config();
const cloudinary = require('cloudinary').v2;

const existingPublicID = 'moderated/dolphin'
const newPublicID = 'ugc/dolphin'

cloudinary.uploader
  .rename(existingPublicID, newPublicID, {
    resource_type: 'image',
    type: 'authenticated',
    to_type: 'upload',
    invalidate: 'true'
  })
  .then((result) => {
    console.log(
      'renamed url:',
      cloudinary.url(result.public_id, {
        format: result.format,
      })
    );
  })
  .catch((error) => console.error(error));
