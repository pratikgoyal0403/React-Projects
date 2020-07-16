import React from 'react';
import classes from './postComment.module.css';

const postComment = (props)=>{
    return(
        <form className={classes.postCommentForm}> 
            <input type="text" placeholder="Write a comment" name="comment" />
        </form>
    );
}

export default postComment;