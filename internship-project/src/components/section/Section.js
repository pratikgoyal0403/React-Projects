import React from "react";
import classes from "./Section.module.css";
import Heading from "../Heading/Heading";
import Button from "../button/Button";
import Cards from "../cards/Cards";

const Section = ({items, heading}) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Heading heading={heading }/>
        <Button />
      </div>
      <div className={classes.cardsContainer}>
        <Cards items={items}/>
      </div>
    </div>
  );
};

export default Section;
