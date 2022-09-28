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


console.log(
  cloudinary.url('yoga-no-bg', {
    transformation: [
      { width: 400, height: 400, crop: 'fill', gravity: 'auto' },
      {
        underlay: 'space',
        width: '600',
        crop: 'scale',
      },
    ],
  })
);



// add a shadow to a product

console.log(
  cloudinary.url('sports-shoe', {
    effect: 'shadow',
    x: '15',
    y: '15',
  })
);

// on the fly background removal
console.log(
    cloudinary.url('yoga', {
      transformation: [
        { effect: 'background_removal' },
        {crop: 'scale', width:400},
        { underlay: 'space',width:600, crop:'scale' },
      ],
    })
  );
//   https://res.cloudinary.com/cloudinary-training/image/upload/e_background_removal/c_scale,w_400/u_space,w_600,c_scale/fl_layer_apply/banana

