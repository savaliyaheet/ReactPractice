import React from "react";

const no = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function ExampleComponent() {
  return <div>{no.reduce((acc, currVal) => acc + currVal,100)}</div>;
}

export default ExampleComponent;
