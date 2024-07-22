import React from "react";

function GreetFunctional(props) {
  return (
    <div>
      <h1>Hello {props.name} ,Greet Functional</h1>
      {props.children}
    </div>
  );
}

export default GreetFunctional;
