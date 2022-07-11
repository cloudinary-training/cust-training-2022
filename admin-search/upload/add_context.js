require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.add_context('course=training|year=2022', [ 'kitten', 'green-car' ])
.then(result=>{
    console.log(result)
})
.catch(error=>console.log(error));
