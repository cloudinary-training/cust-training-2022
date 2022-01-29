// upload a file after enabling Strict Transformations
// access via secure_url and cloudinary.url - no signing
require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// use upload API to upload a public asset
// ok to access public asset but you can't put your own watermark on it

cloudinary.uploader
  .upload('./assets/turtle.jpg', {
    public_id: 'turtle',
    type: 'upload',
    overwrite: 'true',
    invalidate: 'true'
  })
  .then((uploadResult) => {
    console.log(uploadResult);
    // Consider cases:
    // signed in upload response
    console.log('OK to show use response URLs\n', uploadResult.secure_url);

    // format included
    console.log(
      'OK to supply format? without signature\n',
      cloudinary.url(`${uploadResult.public_id}`, {
        type: 'upload',
        secure: 'true',
        format: `${uploadResult.format}`,
      })
    );

    // NOT OK to use just public id
    console.log(
      'RESOURCE NOT FOUND leave off format without signature\n',
      cloudinary.url(`${uploadResult.public_id}`, { type: 'upload', secure: 'true', })
    );

    // NOT OK to apply transformation
    console.log(
      'RESOURCE NOT FOUND add a transformation without signature\n',
      cloudinary.url(`${uploadResult.public_id}`, {
        type: 'upload',
        secure: 'true',
        transformation: [
          {
            overlay: {
              font_family: 'Arial',
              font_size: 200,
              font_weight: 'bold',
              text: 'MY SNEAKY%20WATERMARK',
            },
            color: 'yellow',
            gravity: 'south_east',
            y: 50,
          },
        ],
      })
    );
  })
  .catch((error) => console.error(error));
