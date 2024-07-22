import React from "react";

export const themes = {
  light: {
    background: "#fff333"
  },
  dark: {
    background: "#222222"
  }
};

export const ThemeContext = React.createContext(themes.dark);

const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

export { ThemeProvider, ThemeConsumer };