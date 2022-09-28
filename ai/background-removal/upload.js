require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// upload original for underlay
cloudinary.uploader
  .upload('./assets/yoga.jpg', {
    public_id: 'yoga',
    overwrite: true,
    invalidate: true,
  })
  .then((result) => {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch((error) => {
    console.log(error);
  });


  cloudinary.uploader
  .upload('./assets/space.jpg', {
    public_id: 'space',
    overwrite: true,
    invalidate: true,
  })
  .then((result) => {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch((error) => {
    console.log(error);
  });


// upload for background removal
// include notification url because async

cloudinary.uploader
  .upload('./assets/yoga.jpg', {
    public_id: 'yoga-no-bg',
    background_removal: 'cloudinary_ai',
    overwrite: true,
    invalidate: true,
    notification_url: "https://webhook.site/de25ea32-0a68-47b8-ad2a-2a31e2db0f63"
  })
  .then((result) => {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch((error) => {
    console.log(error);
  });


  cloudinary.uploader
  .upload('https://res-s.cloudinary.com/demo/image/upload/b_rgb:FFFFFF,c_fill,dpr_1.0,f_auto,g_auto,h_1199,q_auto,w_900/c_fill,h_1199,w_900/v1/Product%20gallery%20demo/New%20Demo%20Pages/Shoes/cldnry_fashion_pdp_runner_sneakers2', {
    public_id: 'sports-shoe',
    background_removal: 'cloudinary_ai',
    overwrite: true,
    invalidate: true,
    notification_url: "https://webhook.site/de25ea32-0a68-47b8-ad2a-2a31e2db0f63"
  })
  .then((result) => {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch((error) => {
    console.log(error);
  });
