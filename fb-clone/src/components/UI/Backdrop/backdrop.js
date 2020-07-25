import React from "react";
import classes from "./backdrop.module.css";

const backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.clicked}>
    </div>
  );
};

export default backdrop;
