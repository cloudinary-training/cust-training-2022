require('dotenv').config()
const cloudinary = require('cloudinary').v2

// use this to list all your named transforms
cloudinary.api
  .transformations({ max_results: 500 })
  .then(result => {
    for (const transform of result.transformations) {
      if (transform.named === true) {
        console.log(transform)
      }
    }
  })
  .catch(error => {
    console.log(error)
  })
