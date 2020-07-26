import React, { useEffect, useState } from "react";
import Input from "./components/input/input";
import SelectedVideo from "./components/selectedVideo/selectedVideo";
import Video from "./components/video/video";
import classes from "./app.module.css";

const key = "AIzaSyA5BC262xceC9AD1g2DlFKp7UBsWB0RT7M";

const App = () => {
  const [searchString, setSearchString] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const changeHandler = (event) => {
    setSearchString(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setSearchTerm(searchString);
  };

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&key=${key}`
    )
      .then((result) => result.json())
      .then((res) => {
        setVideos(res.items);
        setSelectedVideo(res.items[1]);
      });
  }, [searchTerm]);

  const selectVideoHandler = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className={classes.wrapper}>
      <Input changed={changeHandler} submit={submitHandler} />
      <div className={classes.container}>
        <SelectedVideo video={selectedVideo} />
        <div className={classes.videoList}>
          {videos.map((video) => (
            <Video
              video={video}
              key={video.id.videoId}
              selected={() => selectVideoHandler(video)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
