import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./header.module.css";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const navigationClasses = [classes.menu, classes.open];

  const menuExpansionHandler = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <header className={classes.header}>
        <nav>PRATIK GOYAL</nav>
        <nav className={classes.hamburger} onClick={menuExpansionHandler}>
          <div className={expanded ? classes.rotate : null}></div>
          <div className={expanded ? classes.hide : null}></div>
          <div className={expanded ? classes.oppRotate : null}></div>
        </nav>
      </header>
      <ul
        className={
          expanded ? navigationClasses.join(" ") : navigationClasses[0]
        }
      >
        <NavLink to="/" exact activeClassName={classes.active}>
          <li onClick={menuExpansionHandler}>HOME</li>
        </NavLink>

        <NavLink to="/about" activeClassName={classes.active}>
          <li onClick={menuExpansionHandler}>ABOUT</li>
        </NavLink>

        <NavLink to="/projects" activeClassName={classes.active}>
          <li onClick={menuExpansionHandler}>PROJECTS</li>
        </NavLink>

        <NavLink to="/contact" activeClassName={classes.active}>
          <li onClick={menuExpansionHandler}>CONTACT</li>
        </NavLink>
      </ul>
    </>
  );
};

export default Header;
