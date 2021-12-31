require("dotenv").config();
const cloudinary = require("cloudinary").v2;

// upload image

cloudinary.uploader
  .upload("./assets/doctor.jpg", {
    public_id: "doctor",
    type: "upload",
    overwrite: true,
    invalidate: true,
    resource_type: "image",
    tags: "cust-training-2022",
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
