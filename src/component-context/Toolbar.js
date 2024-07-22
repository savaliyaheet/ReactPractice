import React, { Component } from "react";
import { ThemeProvider, themes } from "./theme-context";
import ThemedButton from "./ThemedButton";

class Toolbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: themes.light,
    };
  }

  handleThemeChange = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === themes.dark ? themes.light : themes.dark,
    }));
  };

  render() {
    return (
      <div>
        <ThemeProvider value={this.state.theme}>
          <ThemedButton onClick={this.handleThemeChange} />
        </ThemeProvider>
      </div>
    );
  }
}

export default Toolbar;
