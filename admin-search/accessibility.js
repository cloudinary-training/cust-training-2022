require('dotenv').config();
const cloudinary = require('cloudinary').v2;
console.log(cloudinary.config().cloud_name);

// cloudinary.search.execute({aggregate:'image',}).then(result=>console.log(result));

cloudinary.search
  //   .aggregate('resource_type')
  .expression('accessibility_analysis.colorblind_accessibility_score<0.8')
  .with_field('accessibility_analysis')
  .max_results(5)
  .execute()
  .then((result) => console.log(result));
