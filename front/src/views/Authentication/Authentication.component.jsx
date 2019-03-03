import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "./Authentication.styles";
import LogIn from "./components/LogIn/LogIn.component";
import SignUp from "./components/SignUp/SignUp.component";

function Authentication(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <main className={classes.main}>
        <Paper className={classes.paper}>
          {/* <LogIn /> */}
          <SignUp />
        </Paper>
      </main>
    </div>
  );
}

Authentication.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Authentication);
