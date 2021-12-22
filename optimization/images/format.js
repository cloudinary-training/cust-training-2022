require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({ secure: "true" });

// with resizing +- fetchFormat
console.log("----resizing/gravity/format");
console.log(
  cloudinary.url("doctor", { crop: "scale", width: 400, format: "jpg" })
);
console.log(
  cloudinary.url("doctor", { crop: "scale", width: 400, fetch_format: "auto" })
);

// with cropping/gravity +- fetch_format
console.log("----cropping/gravity/format");
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
    fetch_format: "auto",
  })
);

// with resizing f_auto +- q_auto
console.log("----resizing/gravity/format/quality");
console.log(
  cloudinary.url("doctor", { crop: "scale", width: 400, fetch_format: "auto" })
);
console.log(
  cloudinary.url("doctor", {
    crop: "scale",
    width: 400,
    quality: "auto",
    fetch_format: "auto",
  })
);

// with cropping f_auto +- q_auto
console.log("----cropping/gravity/format/quality");
console.log(
  cloudinary.url("doctor", {
    crop: "thumb",
    gravity: "face",
    width: 400,
    height: 400,
    fetch_format: "auto",
  })
);
console.log(
  cloudinary.url("doctor", {
    crop: "thumb",
    gravity: "face",
    width: 400,
    height: 400,
    quality: "auto",
    fetch_format: "auto",
  })
);

// best practice recommendation when working with f_auto: chain it and if you're using q_auto, you can chain them together
console.log(
  cloudinary.url("doctor", {
    transformation: [
      {
        crop: "thumb",
        gravity: "face",
        width: 400,
        height: 400,
        quality: "auto",
        fetch_format: "auto",
      },
    ],
  })
);
