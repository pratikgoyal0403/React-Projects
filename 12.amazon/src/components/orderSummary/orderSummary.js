import React from "react";
import classes from "./orderSummary.module.css";

const orderSummary = (props) => {
  let total = props.cartItems.reduce((netTotal, curValue) => {
    return netTotal + curValue.price;
  }, 0);

  return (
    <div className={classes.orderSummaryContainer}>
      <p>
        SubTotal ({props.cartItems.length} items): <span>₹{total}</span>
      </p>
      <button className={classes.checkoutBtn}>Proceed to Checkout</button>
    </div>
  );
};

export default orderSummary;
