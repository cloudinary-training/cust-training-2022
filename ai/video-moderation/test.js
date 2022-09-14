require('dotenv').config();
const cloudinary = require('cloudinary').v2;
// upload authenticated moderation
// get a list of approved and move out of moderation and set as public
cloudinary.api
  .resources_by_moderation('google_video_moderation', 'approved', {
    resource_type: 'video',
    type: 'authenticated',
  })
  .then((result) => {
    console.log(result);
    // move any approved videos out of moderation folder, and set as public
    for (const video of result.resources) {
      console.log('found', JSON.stringify(video, null, 2));
      if (video.type === 'authenticated') {
        console.log(
          'getting ready to rename public id:',
          video.public_id,
          video.type
        );
        // once approved move to folder ai and make public
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
