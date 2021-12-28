// resize using the c_, crop option
// https://cloudinary.com/documentation/resizing_and_cropping
// scale	Resizes the image to the specified dimensions without necessarily retaining the original aspect ratio.
// fit	    Resizes the image to fit inside the bounding box specified by the dimensions, maintaining the aspect ratio.
// limit	Same as fit, but only scales down the image.
// mfit	    Same as fit, but only scales up the image.
// pad	    Resizes the image to fit inside the bounding box specified by the dimensions, maintaining the aspect ratio, and applies padding if the resized image does not fill the whole area.
// lpad	    Same as pad, but only scales down the image.
// XXX - not for video mpad     Same as pad, but only scales up the image.

require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({ secure: "true" });

//we can use all of the same resizing transformations as we did with images except mpad

//adjusting a single dimension maintains aspect ratio
console.log("-----scale single dimension and keep aspect ratio");
console.log(
  cloudinary.url("hat", {
    crop: "scale",
    width: 400,
    format: "mp4",
    resource_type: "video",
  })
);

//skew
console.log("-----skew");
console.log(
  cloudinary.url("hat", {
    crop: "scale",
    width: 400,
    height: 400,
    format: "mp4",
    resource_type: "video",
  })
);
// correct skew with fit 
console.log("-----correct skew with fit");
console.log(
  cloudinary.url("hat", {
    crop: "fit",
    width: 400,
    height: 400,
    format: "mp4",
    resource_type: "video",
  })
);


// change the aspect ratio with pad with a color
console.log("-----");
console.log(
  cloudinary.url("hat", {
    crop: "pad",
    width: 400,
    height: 400,
    background: "gold",
    format: "mp4",
    resource_type: "video",
  })
);


