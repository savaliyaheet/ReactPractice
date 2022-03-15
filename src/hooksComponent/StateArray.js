import React, { useState } from "react";

function StateArray() {
  const [items, setItems] = useState([]);
  const clickAdder = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10),
      },
    ]);
  };
  return (
    <div>
      <button onClick={clickAdder}>Add a Random Number to the list</button>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>
    </div>
  );
}

export default StateArray;
