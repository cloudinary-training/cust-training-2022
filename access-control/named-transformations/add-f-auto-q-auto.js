require('dotenv').config()
const cloudinary = require('cloudinary').v2


cloudinary.api
  .update_transformation('t_auto-400-xform/f_auto,q_auto', {
    allowed_for_strict: true
  })
  .then(updateResult => {
    console.log(updateResult)
    const url = cloudinary.url('shark', {
      transformation: ['auto-400-xform/f_auto,q_auto']
    })
    console.log(url)
  })
  .catch(error => {
    console.log(error)
  })
