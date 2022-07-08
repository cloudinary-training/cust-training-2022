require("dotenv").config();
const cloudinary = require("cloudinary").v2;

// upload with phash
cloudinary.uploader
  .upload("https://res.cloudinary.com/cloudinary-training/image/upload/e_grayscale/eagle.jpg", {
    public_id: "eagle-grayscale",
    type: "upload",
    resource_type: "image",
    phash: true
  })
  .then((result) => {
    console.log(result)
    console.log(result.secure_url);
  })
  .catch((error) => {
    console.log(error);
  });
