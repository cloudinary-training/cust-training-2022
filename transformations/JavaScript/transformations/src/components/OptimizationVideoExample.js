import { CloudinaryVideo } from '@cloudinary/url-gen';
import { URLConfig } from '@cloudinary/url-gen';
import { CloudConfig } from '@cloudinary/url-gen';
import { AdvancedVideo } from '@cloudinary/react';
import { scale } from '@cloudinary/url-gen/actions/resize';
import { useRef } from 'react';


function OptimizationVideoExample() {
  const videoEl = useRef();
  // Set the Cloud configuration and URL configuration
  const cloudConfig = new CloudConfig({ cloudName: 'cloudinary-training' });
  const urlConfig = new URLConfig({ secure: true, analytics: false });

  const cldVid = new CloudinaryVideo('wave', cloudConfig, urlConfig);

  // Perform the transformation.
  cldVid
    .resize(scale().width(600)) // scale the image
    .format('auto') // f_auto */
    .quality('auto'); // q_auto

  // log the transformation
  const cldURL = cldVid.toURL();
  console.log('video optimization:', cldURL);

  return (
    <AdvancedVideo
      cldVid={cldVid}
      ref={videoEl}
      controls
      className='cld-vid'
    />
  );
}

export default OptimizationVideoExample;

