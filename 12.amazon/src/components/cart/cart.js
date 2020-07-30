import React from "react";
import OrderSummary from "../orderSummary/orderSummary";
import Product from "../product/product";
import * as actions from "../../store/actions/storeActions";
import { connect } from "react-redux";
import classes from "./cart.module.css";

const Cart = (props) => {
  const removeItemsHandler = (product) => {
    props.onItemRemove(product);
  };

  return (
    <div className={classes.cartWrapper}>
      <div className={classes.cartTopSection}>
        <div></div>
        <img src="./assests/cart-ad.png" alt="amazon original" />
        <OrderSummary cartItems={props.cartItems} />
      </div>
      <div className={classes.cartItem}>
        <h1>Your Shopping Cart</h1>
        <hr />
        {props.cartItems.length > 0
          ? props.cartItems.map((product, index) => (
              <Product
                key={index}
                product={product}
                fromCart={true}
                clicked={() => removeItemsHandler(product)}
              />
            ))
          : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onItemRemove: (product) => dispatch(actions.removeItem(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
