require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.add_tag('training', ['kitten','green-car'])
.then(result=>{
    console.log(result)
})
.catch(error=>console.log(error));
