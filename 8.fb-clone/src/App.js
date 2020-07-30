import React from 'react';
import Main from './containers/main/main';
import Header from './components/header/header';
import Login from './containers/auth/login';
import Profile from './containers/profile/profile';
import Signup from './containers/auth/signup';
import {Route, withRouter} from 'react-router-dom';
import * as actions from './store/actions/index';
import { connect } from 'react-redux';
import './App.css';

class App extends React.Component{
  componentWillMount(){
    const token = localStorage.getItem('id');
    if(token){
      this.props.onSetAuth(token);
    }
  }
  render(){
    let load = <Login />
    if(this.props.isAuth){
      load = <Main />
    }
    return (
      <div className="appContainer">
        <Header auth={this.props.isAuth} userInfo={this.props.userInfo}/>
        <Route path="/" exact render={()=> load}/>
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    userInfo: state.userReducer.userInfo,
    isAuth: state.userReducer.isAuth
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    onSetAuth: (token)=> dispatch(actions.getTokenAndSet(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
