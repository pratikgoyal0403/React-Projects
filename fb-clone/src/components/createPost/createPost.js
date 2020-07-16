import React from 'react';
import classes from './createPost.module.css';

const createPost = ()=>{

    return(
            <form className={classes.createPostForm}>
             <input type="text" placeholder="whats on your mind..." />
                <input type="file" name="postImage" />
                {/* <i className="fa fa-camera" onClick={imageHandler}></i> */}
                <button type="submit" >Post</button>
            </form>
    );
}

export default createPost;