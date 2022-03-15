import React from "react";

function FunctionEventHandler() {
  function clickHandler() {
    console.log("Button clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
}

export default FunctionEventHandler;
