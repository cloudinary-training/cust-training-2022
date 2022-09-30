require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// example of crop with default gravity
// this image original size is about 3000 x 6000
console.log(
  cloudinary.url('fashion-athena', { crop: 'crop', width: 400, height: 400 })
);

// gravity auto
console.log(
  cloudinary.url('fashion-athena', {
    crop: 'crop',
    gravity: 'auto',
    width: 400,
    height: 400,
  })
);
// with and without gravity face
console.log(
  cloudinary.url('models', {
    crop: 'thumb',
    gravity: 'face',
    width: 400,
    height: 400,
  })
);
console.log(
  cloudinary.url('models', {
    crop: 'thumb',
    width: 400,
    height: 400,
  })
);

// cropping video with and without g_auto

console.log(
  cloudinary.url('dog-frisbee-video.mp4', {
    resource_type: 'video',
    transformation: [
      { crop: 'fill', width: 400, height: 400 },
      { fetch_format: 'auto' },
      { quality: 'auto' },
    ],
  })
);

console.log(
  cloudinary.url('dog-frisbee-video.mp4', {
    resource_type: 'video',
    transformation: [
      { crop: 'fill', width: 400, height: 400, gravity: 'auto' },
      { fetch_format: 'auto' },
      { quality: 'auto' },
    ],
  })
);

// example of crop with compass gravity
console.log(
  cloudinary.url('fashion-athena', {
    crop: 'crop',
    width: 1500,
    height: 3000,
    gravity: 'north_west',
  })
);
console.log(
  cloudinary.url('fashion-athena', {
    crop: 'crop',
    width: 1500,
    height: 3000,
    gravity: 'north_east',
  })
);
console.log(
  cloudinary.url('fashion-athena', {
    crop: 'crop',
    width: 1500,
    height: 3000,
    gravity: 'south_west',
  })
);
console.log(
  cloudinary.url('fashion-athena', {
    crop: 'crop',
    width: 1500,
    height: 3000,
    gravity: 'south_east',
  })
);

// crop the bag with g_auto, you must supply at least one sizing parameter
// to use g_auto
console.log(
  cloudinary.url('fashion-athena', {
    crop: 'crop',
    width: 400,
    gravity: 'auto:bag',
    sign_url: true,
  })
);

console.log(
  cloudinary.url('fashion-athena', {
    crop: 'crop',
    gravity: 'bag',
    sign_url: true,
  })
);

// crop all but the bag
console.log(
    cloudinary.url('fashion-athena', {
      crop: 'thumb',
      width: 400,
      height: 400,
      gravity: 'auto:bag_avoid',
      sign_url: true,
    })
  );


// all the tagged objects
console.log(
    cloudinary.url('fashion-athena', {
      crop: 'crop',
      gravity: 'stockings',
      sign_url: true,
    })
  );
console.log(
    cloudinary.url('fashion-athena', {
      crop: 'fill',
      width: 400,
      height: 400,
      gravity: 'coat',
      sign_url: true,
    })
  )

  console.log(
    cloudinary.url('fashion-athena', {
        crop: 'fill',
        width: 400,
        height: 400,
      gravity: 'dress',
      sign_url: true,
    })
  )

  console.log(
    cloudinary.url('fashion-athena', {
        crop: 'thumb',
        width: 400,
        height: 400,
      gravity: 'footwear',
      sign_url: true,
    })
  )
  console.log(
    cloudinary.url('fashion-athena', {
        crop: 'thumb',
        width: 400,
        height: 400,
      gravity: 'stockings',
      sign_url: true,
    })
  )