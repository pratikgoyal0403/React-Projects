import React from 'react';
import Comments from '../comments/comments';
import classes from './post.module.css';

const Post = (props)=>{
    const likeHandler = (event)=>{
        if(event.target.classList.contains('fa-thumbs-o-up')){
            event.target.style.color = '#0A79DF';
            event.target.classList.replace('fa-thumbs-o-up', 'fa-thumbs-up');
        }else{
            event.target.style.color = 'black';
            event.target.classList.replace('fa-thumbs-up', 'fa-thumbs-o-up')
        }
    }
    return(
        <div className={classes.post}>
            <h5>USER NAME HERE...</h5>
            <p>caption if any</p>
            <img src="/postImages/mypost.png" alt="post-img" width="100%"/>
            <div className={classes.postOptions}>
                <i className="fa fa-thumbs-o-up" onClick={likeHandler}>&nbsp;Like</i>
                <i className="fa fa-comment-o">&nbsp;Comment</i>
            </div>
            <div className={classes.comments}>
                <Comments />
            </div>
        </div>
    );
}

export default Post;