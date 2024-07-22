import React, { Component } from "react";
import MemoComponent from "./MemoComponent";
import PureComp from "./PureComp";
import RegularComponent from "./RegularComponent";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Heet",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Heet Savaliya",
      });
    }, 2000);
  }

  render() {
    console.log("Parent component");
    return (
      <div>
        ParentComp
        <MemoComponent name={this.state.name} />
        {/* <RegularComponent name={this.state.name} /> */}
        {/* <PureComp name={this.state.name} /> */}
      </div>
    );
  }
}

export default ParentComp;
