require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// get a list of approved and move to ai directory
// and make public by setting type to 'upload'
cloudinary.api
  .resources_by_moderation('google_video_moderation', 'approved', {
    resource_type: 'video'
  })
  .then((result) => {
    console.log(result);
    for (const video of result.resources) {
      if (video.type === 'authenticated') {
        cloudinary.uploader
        .rename(video.public_id, `ai/${video.public_id}`, {
          resource_type: 'video',
          type: 'authenticated',
          to_type: 'upload',
          invalidate: true,
          overwrite: true
        })
          .then((result) => {
            console.log(
              'new version url:',
              cloudinary.url(result.public_id, {
                resource_type: 'video',
                format: result.format,
              })
            );
          })
          .catch((error) => console.error(error));
      }
    }
  });
