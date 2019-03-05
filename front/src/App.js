import React, { Component } from "react";
import Authentication from "./views/Authentication/Authentication.component";
import { CssBaseline } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <CssBaseline />
        <Switch>
          <Route
            exact
            path="/signup"
            render={() => <Authentication isLogin={false} />}
          />
          <Route
            exact
            path="/login"
            render={() => <Authentication isLogin={true} />}
          />
        </Switch>
      </>
    );
  }
}

export default App;
