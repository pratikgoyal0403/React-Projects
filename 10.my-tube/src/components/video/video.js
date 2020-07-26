import React from "react";
import classes from "./video.module.css";

const Video = (props) => {
  const bgUrl = props.video.snippet.thumbnails.medium.url;
  return (
    <div className={classes.card} onClick={props.selected}>
      <div
        className={classes.thumbnail}
        style={{ backgroundImage: `url(${bgUrl})` }}
      ></div>
      <div className={classes.videoDetails}>
        <p>{props.video.snippet.title}</p>
      </div>
    </div>
  );
};

export default Video;
