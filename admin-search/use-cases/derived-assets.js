require('dotenv').config();
const cloudinary = require('cloudinary').v2;

const listDerivedAssets = async (publicId) => {
  try {
    const results = await cloudinary.api.resource('logo');
    console.log(JSON.stringify(results, null, 2))
  } catch (err) {
    console.log(err);
  }
};

listDerivedAssets('logo');
