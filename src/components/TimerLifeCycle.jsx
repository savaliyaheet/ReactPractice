import React, { Component } from 'react';

class TimerLifeCycle extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Timer</h1>
        <h4>{this.state.date.toLocaleTimeString()}</h4>
      </div>
    );
  }
}

export default TimerLifeCycle;