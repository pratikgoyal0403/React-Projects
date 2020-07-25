import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import classes from './auth.module.css'

class Login extends Component{
    state = {
        email: '',
        password: ''
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
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);
        this.props.onLogin(formData, this.props.history);
    }
    render(){
        return(
              <div className={classes.authContainer}>
                <h1>Facebook</h1>
                <form onSubmit={this.formSubmitHandler}>
                    <input type="text" name="email" placeholder="email..." onChange={this.emailHandler}/>
                    <input type="password" name="password" placeholder="password..." onChange={this.passwordHandler}/>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch)=>{
    return {
        onLogin: (formData, history)=> dispatch(actions.fetchUser(formData, history))
    }
}

export default connect(null, mapDispatchToProps)(Login);