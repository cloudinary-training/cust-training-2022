require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({ secure: "true" });

// .url(publicID, options)
// must supply resource_type
console.log(
  cloudinary.video("hat", {
    resource_type: "video",
    transformation: [
      { height: 400, width:400, crop:"fit", aspect_ratio: "1:1" },
      { quality: "auto" },
      { fetchFormat: "auto" }
    ]}
  ))
