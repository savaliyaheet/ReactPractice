import React, { Component } from "react";
import UpdatedComponent from "./anHOCWrapper";

class HOCclickCounter extends Component {
  render() {
    const { count, incrementCounter, ...otherProps } = this.props;
    console.log(this.props);
    console.log(this.props.name);
    console.log("Count", count);
    return (
      <div>
        <h1>Count: {count} {this.props.name}</h1>
        <button onClick={incrementCounter}>Increment</button>
      </div>
    );
  }
}

export default UpdatedComponent(HOCclickCounter);
