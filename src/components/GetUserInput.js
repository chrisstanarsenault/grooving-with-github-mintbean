import React from "react";

import "../styles/GetUserInput.scss";

export default function GetUserInput() {
  return (
    <div>
      <h3>Enter the username of the user you'd like to see</h3>
      Username: <input></input>
      <button>Find Me That User!</button>
    </div>
  );
}
