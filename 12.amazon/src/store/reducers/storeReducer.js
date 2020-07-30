import * as actionTypes from "../actions/actionTypes";

const initialState = {
  cartItems: [],
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.item],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (p) => p.name !== action.product.name
        ),
      };
    default:
      return state;
  }
};

export default storeReducer;
