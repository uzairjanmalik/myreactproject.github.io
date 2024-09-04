import React from 'react';
import { useParams } from 'react-router-dom';

function Video() {
  const { id } = useParams();
  
  return (
    <div>
      <h1>Recipe Video {id}</h1>
      <video controls>
        <source src={`videos/example${id}.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>Description for video {id}.</p>
    </div>
  );
}

export default Video;
