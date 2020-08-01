import React from "react";
import Comments from "../comments/comments";
import { Link } from "react-router-dom";
import Avatar from "../avatar/avatar";
import classes from "./post.module.css";

const Post = (props) => {
  const likeHandler = (event) => {
    if (event.target.classList.contains("fa-thumbs-o-up")) {
      event.target.style.color = "#0A79DF";
      event.target.classList.replace("fa-thumbs-o-up", "fa-thumbs-up");
    } else {
      event.target.style.color = "black";
      event.target.classList.replace("fa-thumbs-up", "fa-thumbs-o-up");
    }
  };
  return (
    <div className={classes.post}>
      <div className={classes.postHeader}>
        <div className={classes.avatarContainer}>
          <Link to={`/profile?id=${props.userInfo.userId}`}>
            <Avatar imageUrl={props.userInfo.imageUrl} />
          </Link>
        </div>
        <div className={classes.usernameContainer}>
          <Link to={`/profile?id=${props.userInfo.userId}`}>
            <h5>{props.userInfo.username}</h5>
          </Link>
          {props.currentUser._id === props.userInfo.userId ? (
            <i className="fa fa-trash" onClick={props.onDelete}></i>
          ) : null}
        </div>
      </div>
      <p className={classes.caption}>{props.caption}</p>
      <img
        src={`http://localhost:5050/${props.image}`}
        alt="post-img"
        width="100%"
      />
      <div className={classes.postOptions}>
        <i className="fa fa-thumbs-o-up" onClick={likeHandler}>
          &nbsp;Like
        </i>
        <i className="fa fa-comment-o">&nbsp;Comment</i>
      </div>
      <div className={classes.comments}>
        <Comments
          postId={props.id}
          userId={props.currentUser._id}
          comments={props.comments}
        />
      </div>
    </div>
  );
};

export default Post;
