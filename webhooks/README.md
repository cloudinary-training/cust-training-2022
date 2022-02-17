# Webhooks

- Look at Cloudinary Upload API methods
- Create a Netlify Function to send an email with Eager Upload Response
- Create a Set of Netlify Functions that Manage the Google AI Video Moderation workflow

## Cloudinary Upload API Methods

Many Upload API methods run asynchronously and provide an option to add a webhook. We'll get a URL
from https://webhook.site to use as a webhook and track the completion of the processing. 

### Sprites: `generate_sprite`
CSS Sprites combine a set of icons onto a single image.  The CSS can then extract them from 
a single image download using `background-position` property.  You can create a sprite from multiple images and 
Cloudinary will generate the CSS to pull the images out of the sprite.

### Sprites and Explode: `explode` and `generate_sprite`
The Cloudinary `explode` method can be used to extract pages (layers) from a PDF or animated GIF.  The pages can be accessed using
the `page` transformation.  The `generate_sprite` takes one or more URLs from the extracted pages and build an image. In this exercies, we'll 
explode and GIF and then create a sprite out of some of the pages in the GIF.

### Generate Videos: `multi` and `create_slideshow`

The `multi` method can be used to create a GIF or a video.  You can specify a fixed duration that determines how long each image 
will be shown. A GIF will run continuously. We'll create a GIF out of a set of images.

The `create_slideshow` method is used to create a video.  The video can be made up of images and video. You can specify transitions between the images
or video and the duration of the entire video.  We'll create a video out of a set of images and a transition.

### Using SendGrid in a Netlify Function to Notify Process Completion

Creating optimized video derivatives with transformations involves processing that can take time. It would be helpful to receive an email 
with the Cloudinary response showing that the processing completed successfully.  
We'll run the video processing as an eager transformation. We'll use the `notification_url` option to add a webhook.  We'll create a Netlify Function, which gives us an API that we can use for a webhook.  When the processing is complete the Netlify Function will call Sendgrid's email `send` function to forward the Cloudinary response to a predefined email address.

If you have deployed the `functions/webhook_notify_email` function, you can use the URL you have created as the webhook in `notification/upload-video-eager` script.  Then execute the upload and check the email your setup for the eager upload response.

### Managing the Queues in a Google Video AI Moderation Process

You can use the Cloudinary add-on Google Video AI Moderation to examine your video looking for content that you might not want on
your website like pornography or violence.  When processing is complete, the add-on will put the video into an `approved` or `rejected` queue.  
You can view these queues online in the DAM.  
This add-on is helpful when we are allowing our users to upload video content. We don't want these video to be served unless they are marked approved. To 
guarantee they can't be served, we upload them with  the `access_control` option containing an `access_item` with a value of `token`.  As long as 
the video has this token, it can't be served.  After the upload is complete, Cloudinary will automatically run it through the Video Moderation process.  While it is running in this process, it is marked `pending`.  If you look at the Google Moderation Queue at this point, you'll see both of the videos in the `pending` queue.
We can supply a webhook, that will be get called when the moderation step is complete.  
When moderation is complete, the video will be moved to either the `approved` or `rejected` queue depending on the analysis.  Then the webhook is called.  We'll code a Netlify Function to serve as the webhook.  This function will call one function to process the approved queue and one to process the rejected queue.  If the video is approved, it will be updated using the Admin API `update` function so that the `access_item:token` is replaced with `access_item:anonymous`.  This will make it available to be served.  If the video is rejected, it will be deleted.  
If you look at the Google Moderation Queue at the end of the processing, you'll see that approved video is in the approved queue and you won't find the `rejected` video as it will have been deleted.

If you have deployed the 3 functions below, you can run the `moderation/approved/upload-video`, which uploads a video of elephants walking, and the `moderation/rejected/upload-video`, which uploads a video of people in a hot tub. If you look at the moderation queue in the DAM within 60 seconds, you should see both video in the pending queue.  When processing is complete, you'll see that the elephant video is in the approved queue and the hot tub video will be deleted.

- `functions/webhook_process_approved_queue`
- `function\webhook_process_rejected_queue` 
- `functions\process_google_moderation_queues`

## Running the Netlify Functions 
If you want to try out the SendGrid email and Google AI Moderation Queue management functions yourself, you can find the code and deployment instructions in [this Cloudinary Training repository](https://github.com/cloudinary-training/cld-webhooks/blob/main/NETLIFY_DEPLOY.md).