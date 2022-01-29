
// test public_id is seahorse which is authenticated
require('dotenv').config()
const cloudinary = require('cloudinary').v2


// seahorse is authenticated
// both public id and transformation must be signed
// raw transformation parameters are sorted alphabetically

const rawTransformation = 'c_limit,h_400,w_400'
const publicId = 'seahorse'

// extract credentials from env
const cloudname = cloudinary.config().cloud_name
const secret = cloudinary.config().api_secret

const crypto = require('crypto')
// this is an npm dependency that you must install
const URLSafeBase64 = require('urlsafe-base64')

// create the string to sign
// c_limit,h_400,w_400/deahorseAPI_SECRET
const stringToSign = [rawTransformation, publicId].join('/') + secret

// hash, digest and base64 encode - web ready
const s = URLSafeBase64.encode(
  crypto
    .createHash('sha1')
    .update(stringToSign)
    .digest()
).slice(0, 8)

// enclose the signature string in 's--<signature>--'
const signature = 's--' + s + '--'
const url = [
  `https://res.cloudinary.com/${cloudname}/image/authenticated`,
  signature,
  rawTransformation,
  publicId
].join('/')
console.log('hand code:', url)

