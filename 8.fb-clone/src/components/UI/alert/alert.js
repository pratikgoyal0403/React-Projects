import React, {useRef, useEffect} from 'react';
import classes from './alert.module.css';

const Alert = (props)=>{
   
    return( 
        <div className={classes.alertContainer}>
            {props.children}
        </div>
    );
}

export default Alert;