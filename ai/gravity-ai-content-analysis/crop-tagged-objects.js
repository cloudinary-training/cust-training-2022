require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// example of crop with default gravity
// this image original size is about 3000 x 6000
console.log(cloudinary.url('fashion-athena',{crop:"crop",width:1500,height:3000}))


// example of crop with compass gravity
console.log(cloudinary.url('fashion-athena',{crop:"crop",width:1500,height:3000,gravity:"north_west"}))
console.log(cloudinary.url('fashion-athena',{crop:"crop",width:1500,height:3000,gravity:"north_east"}))
console.log(cloudinary.url('fashion-athena',{crop:"crop",width:1500,height:3000,gravity:"south_west"}))
console.log(cloudinary.url('fashion-athena',{crop:"crop",width:1500,height:3000,gravity:"south_east"}))




// crop (also try fill, lfill_pad, thumb)
console.log(cloudinary.url('fashion-athena',{crop:"crop",gravity:"stockings",sign_url:true}))
console.log(cloudinary.url('fashion-athena',{crop:"crop",width:400,gravity:"auto:bag",sign_url:true}))
console.log(cloudinary.url('fashion-athena',{crop:"crop",width:400,height:400,gravity:"auto:bag_avoid",sign_url:true}))




