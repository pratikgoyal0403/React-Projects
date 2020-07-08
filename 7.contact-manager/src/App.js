import React, { Component } from "react";
import Header from "./components/header/header";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import Main from "./container/main";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    isLoggedIn: false,
    userName: null,
    token: null,
    userId: null
  };
  componentDidMount(){
    const token = localStorage.getItem('cm-token');
    const userId = localStorage.getItem('cm-userId');
    if(token){
      this.setState({isLoggedIn: true, token: token, userId});
    }
  }
  loginHandler = (e, credentials) => {
    e.preventDefault();
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((result) => result.json())
      .then((res) => {
        localStorage.setItem('cm-token', res.token);
        localStorage.setItem('cm-userId', res.user._id);
        this.setState({ isLoggedIn: true, userName: res.user.username, token: res.token });
      })
      .catch((err) => console.log(err));
  };
  signupHandler = (e, credentials) => {
    e.preventDefault();
    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((user) => user.json())
      .then((result) => {
        console.log('user sucessfully created');
      })
      .catch((err) => console.log(err));
  };
  render() {
    let app = <Login submit={this.loginHandler} />;
    if (this.state.isLoggedIn) {
      app = <Main userId={this.state.userId}/>;
    }
    return (
      <React.Fragment>
        <Header loggedIn={this.state.isLoggedIn} userName={this.state.userName}/>
        <Router>
          <Route path="/" exact>
            {app}
          </Route>
          <Route path="/signup">
            <Signup submit={this.signupHandler} />
          </Route>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
