import React from "react";
import Avatar from "../../components/avatar/avatar";
import Modal from "../../components/UI/modal/modal";
import Backdrop from "../../components/UI/Backdrop/backdrop";
import Spinner from "../../components/UI/spinner/spinner";
import Feed from "../main/feed/feed";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import classes from "./profile.module.css";

class Profile extends React.Component {
  state = {
    showModal: false,
    userInfo: null,
    editable: false,
  };
  componentDidMount() {
    const urlId = this.props.location.search.split("=")[1].toString();
    if (urlId === this.props.currentUserInfo._id.toString()) {
     
      this.setState({ userInfo: this.props.currentUserInfo, editable: true });
    } else {
      // this.props.getUserProfile(urlId);
      fetch("http://localhost:5050/user/" + urlId)
        .then((result) => result.json())
        .then((user) => {
         
          this.setState({ userInfo: user.user, editable: false });
        })
        .catch((err) => console.log(err));
    }
  }
  showModalHandler = () => {
    this.setState({
      showModal: true,
    });
  };
  dismissModal = () => {
    this.setState({
      showModal: false,
    });
  };
  submitProfileEdit = (username, image) => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("userId", this.state.userInfo._id);
    formData.append("image", image);
    this.props.onProfileUpdate(formData);
    this.setState({
      showModal: false,
    });
  };

  render() {

    let backdrop = null;
    if (this.state.showModal) {
      backdrop = (
        <>
          <Backdrop clicked={this.dismissModal} />
          <Modal
            userInfo={this.state.userInfo}
            clicked={this.submitProfileEdit}
          />
        </>
      );
    }

    let enableEdit = null;
    if (this.state.editable) {
      enableEdit = (
        <button className={classes.btn} onClick={this.showModalHandler}>
          EditProfile
        </button>
      );
    }

    let main = <Spinner />;
    if (this.state.userInfo) {
      main = (
          <>
        <div className={classes.profileInfo}>
          <div className={classes.profileImageContainer}>
            <Avatar imageUrl={this.state.userInfo.profileImg} />
          </div>
          <div className={classes.personalInfo}>
            <div className={classes.info}>
              <h1>{this.state.userInfo.username}</h1>
              <h2>{this.state.userInfo.email}</h2>
            </div>
            {enableEdit}
            <hr />
          </div>
        </div>
        <div className={classes.userFeed}>
            <Feed fetchAll={false} userId={this.state.userInfo._id}/>
        </div>
        </>  
      );
    }
    return (
      <div className={classes.profilePage}>
        {main}
        {backdrop}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUserInfo: state.userReducer.userInfo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onProfileUpdate: (formData) => dispatch(actions.postUserUpdate(formData)),
    // onUserPosts: (userId)=> dispatch(actions.userPosts(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Profile));
