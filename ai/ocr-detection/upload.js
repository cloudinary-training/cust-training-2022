require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader
  .upload('./assets/black_car.jpg', {
    public_id: 'ai/black_car_1',
    ocr: 'adv_ocr',
  })
  .then((uploadResult) => {
    console.log(JSON.stringify(uploadResult, null, 2));
    console.log(
      'text detected:',
      uploadResult.info.ocr.adv_ocr.data[0].textAnnotations[0].description
    );
    console.log(
      cloudinary.url('ai/black_car', {
        transformation: [
          {
            width: 1520,
            height: 1440,
            gravity: 'west',
            x: 50,
            crop: 'crop',
          },
          {
            effect: 'pixelate_region:15',
            gravity: 'ocr_text',
          },
        ],
      })
    );
  })
  .catch((error) => console.error(error));
