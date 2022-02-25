require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// use the Upload API rename action change name and delivery type
const makePublic = async (publicId) => {
  // when the image is approved, put it in a folder named 'bg-removed'
  // and make it public
  let approvedPublicId = `bg-removed/${publicId}`;
  console.log(publicId, approvedPublicId)
  try {
    return await cloudinary.uploader.rename(publicId, approvedPublicId, {
      resource_type: 'image',
      type: 'authenticated',
      to_type: 'upload',
      invalidate: 'true',
    });
  } catch {
    (error) => {
      return error;
    };
  }
};

// Process the manual approved queue
// Move approved images to the 'bg-removed' directory and make public
const processManualApprovedQueue = async () => {
  try {
    const response = await cloudinary.api.resources_by_moderation(
      'manual',
      'approved',
      {
        resource_type: 'image',
      }
    );
    for (let i = 0; i < response.resources.length; i++) {
      const result = await makePublic(response.resources[i].public_id);
      console.log('approved processed:',response.resources[i].public_id)
    }
  } catch (error) {
    console.log(error);
  }
};

processManualApprovedQueue();
