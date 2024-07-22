import React, { Component } from "react";

class ConditionalRender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn && <div>Hello heet</div>;

    //   return this.state.isLoggedIn ? (
    //     <div>Hello Heet</div>
    //   ) : (
    //     <div>Hello Guest</div>
    //   );
    // }
  }
}
export default ConditionalRender;
