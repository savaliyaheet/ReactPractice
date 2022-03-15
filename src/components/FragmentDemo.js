import React from "react";
let numbers = [];

function FragmentDemo() {
  return (
    // To avoid adding addtional div you can use React.Fragment to avoid adding extra div
    <React.Fragment>
      {/* <p>
        Hello, This is wrap inside <b>React.Fragment</b>
      </p> */}
      {
          numbers.map((number,index) => (
              <React.Fragment key={number.id}>
                <p>{number.title}</p>
              </React.Fragment>
          ))
          // We can define key only for React.Fragment
      }
    
    </React.Fragment>
  );
}

export default FragmentDemo;
