require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({ secure: "true" });

console.log("----f_auto with video");
console.log(
  cloudinary.url("hat", {
    resource_type: "video",
    transformation: [{ crop: "scale", width: 400 }, { fetchFormat: "auto" }],
  })
);
