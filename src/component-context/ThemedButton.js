import React, { Component } from "react";
import { ThemeConsumer, ThemeContext, themes } from "./theme-context";

class ThemedButton extends Component {
  render() {
    return (
      <div>
        <button
          style={{ backgroundColor: this.context.background }}
          onClick={this.props.onClick}
          {...this.props}
        >
          Change Colour
        </button>
      </div>
    );
  }
}

ThemedButton.contextType = ThemeContext;


export default ThemedButton;
