require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({ secure: "true" });

// with resizing
console.log("----resizing/gravity/quality");
console.log(
  cloudinary.url("hat", {
    crop: "scale",
    width: 400,
    format: "mp4",
    resource_type: "video",
  })
);
console.log(
  cloudinary.url("hat", {
    crop: "scale",
    width: 400,
    quality: "auto",
    format: "mp4",
    resource_type: "video",
  })
);

// with cropping/gravity
console.log("----cropping/gravity/quality -/+");
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
// fails g_auto must be in a transformation by itself
console.log(
  cloudinary.url("hat", {
    crop: "fill",
    gravity: "auto",
    aspect_ratio: "1:1",
    width: 400,
    height: 400,
    quality: "auto",
    format: "mp4",
    resource_type: "video",
  })
);
// try chained transformation
let url = cloudinary.url("hat", {
  resource_type: "video",
  transformation: [
    {
      crop: "fill",
      aspect_ratio: "1:1",
      width: 400,
      height: 400,
      quality: "auto",
      format: "mp4",
    },
    { gravity: "auto" },
  ],
});
console.log(url);

url = cloudinary.url("hat", {
  resource_type: "video",
  transformation: [
    {
      crop: "fill",
      aspect_ratio: "1:1",
      width: 400,
      height: 400,
      gravity: "auto",
      format: "mp4",
    },
    { quality: "auto" },
  ],
});
console.log(url);
