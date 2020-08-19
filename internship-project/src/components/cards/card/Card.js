import React from "react";
import classes from "./card.module.css";

const Card = ({ imageUrl, title, questions, time, flashCardTitle }) => {
  return (
    <div
      className={
        (imageUrl || flashCardTitle) ? classes.card : [classes.card, classes.flex].join(" ")
      }
    >
      {imageUrl && (
        <img src={imageUrl} alt="thumbnail" className={classes.image} />
      )}
      {title && <h4>{title}</h4>}
        {questions && (<div className={classes.cardContent}>
            <p>{questions} Questions</p>
            <p>{time}</p>
      </div>)}
      {flashCardTitle && (
          <div className={classes.flashCard}>
              <h1>{flashCardTitle}</h1>
          </div>
      )}
    </div>
  );
};

export default Card;
