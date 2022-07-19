/***
 * Using the next_cursor parameter
 * getAllResources - read resources per options and write public ids to file
 * options: key/value pairs specifying options for Admin API resources action/method
 * filename: name of local file to write the public ids to
 */

require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

var resourceList = [];

const pushAll = (target, source) => {
  source.forEach((item) => {
    target.push(item);
  });
};

const writeToFile = async (filePath) => {
  try {
    resourceList.forEach((item) => {
      return fs.promises.appendFile(filePath, item.public_id + '\n');
    });
  } catch (err) {
    console.log('error writing to file:', err);
  }
};

const getResources = async (options) => {
  try {
    const result = await cloudinary.api.resources(options);
    return result; //returns a promise
  } catch (err) {
    console.log(err);
  }
};
const getAllResources = async (options, filePath) => {
  const fd = fs.openSync(filePath, 'w'); //initialize file
  try {
    do {
      const result = await getResources(options, filePath);
      pushAll(resourceList, result.resources);
      if (result.next_cursor) {
        options.next_cursor = result.next_cursor;
      } else {
        options.next_cursor = null;
      }
    } while (options.next_cursor != null);
    console.log(JSON.stringify(resourceList, null, 2));
    //  console.log('total resources:', resourceList.length);
    writeToFile(filePath);
  } catch (err) {
    console.log(err);
  }
};

getAllResources(
  {
    type: 'upload',
    max_results: 1,
    prefix: 'logo',
    next_cursor: null,
  },
  './test.txt'
);
