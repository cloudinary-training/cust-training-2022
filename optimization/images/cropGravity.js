// crop using the c_, crop option
// use gravity, g_ to move attention to a portion of the image
// https://cloudinary.com/documentation/resizing_and_cropping

// crop	    Extracts a region of the specified dimensions from the original image without first resizing it.
// fill	    Resizes the image to fill the specified dimensions without distortion. The image may be cropped as a result.
// lfill	Same as fill, but only scales down the image to prevent upscaling.
// fill_pad	Same as fill, but avoids excessive cropping by adding padding when needed. Supported only with automatic cropping (g_auto).
// thumb	Creates a thumbnail of the image with the specified dimensions, based on a specified gravity. Scaling may occur.

require("dotenv").config();
const cloudinary = require("cloudinary").v2;
// use https
cloudinary.config({ secure: "true" });

console.log("----- crop no gravity");
console.log(
  cloudinary.url("doctor", {
    crop: "crop",
    width: 400,
    height: 400,
    format: "jpg",
  })
);

console.log("----- crop gravity face");
console.log(
  cloudinary.url("doctor", {
    crop: "crop",
    gravity: "face",
    width: 400,
    height: 400,
    format: "jpg",
  })
);

console.log("----- fill no gravity");
console.log(
  cloudinary.url("doctor", {
    crop: "fill",
    width: 400,
    height: 400,
    format: "jpg",
  })
);
console.log("----- fill with gravity auto");
console.log(
    cloudinary.url("doctor", {
      crop: "fill",
      gravity: "auto",
      width: 400,
      height: 400,
      format: "jpg",
    })
  );


  console.log("----- thumb no gravity"); 
  console.log(
    cloudinary.url("doctor", {
      crop: "thumb",
      width: 200,
      height: 200,
      format: "jpg",
    })
  );
  console.log("----- thumb gravity face"); 
  console.log(
      cloudinary.url("doctor", {
        crop: "thumb",
        gravity: "face",
        width: 200,
        height: 200,
        format: "jpg",
      })
    );
  
// MORE EXAMPLES 

// console.log("----- lfill no gravity"); 
// console.log(
//   cloudinary.url("doctor", {
//     crop: "lfill",
//     width: 200,
//     height: 200,
//     format: "jpg",
//   })
// );
// console.log("----- lfill gravity auto"); 
// console.log(
//     cloudinary.url("doctor", {
//       crop: "lfill",
//       gravity: "auto",
//       width: 200,
//       height: 200,
//       format: "jpg",
//     })
//   );
// console.log("----- lfill with gravity face");
// console.log(
//   cloudinary.url("doctor", {
//     crop: "lfill",
//     gravity: "face",
//     width: 200,
//     height: 200,
//     format: "jpg",
//   })
// );


// console.log("----- fill_pad gravity auto -- must have gravity or error"); 
// console.log(
//   cloudinary.url("doctor", {
//     crop: "fill_pad",
//     background: "blue",
//     gravity: "auto",
//     width: 200,
//     height: 200,
//     format: "jpg",
//   })
// );






