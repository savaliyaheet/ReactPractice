import React, { Component } from "react";
import UpdatedComponent from "./HigherOrderCounter";

export class HoverCounter extends Component {
  

  render() {
    return (
      <div>
        <h1 onMouseOver={this.props.counterHandler}>
          Hover {this.props.count} times
        </h1>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounter);
