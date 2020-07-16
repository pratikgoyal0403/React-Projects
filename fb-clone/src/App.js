import React from 'react';
import Main from './containers/main/main';
import Header from './components/header/header';
import Login from './containers/auth/login';
import Signup from './containers/auth/signup';
import {Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="appContainer">
      <Header />
      <Route path="/" exact render={()=> <Main />} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </div>
  );
}

export default App;
