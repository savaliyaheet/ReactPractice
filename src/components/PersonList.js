import React from "react";

function PersonList() {
  const Persons = [
    {
      id: 0,
      name: "John",
      age: 34,
      skill: "React",
    },
    {
      id: 1,
      name: "Priya",
      age: 34,
      skill: "React",
    },
    {
      id: 2,
      name: "Ram",
      age: 34,
      skill: "Angualar",
    },
  ];

  
  return <div>{
      Persons.map(person => {
          return <h1 key={person.id} className='danger'>{person.name}</h1>
      })
  }</div>;
}

export default PersonList;
