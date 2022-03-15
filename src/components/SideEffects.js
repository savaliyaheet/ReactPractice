import React, { Component } from "react";

export class SideEffects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times.`;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Component Updated");
      document.title = `Clicked ${this.state.count} times`;
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.clickHandler}>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default SideEffects;
