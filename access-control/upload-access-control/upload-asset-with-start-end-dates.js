require('dotenv').config()
const cloudinary = require('cloudinary').v2
const moment = require('moment')

// function using moment lib to add days
const addDays = days => {
  return moment()
    .add(days, 'days')
    .toISOString()
}
// function using moment lib to add seconds
const addSeconds = seconds => {
  console.log(new Date())
  return moment().add(seconds, 'seconds').toISOString()
}
// set to start in 45 seconds and end date to 7 days

const startDate = addSeconds(45)
console.log('45 seconds from now', startDate)
const endDate = addDays(7)
console.log('one week from today', endDate)

// restrict access to a time period using the access_type: anonymous
cloudinary.uploader
  .upload('./assets/koi.jpg', {
    public_id: 'koi',
    type: 'upload',
    access_control: [
      { access_type: 'anonymous', start: startDate, end: endDate }
    ]
  })
  .then(uploadResult => {
    console.log(uploadResult)
    const url = uploadResult.secure_url
  })
  .catch(error => console.error(error))
