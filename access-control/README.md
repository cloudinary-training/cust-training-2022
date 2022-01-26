## Access Control

Cloudinary provides several way to restrict access to assets and/or transformations including `access_control`, `type`, and `strict transformations`.

If you have restricted your assets in any way, you can use URL signing, named transformations with allow_for_strict enabled, or eager, explicit transformations to help with delivery.

## Running the code

Run all script from the root directory because asset references are relative to root.

## Notes per topic

### Upload

Review and point out that /upload/ is public
Look carefully at URL and describe the resource_type, type, version, transformation, public id

### Private

after create a URL with a signature, what happens when you remove it? 404, 401
add transformations like /f_auto,q_auto ? Is this allowed with private?

### Authenticated
take out version?
take out signature
add transformations like /f_auto,q_auto ? Is this allowed with private?

### Strict Transformations
enable strict
run upload with strict enabled
notice you can see the secure-url from response and the transformation that add the original format
can you apply a watermark without a signature when strict transformations are enabled? only an authorized person can run a script that signs the URL

disable strict
try the same URLs - do you need a signature now?

### Signed URLs

What happens when you remove the signature from a URL that is public, private, authenticated?
What happens when you remove the version?  signature should depend on transformations and public id
Parameter in URL function that will sign:  sign_url: true
Compare : secure: true to sign_url:true
Describe how you would generate a signature in node.js if you din't have the parameter
What is in the "stringToSign"?

### named transformation
enable strict again

upload a public asset (shark)
it's public - try a transformation

create a named transformation
apply named transform to the shark access-control/named-transformations/url-named-transform.js
do you get a transformation
Yes because similar to signing, you have to be authorized to create a NT  

allowed_for_strict default for named transformations (you can selectively turn it off)

what if you're using a named transformation and you want to add f_auto, q_auto?
look at add-f-auto-q-auto: you'll need to turn on allowed_for_strict because f_auto and q_auto don't belong in NT

### explicit eager
enable strict

upload a public asset (killer whale)
can you transform? no

but you have the authority to run an explicit eager transform to create a derived asset
try requesting the URL created by the explict - do you need a signature

## DON'T FORGET TO DISABLE STRICT

