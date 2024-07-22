import React, { useState, useEffect } from "react";

function EffectMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMousePosition = (e) => {
    console.log("Mouse move");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("Use effect called");
    window.addEventListener("mousemove", handleMousePosition);

    return () => {
      console.log("Component Unmounting Code");
      window.removeEventListener("mousemove", handleMousePosition);
    };
  }, []);

  return (
    <div>
      Array X - {x} Y - {y}
      <p>
        Note: To call use Effect only once then pass an empty array as the
        dependency.
      </p>
    </div>
  );
}

export default EffectMouse;
