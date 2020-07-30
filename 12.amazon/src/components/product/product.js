import React from "react";
import classes from "./product.module.css";

const product = ({ product, clicked, fromCart }) => {
  let arr;
  if (product) {
    arr = new Array(product.rating + 1).join("a").split("");
  }

  return (
    <div className={fromCart ? classes.cartProductCard : classes.productCard}>
      <div>
        <p className={classes.productName}>
          {product.name} {product.description}
        </p>
        <p className={classes.productPrice}>₹{product.price}</p>
        <p className={classes.rating}>
          {arr.map((val, index) => (
            <i key={index} className="fa fa-star"></i>
          ))}
        </p>
        {fromCart ? (
          <button className={classes.addToCartBtn} onClick={clicked}>
            {fromCart ? "remove from cart" : "add to cart"}
          </button>
        ) : null}
      </div>
      <img src={product.imageUrl} alt={product.name} />
      {fromCart ? null : (
        <button className={classes.addToCartBtn} onClick={clicked}>
          {fromCart ? "remove from cart" : "add to cart"}
        </button>
      )}
    </div>
  );
};

export default product;
