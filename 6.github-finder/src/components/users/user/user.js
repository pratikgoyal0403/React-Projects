import React from 'react';
import classes from './user.module.css';

const user = (props)=>{
    return(
        <div className={classes.userCard}>
            <img src={props.imageUrl} className={classes.cardImage} />
            <p>{props.name}</p>
            <a href={props.url} className={classes.btn}>View profile</a>
        </div>

    );
}


export default user;