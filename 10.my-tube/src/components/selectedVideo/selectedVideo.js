import React from "react";
import classes from "./selectedVideo.module.css";

const SelectedVideo = (props) => {
  if (!props.video) {
    return <div>Loading...</div>;
  }
  let src = `https://www.youtube.com/embed/${props.video.id.videoId}`;
  return (
    <div className={classes.videoContainer}>
      <iframe src={src} title="video player" />
      <h1>{props.video.snippet.title}</h1>
  <p>{props.video.snippet.description}</p>
    </div>
  );
};

export default SelectedVideo;
