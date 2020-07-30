import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <Link to="/">
        <nav>
          <img src="./brand-logo.png" alt="amazon" />
        </nav>
      </Link>
      <nav className={classes.searchContainer}>
        <input type="text" name="searchBar" />
        <span className="fa fa-search"></span>
      </nav>
      <nav>
        <div className={classes.headerOptions}>
          <span>Hello, User</span>
          <span>Accounts & Lists</span>
        </div>
        <div className={classes.headerOptions}>
          <span>Returns </span>
          <span>& Orders</span>
        </div>
        <div className={classes.headerOptions}>
          <span>Try</span>
          <span>Prime</span>
        </div>
        <div className={classes.cart}>
          <Link to="/cart">
            <i className="fa fa-shopping-cart"></i>
            <span className={classes.bubble}>{props.cartItems.length}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

export default connect(mapStateToProps)(Header);
