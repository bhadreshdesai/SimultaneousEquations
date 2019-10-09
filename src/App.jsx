import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import EquationsPage from "./EquationsPage";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <EquationsPage />
      </ThemeProvider>
    );
  }
}

export default App;
