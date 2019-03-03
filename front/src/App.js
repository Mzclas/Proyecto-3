import React, { Component } from "react";
import Authentication from "./views/Authentication/Authentication.component";
import { CssBaseline } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <>
        <CssBaseline />
        <Authentication />
      </>
    );
  }
}

export default App;
