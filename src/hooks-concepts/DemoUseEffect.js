import React, { useState, useEffect } from "react";

function DemoUseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("use Effect callled");
    document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount((prev) => prev + 1)}>
        You clicked {count} times
      </button>
    </div>
  );
}

export default DemoUseEffect;
