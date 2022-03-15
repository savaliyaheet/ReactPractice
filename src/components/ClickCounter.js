import React, { Component } from "react";
import UpdatedComponent from "./HigherOrderCounter";

export class ClickCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.counterHandler}>
          Clicked {this.props.count}{this.props.name} times
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter);
