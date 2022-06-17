require('dotenv').config();
const cloudinary = require('cloudinary').v2;


// date 'uploaded_at<1d` will return everything uploaded before 1 day ago
cloudinary.search
  .expression('status=deleted')
  .sort_by('public_id','asc')
  .max_results(10)
  .execute()
  .then((result) => {
    // console.log(JSON.stringify(result.resources, null, 2));
    console.log("next_cursor: ",result.next_cursor);
    console.log(result.resources.length);
    console.log(JSON.stringify(result.resources.map(({public_id,uploaded_at,bytes})=>(`${public_id},${uploaded_at},${bytes}`)), null, '\t'));
  })
  .catch((error) => {
    console.log(error);
  });