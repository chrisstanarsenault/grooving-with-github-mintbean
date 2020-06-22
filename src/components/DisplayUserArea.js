import React, { useState } from "react";
import axios from "axios";

import UserAreaHeader from "./UserAreaHeader";
import Repos from "./Repos";

import "../styles/DisplayUserArea.scss";

export default function DisplayUserArea(props) {
  const userInfo = props.userInfo.data;
  const [isReposShowing, setIsReposShowing] = useState(false);
  const [repoData, setRepoData] = useState(null);
  const handleRepoClick = () => {
    setIsReposShowing(!isReposShowing);
    fetchRepoData();
  };

  let fetchRepoData = async () => {
    let url = `https://api.github.com/users/${props.userInfo.data.login}/repos`;
    let response = await axios.get(`${url}`);
    setRepoData({ repoData: response });
    console.log(response);
  };

  return (
    <div>
      <UserAreaHeader userInfo={userInfo} handleRepoClick={handleRepoClick} />
      {isReposShowing && <Repos RepoData={repoData} />}
    </div>
  );
}
