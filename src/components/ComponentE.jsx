import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./userContext";

class ComponentE extends Component {
  render() {
    return (
      <div>
        <p>Component E: {this.context.name} {this.context.age}</p>
        {/* <ComponentF /> */}
      </div>
    );
  }
}

ComponentE.contextType = UserContext;

export default ComponentE;
