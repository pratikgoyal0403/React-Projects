import React, { useState } from 'react';
import classes from './signup.module.css';

const Signup = (props)=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <div className={classes.signupContainer}>
            <form onSubmit={e => props.submit(e, {username: name, email: email, password: password})}>
                <input type="text" placeholder="Username..." onChange={e => setName(e.target.value)}  required/>
                <input type="text" placeholder="Email..." onChange={e => setEmail(e.target.value)} required/>
                <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} required/>
                <button type="submit" className={classes.submitBtn}>Signup</button>
            </form>
        </div>
    );
}

export default Signup;
