import React, { Component } from "react";
class ConditionalRenderUI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn ? <div>Hello John</div> : <div>Hello User</div>;

    //return this.state.isLoggedIn && <div>Hello John</div>
    
    // if(this.state.isLoggedIn){
    //     return <div>Hello John</div>
    // }else{
    //     return <div>Hello User</div>
    // }
  }
}

export default ConditionalRenderUI;
