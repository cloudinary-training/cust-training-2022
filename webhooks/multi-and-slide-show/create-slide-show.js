require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// replace the notification_url with your own webhook.site URL

const manifest = {
    w: 500,
    h: 500,
    du: 12,
    fps: 20,
    vars: {
      transition: "s:circlecrop",
      sdur: 3000,
      tdur: 1000,
      slides: [
        {
          media: "i:webhooks:garden",
        },
        {
          media: "i:webhooks:butterfly",
        },
        {
          media: "i:webhooks:butterflies",
        },
       
        
      ],
    },
  };

cloudinary.uploader
  .create_slideshow({
    public_id:"slide-show",
    notification_url: 'https://webhook.site/1a0678f1-afc3-4077-8666-e232a5fe8c2d',
    manifest_json: JSON.stringify(manifest)
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
