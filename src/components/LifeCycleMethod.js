import React, { Component } from "react";


class LifeCycleMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.TimerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.TimerID);
  }
  tick() {
    // this.setState({
    //   date: new Date(),
    // });
    this.setState((prevState, props) => {
      // console.log(props);

      return { date: new Date() };
    });
  }
  render() {
    return (
      <div>
        <h1>Time: {this.state.date.toLocaleTimeString()}</h1>
        {/* <FormattedDate date={this.state.date} /> */}
      </div>
    );
  }
}

export default LifeCycleMethod;
