import React from "react";
import { motion } from "framer-motion";
import classes from "./project.module.css";

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Project = (props) => {
  return (
    <motion.div className={classes.projectContainer} variants={item}>
      <img
        src={props.imageUrl}
        alt="project-img"
        className={classes.projectImg}
      />
      <div className={classes.overlay}>
        <p>{props.title}</p>
        <div className={classes.controls}>
          {props.github ? <a href={props.github}>view on github</a> : null}
          {props.liveDemo ? <a href={props.liveDemo}>Live demo</a> : null}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
