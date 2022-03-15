import React, { useState, useEffect } from "react";

function EffectMouseCleanup() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const mouseHandler = (e) => {
      console.log("mouse Movement");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    window.addEventListener("mousemove", mouseHandler);

    return () =>{
        console.log("cleanup");
        window.removeEventListener("mousemove", mouseHandler)
    }
  }, []);
  return (
    <div>
      Hooks X-{x} Y-{y}
    </div>
  );
}

export default EffectMouseCleanup;
