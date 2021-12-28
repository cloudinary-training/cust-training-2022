require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({ secure: "true" });

console.log(
  cloudinary.image("doctor", {
    alt: "Doctor",
    transformation: [
      {
        crop: "thumb",
        gravity: "face",
        width: 400,
        height: 400,
      },
      { quality: "auto" },
      { fetch_format: "auto" },
    ],
  })
);
console.log(
  cloudinary.image("doctor", {
    alt: "Doctor",
    format: "avif",
    transformation: {
      crop: "thumb",
      gravity: "face",
      width: 400,
      height: 400,
    },
  })
);
