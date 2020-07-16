import React from 'react';
import classes from './comment.module.css';

const comment = (props)=>{
    return (
        <div className={classes.commentContainer}>
            <p className={classes.userName}>pratik goyal</p>
            <p>awesome bro </p>
        </div>
    );
}


export default comment;