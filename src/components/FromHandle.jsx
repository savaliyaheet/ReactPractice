import React, { Component } from "react";

class FromHandle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      skill: "angular",
    };
  }

  handleUserChange = (event) => {
    this.setState(
      {
        username: event.target.value,
      },
      () => {
        console.log(this.state.username);
      }
    );
  };

  handleCommentChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleSkillChange = (event) => {
    this.setState({
      skill: event.target.value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`${this.state.username} ${this.state.comments} ${this.state.skill}`);
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label htmlFor="">Username:</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUserChange}
          />
        </div>
        <div>
          <label htmlFor="">Comments:</label>
          <textarea
            value={this.state.comments}
            onChange={this.handleCommentChange}
          ></textarea>
        </div>
        <div>
          <select value={this.state.skill} onChange={this.handleSkillChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <div>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FromHandle;
