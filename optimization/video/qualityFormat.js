require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({ secure: "true" });

console.log("-----without quality and format optimization");
console.log(
  cloudinary.url("hat", {
    format: "mp4",
    resource_type: "video",
  })
);

console.log("-----with quality and format optimization");
console.log(
  cloudinary.url("hat", {
    resource_type: "video",
    transformation: [{ quality: "auto" }, { fetch_format: "auto" }],
  })
);



console.log("-----with resize, quality and format optimization");
console.log(
  cloudinary.url("hat", {
    resource_type: "video",
    transformation: [
      { crop: "fit", height: "500", width: "500"},
      { quality: "auto" },
      { fetch_format: "auto" },
    ],
  })
);

console.log("-----with resize, quality auto and format auto optimization");
console.log(
  cloudinary.url("hat", {
    resource_type: "video",
    transformation: [
      { crop: "fit", height: "500", width: "500"},
      { quality: "auto" },
      { fetch_format: "auto" },
    ],
  })
);

console.log("-----with resize, quality 70 and format auto optimization");
console.log(
  cloudinary.url("hat", {
    resource_type: "video",
    transformation: [
      { crop: "fit", height: "500", width: "500"},
      { quality: "70" },
      { fetch_format: "auto" },
    ],
  })
);

console.log("-----with resize, quality 80 and format auto optimization");
console.log(
  cloudinary.url("hat", {
    resource_type: "video",
    transformation: [
      { crop: "fit", height: "500", width: "500"},
      { quality: "80" },
      { fetch_format: "auto" },
    ],
  })
);
