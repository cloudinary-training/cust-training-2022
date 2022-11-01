# Compare Video Element to Cloudinary Video Player

[Demo](https://cld-nextjs-video.vercel.app/)

You can see the element and the player side by side on the home page.  Click on links in the upper left to 
see the element or the video player on a page by itself.  Using browser devtools, you can examine what is rendered, and in the network tab, you can refresh to see the formats of the files downloaded.  Clickin the Repsonse tab under the Network tab,
you can explore the content types.

If you are interested in "probing" deeper, install `ffmpeg`. It will bring in an application called `ffprobe`.  Run ffprobe from the terminal, specifying the path to a video and you will get information about the videos format and other properties.

## Working with Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Front End

https://next-video-abr.vercel.app

## Upload Video
GET https://next-video-abr.vercel.app/api/upload_video?id=skiing&url=https://res.cloudinary.com/picturecloud7/video/upload/test.mp4

Test values:
id: skiing
url: https://res.cloudinary.com/picturecloud7/video/upload/test.mp4
