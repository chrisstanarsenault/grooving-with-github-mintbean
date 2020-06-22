import React, { useState } from "react";

import "../styles/GetUserInput.scss";

export default function GetUserInput(props) {
  const [userName, setUserName] = useState(null);
  const handleChange = (e) => setUserName(e.target.value);
  const handleClick = (e) => {
    e.preventDefault();
    props.getUserData(userName);
  };

  return (
    <div>
      <h3>Enter the username of the user you'd like to see</h3>
      <form>
        Username: <input type="text" name="username" onChange={handleChange} />
        <button type="submit" onClick={handleClick}>
          Find Me That User!
        </button>
      </form>
    </div>
  );
}
