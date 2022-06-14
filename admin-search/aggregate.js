require('dotenv').config();
const cloudinary = require('cloudinary').v2;
console.log(cloudinary.config().cloud_name);

// cloudinary.search.execute({aggregate:'image',}).then(result=>console.log(result));

// cloudinary.search
//   //   .aggregate('resource_type')
//   .expression('uploaded_at>30d')
//   .aggregate('format')
//   .max_results(5)
//   .execute()
//   .then((result) => console.log(result));

cloudinary.search
  .expression('uploaded_at>30d AND resource_type:video')
  .aggregate('format')
  .max_results(5)
  .execute()
  .then((result) => console.log(result));
