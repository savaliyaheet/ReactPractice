import React from "react";

function FunctionClickHandler() {
  const clickHandler = () => {
    console.log("Button Clicked");
  };
  return (
    <div>
      <button onClick={clickHandler}>Click ME</button>
      {/* //NOTE: Here handler in not a function call, it is a function, so don't
      include (). */}
    </div>
  );
}

export default FunctionClickHandler;
