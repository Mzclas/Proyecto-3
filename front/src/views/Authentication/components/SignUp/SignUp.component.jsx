import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "./SignUp.styles";
import { Icon } from "@mdi/react";
import { mdiAccountPlus } from "@mdi/js";

function SignUp(props) {
  const { classes, toggle } = props;

  return (
    <>
      <Avatar className={classes.avatar}>
        <Icon path={mdiAccountPlus} size={1} color="white" />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <form className={classes.form}>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input id="name" name="name" autoComplete="name" autoFocus />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="surname">Surname</InputLabel>
          <Input id="surname" name="surname" autoComplete="surname" autoFocus />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input id="email" name="email" autoComplete="email" autoFocus />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </FormControl>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign Up
        </Button>
      </form>
      <div className={classes.subButtom}>
        <label htmlFor="outlined-button-login">
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={toggle}
          >
            LogIn
          </Button>
        </label>
      </div>
    </>
  );
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUp);
