import React, { useState } from "react";

function StateHooks() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };

  const decrementCounter = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
}

export default StateHooks;
