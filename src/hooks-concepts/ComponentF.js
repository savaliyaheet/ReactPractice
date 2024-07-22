import React from "react";
import { userContext } from "../App";

function ComponentF() {
  return (
    <div>
      <userContext.Consumer>{
        username => {
          return <p>Component E {username}</p>;
        }
      }</userContext.Consumer>
    </div>
  );
}

export default ComponentF;
