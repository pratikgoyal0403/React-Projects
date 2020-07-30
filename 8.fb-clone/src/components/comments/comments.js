import React, { useState } from "react";
import PostComment from "./postComment/postComment";
import Comment from "./comment/comment";
import classes from "./comments.module.css";

const Comments = (props) => {
  const [isCommenting, changeCommenting] = useState(false);
  const onCommenting = () => {
    changeCommenting(true);
  };
  const notCommenting = () => {
    changeCommenting(false);
  };
  return (
    <div className={classes.commentContainer}>
      <div className={classes.comments}>
        {props.comments.map((com) => (
          <Comment
            username={com.username}
            comment={com.comment}
            key={com._id}
          />
        ))}
      </div>
      <PostComment
        id={props.postId}
        userId={props.userId}
        onCommenting={onCommenting}
        notCommenting={notCommenting}
      />
    </div>
  );
};

export default Comments;
