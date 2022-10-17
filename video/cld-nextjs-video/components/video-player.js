import 'cloudinary-video-player/dist/cld-video-player.min.css';
import React, { useRef, useEffect, useState } from 'react';

const VideoPlayer = (props) => {
  const videoEl = useRef();
  const [cloud] = useState(props.cloudName);
  const [publicId] = useState(props.publicId);
  const [jsLoaded, setJSLoaded] = useState(false);
  const [vpScriptLoaded, setVPScriptLoaded] = useState(false);

  useEffect(() => {
    if (!jsLoaded) {
      if (!vpScriptLoaded) {
        const scriptTag = document.createElement('script');
        scriptTag.src =
          'https://cdn.jsdelivr.net/npm/cloudinary-video-player@1.9.1/dist/cld-video-player.min.js';
        scriptTag.addEventListener('load', () => setJSLoaded(true));
        document.body.appendChild(scriptTag);
        setVPScriptLoaded(true);
      }
    }
    return () => {
      setJSLoaded(false);
    };
  }, [jsLoaded, vpScriptLoaded]);

  useEffect(() => {
    if (!jsLoaded) return;

    const videoPlayer = window.cloudinary.videoPlayer(videoEl.current, {
      cloud_name: cloud,
      muted: true,
      controls: true,
      width: '100%',
    });
    videoPlayer.source(
      publicId,
      {
        sourceTypes: ['dash/vp9', 'hls/h265', 'hls/h264', 'mp4'],
        sourceTransformation: {
          'dash/vp9': [{ streaming_profile: 'full_hd_wifi_vp9' }],
          'hls/h265': [{ streaming_profile: 'full_hd_wifi_h265' }],
          'hls/h264': [{ streaming_profile: 'full_hd_wifi' }],
          mp4: [{ raw_transformation: 'q_auto' }],
        },
      }
    );
  }, [jsLoaded, cloud, publicId]);
  return (
    <div>
      <video
        className='cld-video-player cld-fluid'
        ref={videoEl}
        id='video-player'
      />
    </div>
  );
};
export default VideoPlayer;
