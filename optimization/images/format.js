require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({ secure: "true" });

// focus on resize(fit) and crop (thumb)
// best practice recommendation when working with f_auto: chain it and if you're using q_auto, you can chain them together



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
    transformation: [
      {
        crop: "thumb",
        gravity: "face",
        width: 400,
        height: 400,
      },
      { fetch_format: "auto" },
    ],
  })
);

console.log(
  cloudinary.url("doctor", {
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

// with resizing f_auto +- q_auto
console.log("----resizing/gravity/format/quality");
console.log(
  cloudinary.url("doctor", {
    transformation: [{ crop: "fit", width: 400,height:400, format: "jpg" }],
  })
);
console.log(
  cloudinary.url("doctor", {
    transformation: [{ crop: "fit", width: 400,height:400 }, { fetch_format: "auto" }],
  })
);
console.log(
  cloudinary.url("doctor", {
    transformation: [
      { crop: "fit", width: 400,height:400 },
      { quality: "auto" },
      { fetch_format: "auto" }
    ],
  })
);
