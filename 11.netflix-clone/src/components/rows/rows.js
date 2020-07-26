import React from "react";
import Row from "./row/row";
import classes from "./rows.module.css";

const rows = (props) => {
  return (
    <div className={classes.rowContainer}>
      <h1>{props.heading}</h1>
      <div className={classes.row}>
        {props.movies.map((movie, index) => (
          <Row
            key={index}
            details={movie}
            clicked={() => props.clicked(movie)}
          />
        ))}
      </div>
    </div>
  );
};

export default rows;
