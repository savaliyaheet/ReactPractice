import React, { Component } from "react";
class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello welcome",
    };

    this.clickHandler = this.clickHandler.bind(this);
  }
  //   clickHandler() {
  //     this.setState({
  //       message: "Bye!!",
  //     });
  //   }

  clickHandler = () => {
    this.setState({
      message: "Bye",
    });
  };
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        {/* <button onClick={this.clickHandler.bind(this)}>Click me</button> Type 1 */}
        {/* <button onClick={() => this.clickHandler()}>Click me</button> */}
        {/* <button onClick={this.clickHandler}>Click me</button>      Most preferred method by binding this keyword in constructor itself.*/}
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default EventBind;
