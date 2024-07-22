import React, { Component } from "react";

class Cat extends Component {
  render() {
    const { mouse } = this.props;
    return (
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/53/53283.png"
          alt=""
          style={{
            position: "absolute",
            width: "20px",
            left: mouse.x,
            top: mouse.y,
          }}
        />
      </div>
    );
  }
}

export default Cat;
