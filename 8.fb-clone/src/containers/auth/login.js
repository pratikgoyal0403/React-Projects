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
        this.props.alterLoading()
        const formData = new FormData();
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);
        this.props.onLogin(formData, this.props.history);
    }
    resetPassword = ()=>{
        if(this.state.email === ''){
            return console.log('email cannot be empty');
        }
        const formData = new FormData();
        formData.append('email', this.state.email);
        fetch('http://localhost:5050/reset', {
            method: 'POST',
            body: formData
        });
        console.log(this.props.history)
    }
    render(){
        return(
              <div className={classes.authContainer}>
                <h1>Facebook</h1>
                <form onSubmit={this.formSubmitHandler}>
                    <input type="text" name="email" placeholder="email..." onChange={this.emailHandler}/>
                    <input type="password" name="password" placeholder="password..." onChange={this.passwordHandler}/>
                    <button type="submit">{this.props.loading ? 'Loging...' : 'login'}</button>
                </form>
                <p className={classes.forgotPasswordLink}>forgot password? <button onClick={this.resetPassword}>reset password</button></p>
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