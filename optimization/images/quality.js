require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({ secure: "true" });

// with resizing
console.log("----resizing/gravity/quality");
console.log(
  cloudinary.url("doctor", { crop: "scale", width: 400, format: "jpg" })
);

console.log(
  cloudinary.url("doctor", {
    crop: "scale",
    width: 400,
    quality: "40",
    format: "jpg",
  })
);
console.log(
  cloudinary.url("doctor", {
    crop: "scale",
    width: 400,
    quality: "auto",
    format: "jpg",
  })
);

// with cropping/gravity
console.log("----cropping/gravity/quality -/+");
console.log(
  cloudinary.url("doctor", {
    crop: "thumb",
    gravity: "face",
    width: 400,
    height: 400,
    format: "jpg",
  })
);
console.log(
  cloudinary.url("doctor", {
    crop: "thumb",
    gravity: "face",
    width: 400,
    height: 400,
    quality: "auto",
    format: "jpg",
  })
);
