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

  // BG Removal Response
  // {
  //   "info_kind": "cloudinary_ai",
  //   "info_status": "complete",
  //   "asset_id": "74211b649fff84c7568beff390ce2492",
  //   "public_id": "yellow-shoes",
  //   "uploaded_at": "2022-02-23T21:40:03Z",
  //   "version": 1645652403,
  //   "url": "http://res.cloudinary.com/ac-self-service/image/authenticated/s--z5agKeX5--/v1645652403/yellow-shoes.jpg",
  //   "secure_url": "https://res.cloudinary.com/ac-self-service/image/authenticated/s--z5agKeX5--/v1645652403/yellow-shoes.jpg",
  //   "etag": "c843737ef8d94a1c109e5e128855a9c7",
  //   "notification_type": "info",
  //   "info_data": {
  //     "cloudinary_ai_hints": [],
  //     "cloudinary_ai_fine_edges": false,
  //     "confidence_score": 0.9510779767345015
  //   }
  // }

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
