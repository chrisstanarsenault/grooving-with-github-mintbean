import React from "react";

export default function Repos(props) {
  const repos = props.repoData;

  if (repos) {
    return (
      <div>
        <h3>Hi</h3>
        <ul>{repos && repos.data.map((repo) => <li>{repo.name}</li>)}</ul>
      </div>
    );
  }
}
