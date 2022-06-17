require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// locate add-ons and select a free plan to try them out
// choose 1 or all 3 - there is also google_video_tagging add-on
// optionally, use a percent confidence level

const uploadWithAutoTagging = async (filepath, publicId) => {
  try {
    const result = await cloudinary.uploader.upload(filepath, {
      public_id: publicId,
      overwrite: true,
      invalidate: true,
      categorization: 'google_tagging,imagga_tagging,aws_rek_tagging',
      auto_tagging: .7,
    });
    console.log(JSON.stringify(result,null,2));
  } catch {
    (error) => console.log(error);
  }
};

uploadWithAutoTagging('./assets/cat-and-dog.jpg', 'cat-and-dog');
