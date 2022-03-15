import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }
  increment() {
    // this.setState({
    //   count: this.state.count + 1,
    // },() => console.log("After Increment", this.state.count));
    // console.log(this.state.count);
    this.setState((prevState, props) => ({
      count: prevState.count + 1,
    }));
  }
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;


// Details about setState to be noted

//Always make use of setState and dont modify state directly
//Code has to be executed after the state has been updated? Place that code in callback function which is the secomd arguement to the setState method
//When you have to update state based on the prevState Value, pass in a function as an arguemnet insted of regular object.