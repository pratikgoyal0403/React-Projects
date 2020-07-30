import * as actionTypes from "./actionTypes";

export const addItem = (product) => {
  return {
    type: actionTypes.ADD_TO_CART,
    item: product,
  };
};

export const removeItem = (product) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    product,
  };
};
