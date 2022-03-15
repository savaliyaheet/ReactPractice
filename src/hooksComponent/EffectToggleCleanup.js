import React, { useState } from "react";
import EffectMouseCleanup from "./EffectMouseCleanup";

function EffectToggleCleanup() {
  const [display, setDisplay] = useState(true);
  console.log(display);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <EffectMouseCleanup />}
    </div>
  );
}

export default EffectToggleCleanup;
