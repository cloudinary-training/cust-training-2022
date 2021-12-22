// crop using the c_, crop option
// use gravity, g_ to spotlight a portion of the image
// https://cloudinary.com/documentation/resizing_and_cropping

// crop	    Extracts a region of the specified dimensions from the original image without first resizing it.
// fill	    Resizes the image to fill the specified dimensions without distortion. The image may be cropped as a result.
// XXXXXX - not supported for video lfill	Same as fill, but only scales down the image.
// fill_pad	Same as fill, but avoids excessive cropping by adding padding when needed. Supported only with automatic cropping.
// XXXXXX - not supported for video thumb	Creates a thumbnail of the image with the specified dimensions, based on a specified gravity. Scaling may occur.

// gravity: 'face' not supported in video - use gravity: 'auto'

require('dotenv').config()
const cloudinary = require('cloudinary').v2
cloudinary.config({ secure: 'true' })

console.log('----- no gravity')
console.log(cloudinary.url('hat', { crop: 'crop', width: 200, height: 200, format: 'mp4', resource_type: 'video' }))
console.log(cloudinary.url('hat', { crop: 'fill', width: 200, height: 200, format: 'mp4', resource_type: 'video' }))

console.log('----- gravity auto')
// add gravity
console.log(cloudinary.url('hat', { crop: 'crop', gravity: 'auto', width: 200, height: 200, format: 'mp4', resource_type: 'video' }))
console.log(cloudinary.url('hat', { crop: 'fill', gravity: 'auto', width: 200, height: 200, format: 'mp4', resource_type: 'video' }))
console.log(cloudinary.url('hat', { crop: 'fill_pad', gravity: 'auto', gravity: 'auto', width: 200, height: 200, format: 'mp4', resource_type: 'video' }))


// video looks like it came from mobile - how to change aspect ratio
// gravity face not supported for video
console.log('----- aspect ratio')
console.log(cloudinary.url('hat', { crop: 'fill', gravity:'auto', width: 900, width:600,  format: 'mp4', resource_type: 'video' }))
// must include the ar option to change the aspect ratio
console.log(cloudinary.url('hat', { crop: 'fill', gravity:'auto', width: 900, width:600, aspect_ratio:'16:9', format: 'mp4', resource_type: 'video' }))




