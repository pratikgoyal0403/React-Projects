import React, {useState} from "react";
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import classes from "./postComment.module.css";

const PostComment = (props) => {
    const [comment, setComment] = useState('');
    const [postId] = useState(props.id);
    const [userId] = useState(props.userId);
    const submitOnEnter = (event)=>{
        if(event.keyCode === 13){
            submitHandler();
            props.notCommenting();
        }
    }
    const commentHandler = (event)=>{
        setComment(event.target.value); 
    }
    const submitHandler = ()=>{
        const formData = new FormData();
        formData.append('comment', comment);
        formData.append('postId', postId);
        formData.append('userId', userId);
        props.onCommentSubmit(formData);
    }
    const cancelDefaultSubmission = (event)=>{
        event.preventDefault();
    }
  return (
    <form
      className={classes.postCommentForm}
      onSubmit={cancelDefaultSubmission}
      onKeyDown={submitOnEnter}
    >
      <input
        type="text"
        placeholder="Write a comment"
        name="comment"
        onChange={commentHandler}
        onFocus={props.onCommenting}
        onBlur={props.notCommenting}
      />
    </form>
  );
};

const mapDispatchToProps = (dispatch)=>{
    return {
        onCommentSubmit: (formData) => dispatch(actions.postComment(formData))
    }
}

export default connect(null, mapDispatchToProps)(PostComment);
