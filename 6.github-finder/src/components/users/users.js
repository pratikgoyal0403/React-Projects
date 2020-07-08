import React from 'react';
import User from './user/user';
import Spinner from '../spinner/spinner';
import classes from './users.module.css';

const users = (props)=>{
    let user = <Spinner />
        if(!props.loading){
            user = props.users.map(user=>(
                <User imageUrl={user.avatar_url} name={user.login} url={user.html_url} key={user.id}/>
            ));
        }
    
    return(
        <div className={classes.usersContainer}>
            {user}
        </div>
    );
}

export default users;