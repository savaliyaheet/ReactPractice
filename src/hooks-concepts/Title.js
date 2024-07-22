import React from "react";

function Title() {
  console.log("Title rendering");
  return <div>Callback Hooks</div>;
}

export default React.memo(Title);
