import React, { Component } from "react";
import { tileProps } from "react-calendar/dist/umd/shared/propTypes";

export class InputRef extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  focusInput() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default InputRef;
