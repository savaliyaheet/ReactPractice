import React, { Component } from "react";

export class RenderPropsCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={incrementCount}>Increment</button>
      </div>
    );
  }
}

export default RenderPropsCounter;
