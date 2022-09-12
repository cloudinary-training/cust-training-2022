require('dotenv').config();
const cloudinary = require('cloudinary').v2;


// update with aws tagging at a lower threshold
// default threshold is .7
cloudinary.api
.update('ai/garden-with-tag', {
    resource_type: 'image',
    categorization: 'aws_rek_tagging',
    auto_tagging: 0.4,
  })
  .then((result) => {
    // log google tagging result
    console.log(JSON.stringify(result, null, 2));
  })
  .catch((error) => {
    console.log(error);
  });
