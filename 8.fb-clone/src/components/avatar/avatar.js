import React from "react";
import classes from "./avatar.module.css";

const Avatar = (props) => {
  let src = "./assests/default-profile.png";
  if (props.imageUrl) {
      const url = props.imageUrl.split('\\').join('/');
    src = `http://localhost:5050/${url}`;
  }
  return (
    <div
      className={classes.avatarContainer}
      style={{ backgroundImage: 'url('+ src +')'}}
    >
    </div>
  );
};

export default Avatar;
