import React, { Component } from 'react';
import classes from './auth.module.css'

class Login extends Component{
    render(){
        return(
            <div className={classes.authContainer}>
                <h1>Facebook</h1>
                <form>
                    <input type="text" name="username" placeholder="username..." />
                    <input type="text" name="email" placeholder="email..." />
                    <input type="password" name="password" placeholder="password..." />
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;