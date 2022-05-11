require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// use the Upload API rename action change name and delivery type
const makePublic = async (publicId) => {
  // when the image is approved, put it in a folder named 'bg-removed'
  // and make it public
  let approvedPublicId = `bg-removed/${publicId}`;
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

// exit if not a post
exports.handler = async function (event, context) {
  if (!event.body || event.httpMethod !== 'POST') {
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({
        status: 'invalid-method',
      }),
    };
  }

  try {
    // get the approved images
    const response = await cloudinary.api.resources_by_moderation(
      'manual',
      'approved',
      {
        resource_type: 'image',
      }
    );

    // iterate through and make them accessible in a directory named `bg-removed`
    for (let i = 0; i < response.resources.length; i++) {
      const result = await makePublic(response.resources[i].public_id);
    }

    return {
      statusCode: response[0].statusCode,
      body: JSON.stringify({ message: response[0] }),
    };
  } catch (error) {
    return {
      statusCode: error.code,
      body: error.response.body.errors[0].message,
    };
  }
};
