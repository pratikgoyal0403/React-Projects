import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import postReducer from "./store/reducers/postReducer";
import userReducer from './store/reducers/userReducer';
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  postReducer,
  userReducer
})

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <App/>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
