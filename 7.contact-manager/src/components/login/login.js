import React, { useState } from 'react';
import classes from './login.module.css';

const Login = (props)=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    return (
        <div className={classes.loginContainer}>
            <form onSubmit={e => props.submit(e, {email: email, password: password})}>
                <input type="text" placeholder="Email..." onChange={e => setEmail(e.target.value)} required/>
                <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} required/>
                <button type="submit" className={classes.submitBtn}>Login</button>
            </form>
        </div>
    );
}

export default Login;