require('dotenv').config();
const cloudinary = require('cloudinary').v2;


// date 'uploaded_at<1d` will return everything uploaded before 1 day ago
// look for all assets older than 1 year and paginate if needed
cloudinary.search
  .expression('resource_type:image AND (uploaded_at<365d)')
  .sort_by('uploaded_at','asc')
  .max_results(10)
  .execute()
  .then((result) => {
    console.log("next_cursor: ",result.next_cursor);
    console.log(result.resources.length);
    console.log(result.resources.map(({public_id,uploaded_at})=>([public_id,uploaded_at].join(','))).join('\n'));
  })
  .catch((error) => {
    console.log(error);
  });