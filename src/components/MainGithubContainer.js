import React, { Component } from "react";
import axios from "axios";

import Title from "./Title";
import GetUserInput from "./GetUserInput";
import DisplayUserArea from "./DisplayUserArea";

import "../styles/MainGithubContainer.scss";
export default class MainGithubContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
    };
    this.fetchUserData = this.fetchUserData.bind(this);
  }

  async fetchUserData(user) {
    let url = `https://api.github.com/users/`;
    let response = await axios.get(`${url}${user}`);
    this.setState({ userInfo: response });
    // console.log(user);
  }

  render() {
    return (
      <div>
        <Title />
        <GetUserInput getUserData={this.fetchUserData} />
        {this.state.userInfo && (
          <DisplayUserArea userInfo={this.state.userInfo} />
        )}
      </div>
    );
  }
}
