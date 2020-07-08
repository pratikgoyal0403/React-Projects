import React from "react";
import classes from "./header.module.css";

const Header = (props) => {
  let link = (
    <React.Fragment>
      <a href="/">Login</a>
      <a href="/signup">Signup</a>
    </React.Fragment>
  );
  if(props.loggedIn){
    link = (
      <p>
      hello {props.userName} <i className={["fa", "fa-sign-out"].join(" ")}></i> logout
    </p>
    );
  }
  return (
    <header className={classes.header}>
      <nav className={classes.siteName}>
        <h1 className={classes.primaryHeading}>
          <i className={["fa", "fa-address-book-o"].join(" ")}></i> Contact
          keeper
        </h1>
      </nav>
      <nav className={classes.headerOptions}>
        { link }
      </nav>
    </header>
  );
};

export default Header;
