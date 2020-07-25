import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import classes from "./auth.module.css";

class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };
  usernameHandler = (event)=>{
    this.setState({
        username: event.target.value
    })
  }
  emailHandler = (event)=>{
    this.setState({
        email: event.target.value
    })
  }
  passwordHandler = (event)=>{
    this.setState({
        password: event.target.value
    })
  }
  formSubmitHandler = (event)=>{
      event.preventDefault();
      const formData = new FormData();
      formData.append('username', this.state.username);
      formData.append('email', this.state.email);
      formData.append('password', this.state.password);
      this.props.onSignup(formData, this.props.history);
  }
  render() {
    return (
      <div className={classes.authContainer}>
        <h1>Facebook</h1>
        <form onSubmit={this.formSubmitHandler}>
          <input
            type="text"
            name="username"
            placeholder="username..."
            onChange={this.usernameHandler}
          />
          <input
            type="text"
            name="email"
            placeholder="email..."
            onChange={this.emailHandler}
          />
          <input
            type="password"
            name="password"
            placeholder="password..."
            onChange={this.passwordHandler}
          />
          <button type="submit">Signup</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignup: (FormData, history) => dispatch(actions.register(FormData, history)),
  };
};

export default connect(null, mapDispatchToProps)(Signup);
