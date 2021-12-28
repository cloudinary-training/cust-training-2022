// crop using the c_, crop option
// use gravity, g_ to spotlight a portion of the image
// https://cloudinary.com/documentation/resizing_and_cropping


// crop	    Extracts a region of the specified dimensions from the original image without first resizing it.
// fill	    Resizes the image to fill the specified dimensions without distortion. The image may be cropped as a result.
// XXXXXX - not supported for video lfill	Same as fill, but only scales down the image.
// XXXXXX - fill_pad	Same as fill, but avoids excessive cropping by adding padding when needed. Supported only with automatic cropping.
// XXXXXX - not supported for video thumb	Creates a thumbnail of the image with the specified dimensions, based on a specified gravity. Scaling may occur.

// gravity: 'face' not supported in video - use gravity: 'auto'

require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({ secure: "true" });

// video looks like it came from mobile - how to change aspect ratio
// gravity face not supported for video
// gravity only supported for fill and fill pad with video

console.log("----- crop gravity center by default");
console.log(
  cloudinary.url("hat", {
    crop: "crop",
    width: 400,
    height: 400,
    format: "mp4",
    resource_type: "video",
  })
);

console.log("----- fill change AR change aspect ratio");
console.log(
  cloudinary.url("hat", {
    crop: "fill",
    width: 400,
    width: 400,
    aspect_ratio: "1:1",
    format: "mp4",
    resource_type: "video",
  })
);
console.log("----- fill change aspect ratio with gravity");
console.log(
  cloudinary.url("hat", {
    crop: "fill",
    gravity: "auto",
    width: 400,
    width: 400,
    aspect_ratio: "1:1",
    format: "mp4",
    resource_type: "video",
  })
);

// fill pad must include gravity - below is not supported
console.log("----- fill pad no gravity");
console.log(
  cloudinary.url("hat", {
    crop: "fill_pad",
    width: 200,
    height: 400,
    aspect_ratio: "1:2",
    background: "gold",
    format: "mp4",
    resource_type: "video",
  })
);
// is fill pad supported?
console.log("----- fill pad no gravity");
console.log(
  cloudinary.url("hat", {
    resource_type: "video",
    format: "mp4",
    transformation: [
      {
        crop: "fill_pad",
        background: "gold",
        width: 200,
        height: 400,
        aspect_ratio: "1:2",
      },{
        gravity: "auto"
      }
    ],
  })
);
