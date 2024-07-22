import React, { useState, useEffect, useRef } from "react";

function HookCounterRef() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prevState) => prevState + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      {count}
      <button
        onClick={() => {
          clearInterval(intervalRef.current);
          console.log("interval cleared");
        }}
      >
        Clear Interval
      </button>
    </div>
  );
}

export default HookCounterRef;
