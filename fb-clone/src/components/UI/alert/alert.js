import React from 'react';
import classes from './alert.module.css';

const alert = (props)=>{
    return(
        <div className={classes.alertContainer}>
            {props.children}
        </div>
    );
}

export default alert;