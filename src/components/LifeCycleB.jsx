import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "heet"
    };
    console.log("constructor B");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps B");
    return null;
  }

  componentDidMount() {
    console.log("ComponentDidMount B");
  }

  render() {
    console.log("LifeCycleB render");
    return <div>LifeCycleB</div>;
  }
}

export default LifeCycleB;
