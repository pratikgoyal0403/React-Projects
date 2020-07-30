import React from "react";
import Header from "./components/Header/Header";
import Banner from "./components/banner/banner";
import Product from "./components/product/product";
import Cart from "./components/cart/cart";
import data from "./products.json";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/actions/storeActions";
import "./app.css";

class App extends React.Component {
  state = {
    products: data,
  };

  addToCartHandler = (index) => {
    this.props.onAddToCart(this.state.products[index]);
  };

  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header />
          <Route path="/" exact>
            <div className="shopContainer">
              <Banner />
              <div className="products">
                {this.state.products.map((product, index) => (
                  <Product
                    key={index}
                    product={product}
                    clicked={() => this.addToCartHandler(index)}
                    fromCart={false}
                  />
                ))}
              </div>
            </div>
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (item) => dispatch(actions.addItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(App);
