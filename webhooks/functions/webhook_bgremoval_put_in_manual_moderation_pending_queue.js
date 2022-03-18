require('dotenv').config();
const cloudinary = require('cloudinary').v2;

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

  // get data from POST
  const data = JSON.parse(event.body);

  try {
    // put the image in manual moderation 'pending' queue
    // you could look at the confidence score and throwout if less than a threshold
    // in this code, put everything in to 'pending' 
    const response = await cloudinary.uploader
    .explicit(data.public_id, {
      type: 'authenticated',
      moderation: 'manual',
      notification_url:
        'https://webhook.site/1a0678f1-afc3-4077-8666-e232a5fe8c2d',
    })

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
