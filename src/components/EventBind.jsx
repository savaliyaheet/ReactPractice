import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    {
      /* method 3: bind handler in the constructor */
    }
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   this.setState({
  //     message: "Goodbye",
  //   });
  //   console.log(this);
  // }

  // method 4:You can use public class fields syntax to correctly bind callbacks:

  handleClick = () => {
    this.setState({
      message: "GoodBye.",
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        {/* method 1: bind this keyword in render method */}
        {/* <button onClick={this.handleClick.bind(this)}>Click</button> */}
        {/* method 2: use arrow function in the callback */}
        {/* <button onClick={() => this.handleClick()}>Click</button> */}
        {/* method 3: bind handler in the constructor */}
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default EventBind;
