import React, { Component } from "react";

class MouseTracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  mouseHandler = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render() {
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.mouseHandler}>
        <p>The Current position of mouse is {this.state.x}, {this.state.y}</p>
      </div>
    );
  }
}

export default MouseTracker;
