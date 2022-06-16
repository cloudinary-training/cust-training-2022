require('dotenv').config();
const cloudinary = require('cloudinary').v2;

const upload = async (filepath, tagArray, contextString) => {
  try {
    const result = await cloudinary.uploader.upload(filepath, {
      tags: tagArray,
      context: contextString
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

upload(
  './assets/cat-and-dog.jpg',
  ['cat', 'dog', 'cats and dogs', 'dogs and cats'],
  'source=pexels | subject=pets'
);
