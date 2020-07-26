import React, { useEffect } from "react";
import classes from "./banner.module.css";

const Banner = (props) => {
  let backdrop = null;
  if (props.bannerInfo) {
    backdrop = props.bannerInfo.backdrop_path;
  }

  const bannerStyle = {
    backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, 0.3) 70%, black) ,url(https://image.tmdb.org/t/p/original/${backdrop})`,
  };

  return props.bannerInfo ? (
    <div className={classes.bannerContainer}>
      <div className={classes.banner} style={bannerStyle}></div>
    </div>
  ) : null;
};

export default Banner;
