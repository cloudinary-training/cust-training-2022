require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// sort by public id
// show any context metadata
// show any tags
// without specifying max results, search returns 50 by default

// cloudinary.search
//   .sort_by('public_id')
//   .with_field('context')
//   .with_field('tags')
//   .execute()
//   .then((result) => {
//     console.log(result);
//     console.log('count: ', result.resources.length);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//  -------------------------------------------------------------

// assets of type image (resource_type)
// and uploaded within the last day (uploaded_at)
// and > 1 megabyte
// cloudinary.search
//   .expression('tags:dog AND uploaded_at>1d AND bytes>1m')
//   .sort_by('public_id')
//   .with_field('context')
//   .with_field('tags')
//   .execute()
//   .then((result) => {
//     console.log(JSON.stringify(result,null,2));
//   });

//  -------------------------------------------------------------
// exact match with tag (=)

// the tags array will contain a value of 'dog' (exact match for a single tag)
// tags array
// "tags": [
//   "dog",
//   "cat",
//   "dogs and cats",
//   "cats and dogs"
// ],
// cloudinary.search
//   .expression('resource_type:image AND tags=dog')
//   .sort_by('public_id')
//   .with_field('context')
//   .with_field('tags')
//   .max_results(10)
//   .execute()
//   .then((result) => {
//     console.log(JSON.stringify(result,null,2));
//   });

// cloudinary.search
//   .expression('resource_type=image AND tags="dogs and cats"')
//   .sort_by('public_id')
//   .with_field('context')
//   .with_field('tags')
//   .max_results(10)
//   .execute()
//   .then((result) => {
//     console.log(JSON.stringify(result,null,2));
//   });

//  -------------------------------------------------------------
// token search (:)

// with tags: we are doing a token search - 'cats and dogs'
// tokens are often separated by underscore, hyphen, or space
// we can search for any tags that have the word 'cats' or 'dogs' in the string
console.log("running")
cloudinary.search
.expression('resource_type:image AND tags:bird*')
.sort_by('public_id')
.with_field('context')
.with_field('tags')
.max_results(10)
.execute()
.then((result) => {
  console.log(JSON.stringify(result,null,2));
});

// cloudinary.search
// .expression('resource_type:image AND tags:cats')
// .sort_by('public_id')
// .with_field('context')
// .with_field('tags')
// .max_results(10)
// .execute()
// .then((result) => {
//   console.log(JSON.stringify(result,null,2));
// });

//  XXXXXXXXXXX  PREFIX search
// prefix (starts with) token search
// cloudinary.search
//   .expression('resource_type:image AND tags:ca*')
//   .sort_by('public_id')
//   .with_field('context')
//   .with_field('tags')
//   .max_results(10)
//   .execute()
//   .then((result) => {
//     console.log(JSON.stringify(result, null, 2));
//   });

//  XXXXXXXXXXXX  Docs bug??
// prefix (starts with) token search are case insensitive, but
// exact matches are case sensitive  ??????
// cloudinary.search
//   .expression('resource_type:image AND tags:CA*')
//   .sort_by('public_id')
//   .with_field('context')
//   .with_field('tags')
//   .max_results(10)
//   .execute()
//   .then((result) => {
//     console.log(JSON.stringify(result, null, 2));
//   });

// cloudinary.search
// .expression('resource_type:image AND tags:ca*')
// .execute()
// .then((result) => {
//   console.log('token case insensitive?')
//   console.log(JSON.stringify(result, null, 2));
// });

// cloudinary.search
// .expression('resource_type:image AND tags=ca*')
// .with_field('tags')
// .execute()
// .then((result) => {
//   console.log('exact case sensitive')
//   console.log(JSON.stringify(result, null, 2));
// });

//  -------------------------------------------------------------
//

//  -------------------------------------------------------------
// date 'created_at>1d' or 'uploaded_at>1d' means the upload date is a value greater than
// the value of the date 1 day ago - if you think of dates as increase numeric
// values - this means that the item has been uploaded WITHIN the last day

// cloudinary.search
//   .expression('resource_type:image AND created_at>1d')
//   .sort_by('uploaded_at')
//   .max_results(10)
//   .execute()
//   .then((result) => {
//     console.log(JSON.stringify(result, null, 2));
//     const date = new Date();
//     date.setDate(date.getDate()-1)
//     console.log('1 day ago: \t',date.toLocaleDateString(), date.toLocaleTimeString());;
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// date 'uploaded_at<1d` will return everything uploaded before 1 day ago
// cloudinary.search
//   .expression('resource_type:image AND (uploaded_at<1d)')
//   .sort_by('uploaded_at')
//   // .max_results(10)
//   .execute()
//   .then((result) => {
//     console.log(JSON.stringify(result.resources, null, 2));
//     console.log(result.resources.length);
//     console.log(JSON.stringify(result.resources.map(item=>item.uploaded_at), null, 2));
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//  Search for a time range - the smaller date value should go first soe if you have
//  a search starting at 4 weeks ago up until the last week, the 4week is the lower valued
//  date and should go first in a range search
// cloudinary.search
//   .expression('uploaded_at:[4w TO 1w]')
//   .sort_by('uploaded_at')
//   // .max_results(10)
//   .execute()
//   .then((result) => {
//     console.log(JSON.stringify(result.resources, null, 2));
//     console.log(result.resources.length);
//     console.log(
//       JSON.stringify(
//         result.resources.map((item) => item.uploaded_at),
//         null,
//         2
//       )
//     );
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//  -------------------------------------------------------------
// format search
// cloudinary.search
//   .expression('resource_type:image AND format=gif')
//   .sort_by('public_id')
//   .with_field('context')
//   .with_field('tags')
//   .max_results(10)
//   .execute()
//   .then((result) => {
//     console.log(result);
//   });

//  -------------------------------------------------------------
// use the colon notation to search for colors with specified set of colors
//green, blue, lightblue, black, white, red, gray, lime, yellow, olive, cyan, teal, purple, orange, pink, and brown
// add with_field('image_analysis') to get the list of colors and percentages
// cloudinary.search
//   .expression('resource_type:image AND colors:blue')
//   .sort_by('public_id')
//   .with_field('image_analysis')
//   .with_field('tags')
//   .max_results(10)
//   .execute()
//   .then((result) => {
//     console.log(JSON.stringify(result,null,2));
//   });