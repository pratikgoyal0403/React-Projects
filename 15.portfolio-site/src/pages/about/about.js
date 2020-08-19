import React from "react";
import Header from "../../components/header/header";
import { motion } from "framer-motion";
import classes from "./about.module.css";

const About = () => {
  return (
    <motion.div
      className={classes.aboutWrapper}
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: .5,
      }}
    >
      <div></div>
      <p>
        hello world this is me pratik goyal who wants to work as web dev hello
        world this is me pratik goyal who wants to work as web dev hello world
        this is me pratik goyal who wants to work as web dev hello world this is
        me pratik goyal who wants to work as web dev hello world this is me
        pratik goyal who wants to work as web dev
      </p>
    </motion.div>
  );
};

export default About;
