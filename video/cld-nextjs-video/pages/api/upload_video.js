import { auto } from '@cloudinary/url-gen/qualifiers/quality'

require('dotenv').config()
const cloudinary = require('cloudinary').v2

/***
 * GET /api/upload_video
 * id=<string> prefix for Cloudinary public id
 * url=<string> url to an online video
 */
export default async function handler(req, res) {
    const id = req.query.id
    const url = req.query.url
    console.log("Public id:", id)
    console.log("video url:", url)
    console.log(cloudinary.config.cloud_name)

    try {
        if (typeof id != 'undefined' && typeof url != 'undefined') {
            const publicId = `${id}-${Date.now()}`
            console.log(publicId)
            const resp = await cloudinary.uploader.upload(req.query.url, {
                public_id: publicId,
                resource_type: "video",
                type: "upload",
                eager: [
                    {
                        streaming_profile: "full_hd_wifi",
                        format: "m3u8",
                    },
                    {
                        streaming_profile: "full_hd_wifi_h265",
                        format: "m3u8",
                    },
                    {
                        streaming_profile: "full_hd_wifi_vp9",
                        format: "mpd",
                    },
                    {
                        format: "webm"
                    }
                ],
                eager_async: true,
                eager_notification_url:
                    "https://webhook.site/aabf3caa-4dea-4a32-9e8c-42f7720b02af",
                invalidate: true,
                overwrite: true
            });
            console.log(resp)
            res.status(200).json({ msg: 'successful surf video upload', public_id: publicId, url: url })
        } else {
            res.status(400).json({ msg: 'you need to supply a url to a video and a public id' })
        }
    } catch (error) {
        res.status(500).json({ msg: `error: ${JSON.stringify(error, null, 2)}` })
    }
}
