require("dotenv").config();
const cloudinary = require("cloudinary").v2;

// upload with phash
cloudinary.uploader
  .upload("./assets/eagle.jpg", {
    public_id: "eagle",
    type: "upload",
    resource_type: "image",
    overwrite: true,
    invalidate: true,
    phash: true
  })
  .then((result) => {
    console.log(result)
    console.log(result.secure_url);
  })
  .catch((error) => {
    console.log(error);
  });
