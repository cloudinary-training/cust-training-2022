require('dotenv').config();
const cloudinary = require('cloudinary').v2;

async function deletedFirstDerivedAsset(publicId) {
  try {
    const resource = await cloudinary.api.resource('cat-and-dog', {
      resource_type: 'image', //default
      color: true,
      image_metadata: true,
    });
    console.log('resource: ', resource);
    console.log('first derived asset:', resource.derived[0]);
    const deleted = await cloudinary.api.delete_derived_resources([resource.derived[0].id]);
    return deleted;
  } catch (error) {
    console.log('Error',error);
    return error;
  }
}

// create some derived assets for this as needed for demo:
// https://res.cloudinary.com/cloudinary-training/image/upload/g_faces,c_fill,w_400,h_300/cat-and-dog.jpg

deletedFirstDerivedAsset('cat-and-dog')
  .then((result) => {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch((error) => {
    console.log(error);
  });
