import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.hRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }

  clickHandler = (e) => {
    alert(this.inputRef.current.value)
  }
  render() {
    return (
      <div ref={this.hRef}>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;

// The value of the ref differs depending on the type of the node:

// When the ref attribute is used on an HTML element, the ref created in the constructor with React.createRef() receives the underlying DOM element as its current property.

// When the ref attribute is used on a custom class component, the ref object receives the mounted instance of the component as its current.

// You may not use the ref attribute on function components because they don’t have instances.
