import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Heet", "Rahul", "Kartik", "Sanjana"];
  const persons = [
    {
      id: 1,
      name: "Heet",
      age: 22,
      skill: "Java",
    },
    {
      id: 2,
      name: "Rauhl",
      age: 22,
      skill: "React",
    },
    {
      id: 3,
      name: "Ram",
      age: 20,
      skill: "Java",
    },
  ];
  return (
    <div>
      {persons.map((person) => (
        <Person person={person} key={person.id} />
      ))}
      {
        names.map((name, index) => <h1 key={index}>{name}</h1>)
      }
    </div>
  );
}

export default NameList;
