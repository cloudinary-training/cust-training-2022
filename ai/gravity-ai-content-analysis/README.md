# Gravity

If you've learned about cropping with Cloudinary transformations, you've probably use gravity.  It can be specified as a compass direction N, NE, E, SE, S, SW, W, N, but that means that you have to investigate your image or video to find the interesting part of it to deliver.  With `gravity: auto`, you can let Cloudinary crop the most interesting part of the asset for you.

## Review Gravity

Run some code to familiarize yourself with the effects of using gravity when cropping an image.  The 'gravity: auto' option is using AI. If you don't specify gravity when you crop, it will crop at the center of the asset.

## Cloudinary AI Content Analysis works with Gravity

If you activate the Cloudinary AI Content analysis add-on, you can add objects to your `g_auto` parameter.  There are currently 7 AI models that you can use for detection.  We'll use the `cld-fashion` model in this webinar.  This model is helpful for e-commerce applications.

