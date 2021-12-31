require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({ secure: "true" });

console.log("-----without quality and format optimization");
console.log(
  cloudinary.url("hat", {
    format: "mp4",
    resource_type: "video",
  })
);

console.log("-----with quality and format optimization");
console.log(
  cloudinary.url("hat", {
    resource_type: "video",
    format: "mp4",
    transformation: [{ quality: "auto" }, { fetch_format: "auto" }],
  })
);

console.log("-----with resize, quality and format optimization");
console.log(
  cloudinary.url("hat", {
    resource_type: "video",
    format: "mp4",
    transformation: [
      { crop: "fit", height: "400", width: "400" },
      { quality: "auto" },
      { fetch_format: "auto" },
    ],
  })
);
