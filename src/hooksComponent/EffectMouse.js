import React, { useState, useEffect } from "react";

function EffectMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const func = (e) => {
    console.log("hover");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("Event added");
    window.addEventListener("mousemove", func);


  }, []);
  return (
    <div>
      Hooks X -{x} Y-{y}
    </div>
  );
}

export default EffectMouse;
