import React, { Component } from "react";
import MemoComp from "./MemoComp";

export class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vishwas",
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        name: "Heet",
      });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    console.log("***** Parent Component *******");
    return (
      <div>
        <p>Parent Component</p>
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
