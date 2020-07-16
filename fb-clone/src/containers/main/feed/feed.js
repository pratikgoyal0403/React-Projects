import React from 'react';
import Post from '../../../components/post/post';
import classes from './feed.module.css';

class Feed extends React.Component{
    render(){
        return(
        <div className={classes.feed}> 
            <Post />
        </div>
        );
    }
}


export default Feed;