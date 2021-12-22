require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({ secure: "true" });

// .url(publicID, options)
// must supply resource_type
console.log(cloudinary.url("hat", { resource_type: "video", format: "mp4" }));
