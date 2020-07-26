import React from "react";
import classes from "./message.module.css";

const Message = (props) => {  
    const parentClasses = [classes.messages, classes.myMessages];  
  return (
    <div className={props.name === props.user ? parentClasses.join(' '): parentClasses[0]}>
      <p
        className={props.name === props.user ? classes.sent : classes.received}
      >
        {props.text}
      </p>
      <span>{props.user}</span>
    </div>
  );
};

export default Message;
