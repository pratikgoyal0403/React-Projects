import * as actionType from "./actiontypes";

export const postCreationSuccessful = (data) => {
  return {
    type: actionType.POST_CREATION_SUCCESSFUL,
    post: data,
  };
};

export const postCreationFailed = (data) => {
  return {
    type: actionType.POST_CREATION_FAILED,
  };
};

export const postCreationStart = (form) => {
  return (dispatch) => {
    fetch("http://localhost:5050/post", {
      method: "POST",
      body: form,
    })
      .then((result) => {
        result.json().then((res) => {
          dispatch(postCreationSuccessful(res.posts));
        });
      })
      .catch((err) => dispatch(postCreationFailed(err)));
  };
};

export const fetchedPost = (posts) => {
  return {
    type: actionType.FETCH_POST,
    posts,
  };
};

export const fetchPost = (token) => {
  return (dispatch) => {
    fetch("http://localhost:5050/posts", {
        headers: {
            Authorization: 'bearer '+token
        }
    })
      .then((result) => {
          if(result.status === 500){
                window.location.reload(); 
          }else{
              return result.json();
          }
      })
      .then((posts) => {
              dispatch(fetchedPost(posts.posts));
      })
      .catch((err) => console.log(err));
  };
};

export const addComment = (updatedPost)=>{
    return {
        type: actionType.ADD_COMMENT,
        updatedPost
    }
}

export const postComment = (formData)=>{
    return dispatch => {
        fetch('http://localhost:5050/comment', {
            method: 'POST',
            body: formData
        }).then(result=> result.json()).then(res=>{
            dispatch(addComment(res.post));
        }).catch(err => console.log(err));
    }
}

const userPosts = (posts) =>{
  return{
    type: actionType.USER_POSTS,
    posts
  }
}

export const getOnlyUserPosts = (userId)=>{
  return dispatch => {

  }
}