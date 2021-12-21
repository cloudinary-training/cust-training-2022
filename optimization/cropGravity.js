// crop using the c_, crop option
// use gravity, g_ to spotlight a portion of the image
// https://cloudinary.com/documentation/resizing_and_cropping

// crop	    Extracts a region of the specified dimensions from the original image without first resizing it.
// fill	    Resizes the image to fill the specified dimensions without distortion. The image may be cropped as a result.
// lfill	Same as fill, but only scales down the image.
// fill_pad	Same as fill, but avoids excessive cropping by adding padding when needed. Supported only with automatic cropping.
// thumb	Creates a thumbnail of the image with the specified dimensions, based on a specified gravity. Scaling may occur.

require('dotenv').config()
const cloudinary = require('cloudinary').v2
cloudinary.config({ secure: 'true' })

console.log('----- no gravity')
console.log(cloudinary.url('doctor', { crop: 'crop', width: 200, height: 200, format: 'jpg' }))
console.log(cloudinary.url('doctor', { crop: 'fill', width: 200, height: 200, format: 'jpg' }))
console.log(cloudinary.url('doctor', { crop: 'lfill', width: 200, height: 200, format: 'jpg' }))
console.log(cloudinary.url('doctor', { crop: 'thumb', width: 200, height: 200, format: 'jpg' }))

console.log('----- gravity auto')
// add gravity
console.log(cloudinary.url('doctor', { crop: 'crop', gravity: 'auto', width: 200, height: 200, format: 'jpg' }))
console.log(cloudinary.url('doctor', { crop: 'fill', gravity: 'auto', width: 200, height: 200, format: 'jpg' }))
console.log(cloudinary.url('doctor', { crop: 'lfill', gravity: 'auto', width: 200, height: 200, format: 'jpg' }))
console.log(cloudinary.url('doctor', { crop: 'fill_pad', gravity: 'auto', gravity: 'auto', width: 200, height: 200, format: 'jpg' }))
console.log(cloudinary.url('doctor', { crop: 'thumb', gravity: 'auto', width: 200, height: 200, format: 'jpg' }))

console.log('----- gravity face')
console.log(cloudinary.url('doctor', { crop: 'crop', gravity: 'face', width: 200, height: 200, format: 'jpg' }))
console.log(cloudinary.url('doctor', { crop: 'fill', gravity: 'face', width: 200, height: 200, format: 'jpg' }))
console.log(cloudinary.url('doctor', { crop: 'lfill', gravity: 'face', width: 200, height: 200, format: 'jpg' }))
console.log(cloudinary.url('doctor', { crop: 'thumb', gravity: 'face', width: 200, height: 200, format: 'jpg' }))






