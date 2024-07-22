import React from "react";

class StateMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hello Guest",
    };
  }
  changeMessage() {
    console.log("Clicked");
    this.setState({
      message: "Thank you for Subscribing",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default StateMessage;
