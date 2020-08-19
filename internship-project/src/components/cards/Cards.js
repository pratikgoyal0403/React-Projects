import React from "react";
import classes from "./Cards.module.css";
import Card from "./card/Card";

const Cards = ({ items }) => {
  return (
    <div className={classes.row}>
      {items.map((item) => (
        <Card
          imageUrl={item?.imageUrl}
          title={item?.title}
          questions={item?.questions}
          time={item?.time}
          flashCardTitle={item?.flashCardTitle}
        />
      ))}
    </div>
  );
};

export default Cards;
