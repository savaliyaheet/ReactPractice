import React, { Component } from "react";

export class ClassClickHandler extends Component {

  clickHandler() {
    console.log("BUtton clicked");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}

export default ClassClickHandler;
