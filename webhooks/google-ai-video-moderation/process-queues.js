require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// get all the approved videos in the Google moderation Q
async function getQueue(status) {
  try {
    const queue = await cloudinary.api.resources_by_moderation(
      'google_video_moderation',
      status,
      {
        resource_type: 'video',
      }
    );
    // return the promise
    return queue;
  } catch (error) {
    console.log('get approved Q error', JSON.stringify(error, null, 2));
    return { resources: [] };
  }
}

// make video accessible using access_control with access_type anon
async function makeVideoAccessible(video) {
  try {
    const updateResponse = await cloudinary.api.update(video.public_id, {
      resource_type: 'video',
      access_control: [{ access_type: 'anonymous' }],
      invalidate: true,
    });
    console.log('update response', JSON.stringify(updateResponse, null, 2));
    return updateResponse;
  } catch (error) {
    console.log('make accessible error', JSON.stringify(error, null, 2));
    return { video_accessible_error: JSON.stringify(error, null, 2) };
  }
}

const processApprovedQ = async () => {
  try {
    const approvedQ = await getQueue('approved');
    console.log('approved: ', approvedQ);
    for (let i = 0; i < approvedQ.resources.length; i++) {
      let video = approvedQ.resources[i];
      let updateResponse = await makeVideoAccessible(video);
      console.log('made accessible', JSON.stringify(updateResponse, null, 2));
    }
  } catch (error) {
    console.error('error', JSON.stringify(error, 0, 2));
  }
};

const processRejectedQ = async () => {
  try {
    const rejectedQ = await getQueue('rejected');
    console.log('rejected: ' + rejectedQ);
    for (let i = 0; i < rejectedQ.resources.length; i++) {
      let video = rejectedQ.resources[i];
      const destroyResponse = cloudinary.uploader.destroy(video.public_id, {
        invalidate: true,
        resource_type: 'video',
      });
      return destroyResponse;
    }
  } catch (error) {
    console.error('error', JSON.stringify(error, 0, 2));
  }
};

processApprovedQ();
processRejectedQ();
