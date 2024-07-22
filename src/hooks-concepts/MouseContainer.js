import React, { useState } from "react";
import EffectMouse from "./EffectMouse";

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <p>The useEffect returns a function which can be used to unmounting, unscribing the events. Also called as a Clean up code.</p>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <EffectMouse />}
    </div>
  );
}

export default MouseContainer;
