import React, { useState } from "react";

function ToDoList() {
  const [userInput, setUserInput] = useState("");
  const [addTask, setAddTask] = useState([]);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleClick = () => {
    setAddTask([...addTask, userInput]);
    setUserInput("");
    console.log(addTask);
  };

  const handleDelete = (index) => {
    const filtered = addTask.filter(() => {
      return !addTask[index];
    });
    setAddTask(filtered);
    console.log(filtered);
  };
  return (
    <div>
      <h2>TODO List</h2>
      <input type="text" value={userInput} onChange={handleChange} />
      <button onClick={handleClick}>Add Task</button>
      {addTask.map((task, id) => (
        <div key={id}>
          <span>{task}</span>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ToDoList;
