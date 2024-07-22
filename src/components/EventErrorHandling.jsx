import React, { Component } from 'react';

class EventErrorHandling extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: false
    };
  }

  handleError = () => {
    try {
      this.setState({
        error: "heet"
      });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    console.log(this.state.name);
    if (this.state.error) {
      return <h1>Something went wrong</h1>;
    }
    return (
      <div>
        <button onClick={this.handleError}>Click</button>
      </div>
    );
  }
}

export default EventErrorHandling;