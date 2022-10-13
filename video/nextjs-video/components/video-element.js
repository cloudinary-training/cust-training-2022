import React, { useRef } from 'react';
import { AdvancedVideo } from '@cloudinary/react';
import { URLConfig } from '@cloudinary/url-gen';
import { CloudConfig } from '@cloudinary/url-gen';
import { CloudinaryVideo} from '@cloudinary/url-gen';


const CloudinaryVideoElement = (props) => {

  const videoEl = useRef();
  const cloudConfig = new CloudConfig({ cloudName: props.cloudName });
  const urlConfig = new URLConfig({ secure: true, analytics: false });
  const video = new CloudinaryVideo(props.publicId, cloudConfig, urlConfig);
  return <AdvancedVideo cldVid={video} width='100%' ref={videoEl} controls />;
};
export default CloudinaryVideoElement;