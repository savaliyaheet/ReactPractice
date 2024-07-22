import React, { useState, useEffect } from "react";

function TimerHook() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const timer = setInterval(tick, 1000);

    return () => {
      console.log("component unmounted");
      clearInterval(timer);
    };
  }, []);
  return <div>{count}</div>;
}

export default TimerHook;
