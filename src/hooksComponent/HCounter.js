import React, { useState } from "react";

function HCounter() {
  const [count, setCount] = useState(0);
  const IncreaseHandle = () => {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  };
  const DecreaseHandle = () => {
    // setCount(count - 1);
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={IncreaseHandle}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={DecreaseHandle}>-</button>
    </div>
  );
}

//Always try to use functional argument to setState method as it the safer way by passing prevState as argument of the function and change the state based on prevState
export default HCounter;
