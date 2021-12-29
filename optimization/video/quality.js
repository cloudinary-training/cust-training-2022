require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({ secure: "true" });

// resize example: fit
console.log("-----fit without quality");
console.log(
  cloudinary.url("hat", {
    crop: "fit",
    width: 400,
    height: 400,
    format: "mp4",
    resource_type: "video",
  })
);

console.log("-----fit with quality");
console.log(
  cloudinary.url("hat", {
    resource_type: "video",
    format: "mp4",
    transformation: [
      {
        crop: "fit",
        width: 400,
        height: 400,
      },
      { quality: "auto" },
    ],
  })
);

// crop example: fill with gravity
console.log("----cropping with fill/gravity");
console.log(
  cloudinary.url("hat", {
    crop: "fill",
    gravity: "auto",
    aspect_ratio: "1:1",
    width: 400,
    height: 400,
    format: "mp4",
    resource_type: "video",
  })
);
console.log("----cropping with fill/gravity/quality");
console.log(
  cloudinary.url("hat", {
    resource_type: "video",
    format: "mp4",
    transformation: [
      {
        crop: "fill",
        gravity: "auto",
        aspect_ratio: "1:1",
        width: 400,
        height: 400,
      },
      { quality: "auto" }
    ]
  })
);
