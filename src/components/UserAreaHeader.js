import React, { useState } from "react";
import Moment from "react-moment";

export default function UserAreaHeader(props) {
  if (props.userInfo.name === null) {
    return <h3>No User Found</h3>;
  } else {
    return (
      <div>
        <img src={props.userInfo.avatar_url} />
        <div>
          <h3>{props.userInfo.name}</h3>
          <span>
            <a href={props.userInfo.html_url}>{props.userInfo.login}</a>
          </span>
          <ul>
            <li>{props.userInfo.location}</li>
            <li>Public Repos: {props.userInfo.public_repos}</li>
            <li>Public Gists: {props.userInfo.public_gists}</li>
            <li>Followers: {props.userInfo.followers}</li>
            <li>Following: {props.userInfo.following}</li>
            <li>
              Githubbing Since:{" "}
              <Moment format="MMMM DD, YYYY">
                {props.userInfo.created_at}
              </Moment>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
