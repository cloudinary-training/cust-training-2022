require('dotenv').config();
const cloudinary = require('cloudinary').v2;

async function getDerivedAssets(publicId) {
  try {
    const resource = await cloudinary.api.resource(publicId, {});
    return resource.derived;
  } catch (error) {
    console.log('Error', error);
    return error;
  }
}
async function writeToDisk(derivedAssets) {
  try {
    const ObjectsToCsv = require('objects-to-csv');
    const csv = new ObjectsToCsv(derivedAssets);
    await csv.toDisk('./derivedAssets.csv', { append: true });
  } catch (error) {
    console.log('Disk write:', error);
    return error;
  }
}

// array of public ids you want to download info on
const publicIds = ['cat-and-dog'];

for (let publicId of publicIds) {
  getDerivedAssets(publicId).then((result) => {
    for (let item of result) {
      item['public_id'] = publicId;
    }
    writeToDisk(result);
  });
}
