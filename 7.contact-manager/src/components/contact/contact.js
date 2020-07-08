import React from "react";
import classes from "./contact.module.css";

const Contact = (props) => {
  return (
    <div className={classes.contact}>
      <div className={classes.contactInfo}>
        <h3>{props.name}</h3>
        <p>{props.email}</p>
        <p>{props.phone}</p>
        <div className={classes.controlBtns}>
          <button
            className={classes.editBtn}
            onClick={(e) => props.editClicked(e, props.id)}
          >
            Edit
          </button>
          <button
            className={classes.deleteBtn}
            onClick={(e) => props.deleteContact(e, props.id)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className={classes.contactType}>
        <h6 className={classes.personalContact}>{props.contactType}</h6>
      </div>
    </div>
  );
};

export default Contact;
