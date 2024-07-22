import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "heet",
    };
    console.log("constructor A");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps A");
    return null;
  }

  componentDidMount() {
    console.log("ComponentDidMount A");
  }

  render() {
    console.log("LifeCycleA render");
    return (
      <>
        <h1>LifeCYleA</h1>
        <LifeCycleB />
      </>
    );
  }
}

export default LifeCycleA;
