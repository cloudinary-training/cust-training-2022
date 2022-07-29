// import { Cloudinary } from '@cloudinary/url-gen';
// import { Transformation } from '@cloudinary/url-gen';
import { CloudinaryImage } from '@cloudinary/url-gen';
import { URLConfig } from '@cloudinary/url-gen';
import { CloudConfig } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

// Import required actions.
import { fill } from '@cloudinary/url-gen/actions/resize';


// Import required qualifiers.
// import { image } from '@cloudinary/url-gen/qualifiers/source';
// import { Position } from '@cloudinary/url-gen/qualifiers/position';
// import { compass } from '@cloudinary/url-gen/qualifiers/gravity';
// import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
// import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn';

function ResizeExample() {
  // Set the Cloud configuration and URL configuration
  const cloudConfig = new CloudConfig({ cloudName: 'cloudinary-training' });
  const urlConfig = new URLConfig({ secure: true });

  const cldImg = new CloudinaryImage('cld-sample-2', cloudConfig, urlConfig);
  const cldURL = cldImg.toURL();
  console.log(cldURL);

  // Instantiate a CloudinaryImage object for the image with public ID, 'front_face'.

  // Perform the transformation.
  cldImg
    .resize(fill().width(600).height(400).gravity('auto')) // Crop the image
    .format('png'); // Deliver as PNG. */

  return (
    <div className='docs-image'>
      <AdvancedImage cldImg={cldImg} alt='Advanced Image' className='cld-img' />
    </div>
  );
}

export default ResizeExample;
