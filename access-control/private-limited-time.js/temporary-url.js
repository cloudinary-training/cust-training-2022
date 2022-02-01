require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const moment = require('moment');

const expireTimeInSeconds = moment().add(60, 'seconds').unix();
console.log('expires at (UTC) seconds:', expireTimeInSeconds);
console.log('expires at (UTC):', moment().add(60, 'seconds').toISOString());

// as link
// expires in 1 minute
console.log('expires in 60 seconds');
console.log(
  'link',
  cloudinary.utils.private_download_url('security/lionfish', 'jpg', {
    expires_at: expireTimeInSeconds,
  })
);

// as attachment
console.log(
  'attachment',
  cloudinary.utils.private_download_url('security/lionfish', 'jpg', {
    expires_at: expireTimeInSeconds,
    attachment: true,
  })
);
