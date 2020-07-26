import React from "react";
import classes from "./input.module.css";

const Input = (props) => {
  return (
    <div className={classes.inputContainer}>
      <input
        className={classes.inputFeild}
        type="text"
        placeholder="search youtube.."
        onChange={props.changed}
        onKeyPress={(e) => (e.key === "Enter" ? props.submit(e) : null)}
      />
    </div>
  );
};

export default Input;
