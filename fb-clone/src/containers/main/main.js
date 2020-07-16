import React, { Component } from 'react';
import CreatePost from '../../components/createPost/createPost';
import Feed from './feed/feed';
import classes from './main.module.css';


class Main extends Component{
    render(){
        return(
            <div className={classes.mainContainer}>
                <div className={classes.createPost}>
                    <CreatePost />
                </div>
                <div className={classes.feedContainer}>
                    <Feed />
                </div>
            </div>
        );
    }
}

export default Main;