require("dotenv").config();
const cloudinary = require("cloudinary").v2;

// type:upload default if not specified
// it indicates the asset is public
// resource_type the default is image

cloudinary.uploader
  .upload("./assets/banana.jpg", {
    public_id: "banana",
    type: "upload",
    resource_type: "image",
  })
  .then((result) => {
    console.log(result)
    console.log(result.secure_url);
  })
  .catch((error) => {
    console.log(error);
  });
