import React, { Component } from "react";
import InputRef from "./InputRef";

export class FocusInputRef extends Component {
  constructor(props) {
    super(props);
    this.focusRef = React.createRef();
  }

  clickHandler = () => {
    this.focusRef.current.focusInput();
  };

  render() {
    return (
      <div>
        <InputRef ref={this.focusRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default FocusInputRef;
