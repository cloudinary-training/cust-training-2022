require('dotenv').config();
const cloudinary = require('cloudinary').v2;

console.log(
  cloudinary.video('ai/ul-video', {
    transformation: [
      { width: 500 },
      {
        overlay: {
          resource_type: 'subtitles',
          public_id: 'ai/ul-video.transcript',
        },
      },
      { flags: 'layer_apply' },
    ],
  })
);

console.log(
  cloudinary.video('ai/ul-video', {
    transformation: [
      { width: 500 },
      {
        background: '#331a00',
        color: 'gold',
        overlay: {
          font_family: 'impact',
          font_size: 15,
          resource_type: 'subtitles',
          public_id: 'ai/ul-video.transcript',
        },
      },
      { flags: 'layer_apply', gravity: 'north_west' },
    ],
  })
);
