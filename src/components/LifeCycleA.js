import React, { Component } from "react";

export class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "XYZ",
    };
    console.log("constructor A ");
  }

 
  render() {
    // console.log("LifeCycle A");
    return <div>LifeCycleA</div>;
  }
}

export default LifeCycleA;
