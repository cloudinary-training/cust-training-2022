# List all resources node module

To use this module, import it into a file and then execute

```JavaScript
 getAllResources(
   {
     type: 'upload',
     max_results: 1,
     prefix: 'logo',
     next_cursor: null,
   },
   './test.txt'
 );
```