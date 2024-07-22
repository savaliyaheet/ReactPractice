import React, { useState } from "react";

function FormHandlingUseState() {
  const [name, setName] = useState({ firstname: "", lastname: "" });
  return (
    <div>
      <input
        type="text"
        value={name.firstname}
        onChange={(e) => setName({ ...name, firstname: e.target.value })}
      />
      <input
        type="text"
        value={name.lastname}
        onChange={(e) => setName({ ...name, lastname: e.target.value })}
      />
      <h2>The firstname is {name.firstname}</h2>
      <h2>The firstname is {name.lastname}</h2>

      <h2>{JSON.stringify(name)}</h2>
      <p>
        Note: We need to merge the object value manually using spread operator
        because react defaultlly replace the object instead of merging.
      </p>
    </div>
  );
}

export default FormHandlingUseState;
