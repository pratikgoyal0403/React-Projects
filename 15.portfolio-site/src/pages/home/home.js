import React from "react";
import Header from "../../components/header/header";
import { motion } from "framer-motion";
import classes from "./home.module.css";

const Home = (props) => {
  return (
    <motion.div
      className={classes.homeContent}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5 }}
    >
      <h1>
        <span>P</span>
        <span>R</span>
        <span>A</span>
        <span>T</span>
        <span>E</span>
        <span>E</span>
        <span>K</span>
        <span>&nbsp;</span>
        <span>G</span>
        <span>O</span>
        <span>Y</span>
        <span>A</span>
        <span>L</span>
      </h1>
      <p>full stack web developer</p>
    </motion.div>
  );
};

export default Home;
