import React from 'react';
import classes from './spinner.module.css';

const spinner = (props)=>{
    return (
        <div className={classes.spinnerContainer}>
            <div className={classes.spinner}></div>
        </div>
    );
}

export default spinner;