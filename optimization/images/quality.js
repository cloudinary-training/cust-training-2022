require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({ secure: "true" });

// with resizing
console.log("----resizing/gravity/quality");
console.log(
  cloudinary.url("doctor", { crop: "scale", width: 400, format: "jpg" })
);


// chain quality (q_) because it is a different action
console.log(
  cloudinary.url("doctor", {
    transformation: [
      { crop: "scale", width: 400, format: "jpg" },
      { quality: "40" }
    ],
  })
);
console.log(
  cloudinary.url("doctor", {
    transformation: [
      {
        crop: "scale",
        width: 400,
        format: "jpg",
      },
      { quality: "auto" },
    ],
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
// add quality
console.log(
  cloudinary.url("doctor", {
    transformation: [
      {
        crop: "thumb",
        gravity: "face",
        width: 400,
        height: 400,
        format: "jpg",
      },
      { quality: "auto" },
    ],
  })
);
