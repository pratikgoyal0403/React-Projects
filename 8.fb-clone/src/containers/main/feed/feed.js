import React from "react";
import Post from "../../../components/post/post";
import Spinner from "../../../components/UI/spinner/spinner";
import { connect } from "react-redux";
import * as action from "../../../store/actions/index";
import classes from "./feed.module.css";

class Feed extends React.Component {
  state = {
    personalPosts: null,
  };
  componentDidMount() {
    if (this.props.fetchAll) {
      this.props.onFetchingPosts(this.props.token);
      this.setState({
        personalPosts: null,
      });
    } else {
      // this.setState({ isLoading: true });
      // fetch("http://localhost:5050/post/" + this.props.userId)
      //   .then((result) => result.json())
      //   .then((post) => {
      //     this.setState({ personalPosts: post.posts });
      //   })
      //   .catch((err) => console.log(err));
      const posts = this.props.posts.filter(
        (post) => post.userInfo.userId === this.props.userId
      );
        this.setState({
          personalPosts: posts
      })
    }
  }



  render() {
    let posts = this.props.posts;
    if (!this.props.fetchAll && this.state.personalPosts) {
      posts =
        this.state.personalPosts.length > 0
          ? this.state.personalPosts
          : "you haven't posted anything yet";
    }
    let post = <Spinner />;
    if (posts.length > 0) {
      post =
        typeof posts === "string"
          ? posts
          : posts.map((post) => (
              <Post
                key={post._id}
                id={post._id}
                caption={post.caption}
                image={post.imageUrl}
                userInfo={post.userInfo}
                currentUser={this.props.userInfo}
                comments={post.comments}
                onDelete={()=> this.props.onPostDelete(post._id)}
              />
            ));
    }
    return <div className={classes.feed}>{post}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.postReducer.posts,
    userInfo: state.userReducer.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchingPosts: (token) => dispatch(action.fetchPost(token)),
    onPostDelete: (postId) => dispatch(action.requestdeletePost(postId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
