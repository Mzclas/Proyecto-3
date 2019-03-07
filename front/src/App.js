import React, { Component } from "react";
import { CssBaseline } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import Authentication from "./views/Authentication/Authentication.component";
import Dashboard from "./views/Dashboard/Dashboard.component";

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
          <Route path="/home" component={Dashboard} />
        </Switch>
      </>
    );
  }
}

export default App;
