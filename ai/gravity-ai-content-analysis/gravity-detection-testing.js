require('dotenv').config();
const cloudinary = require('cloudinary').v2;


cloudinary.uploader
  .upload('./assets/fashion-athena.jpg', {
    overwrite: true,
    invalidate: true,
    // auto_tagging: '0.6',  //default 0.5
    // detection: "cld-fashion"
  })
.then((result) => {
    // log google tagging result
    console.log(JSON.stringify(result, null, 2));
    const url = cloudinary.url(result.public_id, {
        secure: true,
        gravity: 'bag',
        crop: 'crop',
        sign_url: true
      })
      console.log(url)
    
    
    // all the tagged objects
    console.log(
        cloudinary.url(result.public_id, {
          crop: 'crop',
          gravity: 'stockings',
        })
      );
    console.log(
        cloudinary.url(result.public_id, {
          crop: 'crop',
          gravity: 'coat',

        })
      )
    
      console.log(
        cloudinary.url(result.public_id, {
            crop: 'crop',
          gravity: 'purse',
        })
      )
    
      console.log(
        cloudinary.url(result.public_id, {
            crop: 'crop',
          gravity: 'shoe',
        })
      )
      console.log(
        cloudinary.url(result.public_id, {
            crop: 'thumb',
          gravity: 'stockings',
        })
      )
  })
  .catch((error) => {
    console.log(error);
  });


