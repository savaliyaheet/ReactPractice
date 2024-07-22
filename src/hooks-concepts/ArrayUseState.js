import React, { useState } from "react";

function ArrayUseState() {
  const [numbers, setNumbers] = useState([]);

  const addNumber = () => {
    setNumbers([...numbers, {
      id: numbers.length,
      value: Math.floor(Math.random() * 10) + 1
    }]);
  };
  return (
    <div>
      <button onClick={addNumber}>Add a number</button>
      <ul>
        {numbers.map((number) => {
          return <li key={number.id}>{number.value}</li>;
        })}
      </ul>
    </div>
  );
}

export default ArrayUseState;
