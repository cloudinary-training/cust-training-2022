require('dotenv').config();
const cloudinary = require('cloudinary').v2;


// replace the notification_url with your own webhook.site URL

const getURLs = (publicId) => {
  const urls = [];
  for (let i = 0; i <= 23; i +=5) {
    urls.push(cloudinary.url('explode/skiing', { page: `${i}` }));
  }
  return urls;
};

const urls = getURLs('explode/kitten_fighting');

cloudinary.uploader
  .generate_sprite({
    urls: urls,
    notification_url:
      'https://webhook.site/1a0678f1-afc3-4077-8666-e232a5fe8c2d',
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });


