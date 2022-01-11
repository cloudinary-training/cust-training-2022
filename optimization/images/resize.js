// resize using the c_, crop option
// https://cloudinary.com/documentation/resizing_and_cropping
// scale	Resizes the image to the specified dimensions without necessarily retaining the original aspect ratio.
// fit	    Resizes the image to fit inside the bounding box specified by the dimensions, maintaining the aspect ratio.
// limit	Same as fit, but only scales down the image.
// mfit	    Same as fit, but only scales up the image.
// pad	    Resizes the image to fit inside the bounding box specified by the dimensions, maintaining the aspect ratio, and applies padding if the resized image does not fill the whole area.
// lpad	    Same as pad, but only scales down the image.
// mpad     Same as pad, but only scales up the image.

require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({ secure: "true" });

console.log("adjusting a single dimension maintains aspect ratio");
console.log(
  cloudinary.url("doctor", { crop: "scale", width: 400, format: "jpg" })
);

console.log("-----skew by scaling with 2 dimensions");
console.log(
  cloudinary.url("doctor", {
    crop: "scale",
    width: 400,
    height: 400,
    format: "jpg",
  })
);
console.log("----- correct skew with fit, limit");

console.log(
  cloudinary.url("doctor", {
    crop: "fit",
    width: 400,
    height: 400,
    format: "jpg",
  })
);

console.log(
  cloudinary.url("doctor", {
    crop: "limit",
    width: 400,
    height: 400,
    format: "jpg",
  })
);

console.log("----- change the aspect ratio using pad ");
console.log(
  cloudinary.url("doctor", {
    crop: "pad",
    width: 600,
    height: 900,
    background: "auto",
    format: "jpg",
  })
);


