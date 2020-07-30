import React from "react";
import ReactDOM from "react-dom";
import storeReducer from "./store/reducers/storeReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";

const store = createStore(
  storeReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
