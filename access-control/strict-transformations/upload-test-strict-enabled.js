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
  })
  .then((uploadResult) => {
    console.log(uploadResult);
    // Consider cases:
    // signed in upload response
    console.log('OK to show use response URLs', uploadResult.secure_url);

    // format included
    console.log(
      'OK to supply format? without signature',
      cloudinary.url(`${uploadResult.public_id}`, {
        type: 'upload',
        format: `${uploadResult.format}`,
      })
    );

    // NOT OK to use just public id
    console.log(
      'RESOURCE NOT FOUND leave off format without signature',
      cloudinary.url(`${uploadResult.public_id}`, { type: 'upload' })
    );

    // NOT OK to apply transformation
    console.log(
      'RESOURCE NOT FOUND add a transformation without signature',
      cloudinary.url(`${uploadResult.public_id}`, {
        type: 'upload',
        transformation: [
          {
            overlay: {
              font_family: 'Arial',
              font_size: 200,
              font_weight: 'bold',
              text: 'MY WATERMARK',
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
