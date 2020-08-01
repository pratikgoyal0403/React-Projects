import React from "react";
import { withRouter, Link } from "react-router-dom";
import classes from "./header.module.css";

const Header = (props) => {
    const listClasses = [classes.listItem, classes.activeLink];
  let links = (
    <ul className={classes.navigation}>
      <li className={classes.listItem}>
        <Link to="/login">Login</Link>
      </li>
      <li className={classes.listItem}>
        <Link to="/signup">Signup</Link>
      </li>
    </ul>
  );
  if (props.userInfo !== '') {
    links = (
      <ul className={[classes.navigation, classes.signout].join(' ')}>
        <li className={classes.listItem}>
            <i className="fa fa-sign-out" onClick={props.signout}>{props.userInfo.username}</i>
        </li>
      </ul>
    );
  }
  return (
    <header className={classes.headerContainer}>
      <nav>
        <img src="logo.png" alt="facebook logo" />
      </nav>
      <ul className={classes.navigation}>
        <li className={props.location.pathname === '/' ? listClasses.join(' '): listClasses[0]}>
          <Link to="/">
            <i className="fa fa-home"></i>
          </Link>
        </li>
        <li className={props.location.pathname === '/profile' ? listClasses.join(' '): listClasses[0]}>
        <Link to={`/profile?Id=${props.userInfo._id}`}>
            <i className="fa fa-user"></i>
          </Link>
        </li>
      </ul>
      {links}
    </header>
  );
};

export default withRouter(Header);
