import React from "react";

function TempBoiler2(props) {
  return (
    <div>
      {props.celsius >= "100" ? (
        <p>The water will Boil</p>
      ) : (
        <p>The water Will not boil</p>
      )}
    </div>
  );
}

export default TempBoiler2;
