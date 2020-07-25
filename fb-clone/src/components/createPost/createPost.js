import React, { useState } from "react";
import Alert from '../UI/alert/alert'; 
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import { generateBase64 } from "../../util/generateBase64";
import classes from "./createPost.module.css";

const CreatePost = (props) => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const validateInput = (event) => {
    const file = event.target.files[0];
    if(file && file.name.search(' ') > 0){
      setError('image name must not contain spaces');
      return ;
    }else{
      setError(null);
      imageHandler(file)
    }
  };

  const captionHandler = (event) => {
    setCaption(event.target.value);
  };
  const imageHandler = (file) => {
    setImage(file);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const form = new FormData();
    form.append("caption", caption);
    form.append("userId", props.userInfo._id);
    form.append("username", props.userInfo.username);
    form.append("userImg", props.userInfo.profileImg);
    form.append("image", image);
    props.onSubmitPost(form);
  };

  return (
    <form
      className={classes.createPostForm}
      onSubmit={formSubmitHandler}
      encType="multipart/form-data"
    >
      {error? <Alert>{error}</Alert>: null}
      <input
        type="text"
        placeholder="whats on your mind..."
        onChange={captionHandler}
        required
      />
      <input
        type="file"
        name="postImage"
        onChange={validateInput}
      />
      {/* <i className="fa fa-camera" onClick={imageHandler}></i> */}
      <button type="submit">Post</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitPost: (form) => dispatch(actions.postCreationStart(form)),
  };
};

export default connect(null, mapDispatchToProps)(CreatePost);
