import React, { Component } from "react";
import UpdatedComponent from "./anHOCWrapper";

class HOChoverCounter extends Component {
  render() {
    const { count, incrementCounter } = this.props;
    console.log(count);
    return (
      <div>
        <h1 onMouseOver={incrementCounter}>
          Count Hover: {count}
        </h1>
      </div>
    );
  }
}

export default UpdatedComponent(HOChoverCounter);
