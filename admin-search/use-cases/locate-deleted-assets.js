require('dotenv').config();
const cloudinary = require('cloudinary').v2;


// find delete asset - only applies to backed up assets
cloudinary.search
  .expression('status=deleted')
  .sort_by('public_id','asc')
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