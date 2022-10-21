require("dotenv").config();
const cloudinary = require("cloudinary").v2;

// progress bar
console.log(
  cloudinary.url("roller-skating", {
    resource_type: "video",
    format: "mp4",
    effect: "progressbar:frame:FFFF00:20",
  })
);

//reverse
console.log(
  cloudinary.url("purple-hourglass", {
    resource_type: "video",
    format: "mp4",
    effect: "reverse",
  })
);

//preview
console.log(
  cloudinary.url("hat", {
    resource_type: "video",
    format: "mp4",
    effect: "preview:duration_6.0:max_seg_3:min_seg_dur_3.0",
  })
);

// transition and splice (crossfade)
// the two videos must have the same resolution - you can crop them
console.log(
  cloudinary.url("video/downhill-skiing", {
    resource_type: "video",
    format: "mp4",
    transformation: [
      { duration: "5" },
      {
        flags: "splice:transition_(name_pixelize;du_2)",
        overlay: "video:snowboarding",
      },
      { duration: "5" },
      { flags: "layer_apply" },
    ],
  })
);

// convert video to GIF

console.log(
  cloudinary.url("video/snowboarding.gif", {
    resource_type: "video",
    transformation: [
      { height: 200, crop: "scale" },
      { effect: "loop" },
      { delay: "200", video_sampling: "40" },
    ],
  })
);

// create image from video
// using start offset and format

console.log(
  cloudinary.url("video/snowboarding.jpg", {
    resource_type: "video",
    transformation: [{ start_offset: 7 }],
  })
);

// trim

// using duration from beginning
console.log(
    cloudinary.url("video/snowboarding", {
      resource_type: "video",
      transformation: [{duration: 7 }],
    })
  );


// using start offset to end
console.log(
    cloudinary.url("video/snowboarding", {
      resource_type: "video",
      transformation: [{ start_offset: 7 }],
    })
  );

// using start offset + duration
console.log(
    cloudinary.url("video/snowboarding", {
      resource_type: "video",
      transformation: [{ start_offset: 6, duration: 6 }],
    })
  );

// using start offset + end offset
console.log(
    cloudinary.url("video/snowboarding", {
      resource_type: "video",
      transformation: [{ start_offset: 6, end_offset: 12 }],
    })
  );