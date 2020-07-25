import React from 'react';
import classes from './comment.module.css';

const comment = (props)=>{
    return (
        <div className={classes.commentContainer}>
            <p className={classes.userName}>{props.username}</p>
            <p>{props.comment} </p>
        </div>
    );
}


export default comment;