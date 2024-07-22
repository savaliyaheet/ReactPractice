import React, { useState } from "react";

function CounterUseState() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>&nbsp;
      <button onClick={() => setCount(prevState => prevState - 1)}>Decrement</button>
    </div>
  );
}

export default CounterUseState;
