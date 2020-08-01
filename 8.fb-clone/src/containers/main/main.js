import React, { Component } from 'react';
import CreatePost from '../../components/createPost/createPost';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Feed from './feed/feed';
import classes from './main.module.css';


class Main extends Component{

    componentWillMount(){
        this.props.stopLoading()
    }
    render(){
        const token = localStorage.getItem('id');
        return(
            <div className={classes.mainContainer}>
                <div className={classes.createPost}>
                    <CreatePost userInfo={this.props.userInfo}/>
                </div>
                <div className={classes.feedContainer}>
                    <Feed token={token} fetchAll={true}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        userInfo: state.userReducer.userInfo
    }
}

export default connect(mapStateToProps)(withRouter(Main));