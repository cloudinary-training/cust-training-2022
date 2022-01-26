require('dotenv').config()
const cloudinary = require('cloudinary').v2

// use this if you created a named transform and want to delete it to rename it
const name = 'auto-400-xform'
cloudinary.api
  .delete_transformation(`${name}`)
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  })
