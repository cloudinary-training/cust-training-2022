require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({ secure: "true" });

// .video(publicID, options)
// must supply resource_type
console.log(
  cloudinary.video("hat", {
    resource_type: "video",
    controls: "true",
    transformation: [
      { crop: "fit", height: "400", width: "400" },
      { quality: "auto" },
      { fetch_format: "auto" },
    ],
  })
);
