import React from "react";
import Main from "./containers/main/main";
import Header from "./components/header/header";
import Login from "./containers/auth/login";
import Profile from "./containers/profile/profile";
import Signup from "./containers/auth/signup";
import Alert from './components/UI/alert/alert';
import { Route, withRouter } from "react-router-dom";
import * as actions from "./store/actions/index";
import { connect } from "react-redux";
import "./App.css";

class App extends React.Component {
  state = {
    loading: false,
  };
  componentWillMount() {
    const token = localStorage.getItem("id");
    if (token) {
      this.props.onSetAuth(token);
    }
  }
  signoutHandler = () => {
    localStorage.removeItem("id");
    window.location.reload();
    this.props.history.replace("/login");
  };
  loadingHandler = ()=>{
    this.setState({loading: true})
  }
  stopLoading = ()=>{
    this.setState({loading: false})
  }
  render() {
    let load = (
      <Login alterLoading={this.loadingHandler} loading={this.state.loading} />
    );
    if (this.props.isAuth) {
      load = <Main stopLoading={this.stopLoading}/>;
    }
    return (
      <div className="appContainer">
        <Header
          auth={this.props.isAuth}
          userInfo={this.props.userInfo}
          signout={this.signoutHandler}
        />
        {this.props.error ? <Alert>{this.props.error}</Alert>: null}
        <Route path="/" exact render={() => load} />
        <Route
          path="/profile"
          render={() =>
            this.props.isAuth ? (
              <Profile />
            ) : (
              <Login
                alterLoading={this.loadingHandler}
                loading={this.state.loading}
              />
            )
          }
        />
        <Route
          path="/login"
          render={() => (
            <Login
              alterLoading={this.loadingHandler}
              loading={this.state.loading}
            />
          )}
        />
        <Route
          path="/signup"
          component={Signup}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducer.userInfo,
    isAuth: state.userReducer.isAuth,
    error: state.userReducer.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetAuth: (token) => dispatch(actions.getTokenAndSet(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
