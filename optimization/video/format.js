require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({ secure: "true" });

console.log("----");
console.log(
  cloudinary.url("hat", {
    crop: "scale",
    width: 400,
    fetchFormat: "auto",
    resource_type: "video",
  })
);