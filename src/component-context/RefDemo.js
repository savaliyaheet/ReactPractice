import React, { Component } from "react";

export class RefDemo extends Component {
  constructor(props) {
    super(props);

    this.usernameRef = React.createRef();
    this.emailRef = React.createRef();
    this.contactRef = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `${this.usernameRef.current.value} ${this.emailRef.current.value} ${this.contactRef.current.value}`
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="">Username</label>
          <input type="text" ref={this.usernameRef} />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" ref={this.emailRef} />
        </div>
        <div>
          <label htmlFor="">Contact</label>
          <input type="number" ref={this.contactRef} />
        </div>
        <div>
          <label htmlFor="">Choice</label>
          <input type="checkbox" name="React" id="" />React
          <input type="checkbox" name="Javascrpit" id="" />JavaScript
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default RefDemo;
