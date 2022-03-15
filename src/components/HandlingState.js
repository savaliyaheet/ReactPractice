import React, { Component } from "react";

class HandlingState extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello Visitor",
      message2: "Welcome"
    };
  }
  changeState() {
    console.log("BTN CLICKED")
    this.setState({
      message: "You have Subscribed",
      message2: "Visit the Channel"
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <p>{this.state.message2}</p>
        <button onClick={() => this.changeState()}>Subscribe</button>
      </div>
    );
  }
}

export default HandlingState;
