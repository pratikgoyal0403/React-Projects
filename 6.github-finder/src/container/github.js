import React, { Component } from "react";
import Header from "../components/header/header";
import Search from '../components/search/search';
import Users from "../components/users/users";

class github extends Component {
  state = {
    users: [],
    loading: false,
    input : '',
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await fetch(
      "https://api.github.com/users?client_id=8d422a6916547704a24d&client_secret=5458bce06474f3befcde26d974903e13ba41a6b1"
    );
    const result = await res.json();
    this.setState({
      users: result,
      loading: false,
    });
  }
  inputChangeHandler = (event)=>{
      this.setState({
          input: event.target.value
      });
  }
  searchUsers = async()=>{
    this.setState({ loading: true });
    const username = this.state.input;
    const res = await fetch(
      `https://api.github.com/search/users?q=${username}&client_id=8d422a6916547704a24d&client_secret=5458bce06474f3befcde26d974903e13ba41a6b1`
    );
    const result = await res.json();
    this.setState({
      users: result.items,
      loading: false,
    });
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Search inputChange={this.inputChangeHandler} search={this.searchUsers}/>
        <Users loading={this.state.loading} users={this.state.users} />
      </React.Fragment>
    );
  }
}

export default github;
