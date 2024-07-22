import React, { Component } from "react";

class GreetClass extends Component {
  render() {
    return <h1>Greetings from class component, {this.props.name}</h1>;
  }
}

export default GreetClass;
