import React from 'react';
import classes from './search.module.css';

const serach = (props)=>{
    return(
        <div className={classes.searchContainer}>
            <input type="text" name="text" placeholder="username...." onChange={props.inputChange}/>
            <button type="submit" className={classes.submitBtn} onClick={props.search}>search</button>
        </div>
    );
}

export default serach;