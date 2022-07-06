require('dotenv').config();
const cloudinary = require('cloudinary').v2;


// date 'bytest>50m` will return videos larger than 50 MB
cloudinary.search
  .expression('resource_type:video AND bytes>50m')
  .sort_by('uploaded_at','asc')
  .max_results(10)
  .execute()
  .then((result) => {
    console.log("next_cursor: ",result.next_cursor);
    console.log(result.resources.length);
    console.log(result.resources.map(({public_id,uploaded_at,bytes})=>([bytes,public_id,uploaded_at].join(','))).join('\n'));
  })
  .catch((error) => {
    console.log(error);
  });