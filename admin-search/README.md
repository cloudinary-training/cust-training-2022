# Admin/Search API Webinar

The Search API is an endpoint of the set of endpoints that make up the Admin API.

This webinar that uses this code looks at calling Search and Admin APIs from Postman, 
the Cloudinary CLI, and the Cloudinary Node.js SDK.

All the scripts set up in this directory should be run from the root of this repository.

From the root, if I want to run the `expressions.js` 

```JavaScript
npm i
node admin-search/search/expressions.js
```

## Using the Postman Collections Referenced in Cloudinary Documentation

There is a teaching aid in the form of a web page that walks you through the steps to running
API's using Cloudinary Postman collections.

See this to help you to get started with Postman Collections:  
https://cloudinary-training.github.io/cust-training-2022/admin-search/postman.html

```JavaScript
npm i
node admin-search/search/expressions.js
```


# Search
The Search API let's us add Lucene-like expressions.  

The `admin-search/search/expressions.js` file contains many example of Lucene-like expression that you can test with.
You should run the `admin-search/upload/upload.js` and then the `add_context.js` and `add_tags.js` to experiment with
manually added tags and context.  The `admin-search/upload/upload-with-auto-tagging.js` can be used to experiment with
AI Addons that perform tagging.   Before you an run the auto-tagging, you need to subscribe to the Amazon Rekognition, 
Google Auto Tagging and Imagga add-ons.


## Use Cases

There are many use cases for the Admin and Search APIs.  
This repository contains a set of them in the `use-cases` directory.  You'll find help with these 
cases: 

- finding derived assets
- deleting derived assets
- downloading a CSV list of derived assets
- locating large assets for cleanup
- locating old assets for cleanup
- pagination with the next_cursor property of the Admin API response

## ListResourceModule

In the `ListResourcesModule` directory, you'll find code to create a Node.js module for
getting assets for pagination.

