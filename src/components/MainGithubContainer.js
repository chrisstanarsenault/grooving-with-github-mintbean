import React, { Component } from "react";
import axios from "axios";

import Title from "./Title";
import GetUserInput from "./GetUserInput";

import "../styles/MainGithubContainer.scss";

export default class MainGithubContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    this.fetchUserData = this.fetchUserData.bind(this);
  }

  async fetchUserData() {
    let url = "https://api.github.com";
    let response = await axios.get(`${url}`);
    let user = response.current_user_url;
    this.setState({ user: `${user}` });
  }

  render() {
    return (
      <div>
        <Title />
        <GetUserInput />
        <button onClick={this.fetchUserData}>Test</button>
        {console.log(this.state.user)}
      </div>
    );
  }
}
