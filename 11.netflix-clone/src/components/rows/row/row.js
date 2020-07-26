import React from "react";
import classes from "./row.module.css";

const row = (props) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${props.details.poster_path}`;
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "contain",
        minWidth: "170px",
        height: "250px",
        margin: "0px 10px",
      }}
      onClick={props.clicked}
    ></div>
  );
};

export default row;
