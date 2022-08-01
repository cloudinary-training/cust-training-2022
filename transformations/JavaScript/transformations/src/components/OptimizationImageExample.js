import { CloudinaryImage } from '@cloudinary/url-gen';
import { URLConfig } from '@cloudinary/url-gen';
import { CloudConfig } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

// Import required actions.
import { scale } from '@cloudinary/url-gen/actions/resize';
import { useRef } from 'react';

function OptimizationImageExample() {
  const imgEl = useRef();

  // Set the Cloud configuration and URL configuration
  const cloudConfig = new CloudConfig({ cloudName: 'cloudinary-training' });
  const urlConfig = new URLConfig({ secure: true, analytics: false });

  const cldImg = new CloudinaryImage(
    'images/forest-reflection',
    cloudConfig,
    urlConfig
  );

  // Perform the transformation.
  cldImg
    .resize(scale().width(600)) // scale the image
    .format('auto') // f_auto */
    .quality('auto'); // q_auto

  // log the transformation
  const cldURL = cldImg.toURL();
  console.log('image optimization:', cldURL);

  return (
    <AdvancedImage
      cldImg={cldImg}
      ref={imgEl}
      alt='Advanced Image'
      className='cld-img'
    />
  );
}

export default OptimizationImageExample;
