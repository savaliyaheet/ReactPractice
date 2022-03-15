import React, { Component } from "react";

export class ClassEventHandler extends Component {
  clickHandler() {
    console.log("Class btn clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}

export default ClassEventHandler;
