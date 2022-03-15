import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }

  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  commentChangeHandler = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  topicChangeHandler = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  submitHandler = (eve) => {
    eve.preventDefault();
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label htmlFor="">Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.usernameChangeHandler}
            required
          />
        </div>
        <div>
          <label htmlFor="">Comments</label>
          <textarea
            name=""
            id=""
            cols=""
            rows="4"
            value={this.state.comments}
            onChange={this.commentChangeHandler}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="">Topic</label>
          <select
            name=""
            id=""
            value={this.state.topic}
            onChange={this.topicChangeHandler}
          >
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
