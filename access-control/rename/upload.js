require("dotenv").config();
const cloudinary = require("cloudinary").v2;


cloudinary.uploader
  .upload("./assets/dolphin.jpg", {
    public_id: "moderated/dolphin",
    type: "authenticated",
    resource_type: "image",
  })
  .then((result) => {
    console.log(result.secure_url);
  })
  .catch((error) => {
    console.log(error);
  });
