import React, { Component } from "react";

export class StateCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  incrementCount() {
    // this.setState({
    //   count: this.state.count + 1,
    // });

    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  decrementCount() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    if (this.state.count === 5) {
      throw new Error("I crashed");
    }
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.incrementCount()}>Increment</button>
        <button onClick={() => this.decrementCount()}>Decrement</button>
      </div>
    );
  }
}

export default StateCounter;
