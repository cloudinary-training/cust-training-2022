const lib = require('./index');

// lib.getAllResources(
//   {
//     type: 'upload',
//     max_results: 5,
//     prefix: 'logo',
//     next_cursor: null,
//   },
//   './test.txt'
// );

lib.getAllResources(
    {
      type: 'upload',
      resource_type: 'video',
      max_results: 5,
      next_cursor: null,
    },
    './test.txt'
  );
