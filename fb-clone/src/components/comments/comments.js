import React from 'react';
import PostComment from './postComment/postComment';
import Comment from './comment/comment';
import classes from './comments.module.css';

const comments = (props)=>{
    return(
        <div className={classes.commentContainer}>
            <Comment />
            <PostComment />
        </div>
    );
}

export default comments;