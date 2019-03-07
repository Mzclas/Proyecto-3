import React, { Component } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "./LogIn.styles";
import AuthService from "../../auth-service";
import { Link as RouterLink, Redirect } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Popup from "../../../../components/Popup/Popup.component";

const HTTP_UNAUTHORIZED = 401;

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showError: false,
      redirect: false
    };
    this.service = new AuthService();
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

    this.service
      .login(email, password)
      .then(response => {
        this.setState({
          email: "",
          password: "",
          redirect: true
        });
        // this.props.getUser(response)
      })
      .catch(error => {
        if (error.response.status === HTTP_UNAUTHORIZED) {
          this.setState({ showError: true });
        }
        console.log(error);
      });
  };

  handleCloseErrorPopup = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ showError: false });
  };

  render() {
    const { classes } = this.props;
    const { email, password, showError } = this.state;
    return !this.state.redirect ? (
      <>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <form className={classes.form} onSubmit={this.handleFormSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input
              id="email"
              name="email"
              value={email}
              autoComplete="email"
              autoFocus
              onChange={this.handleChange}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              name="password"
              value={password}
              autoComplete="current-password"
              type="password"
              onChange={this.handleChange}
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log In
          </Button>
        </form>
        <div className={classes.subButtom}>
          <Link component={RouterLink} to={"/signup"}>
            or create an account
          </Link>
        </div>
        <Popup
          open={showError}
          onClose={this.handleCloseErrorPopup}
          variant="warning"
          message="Incorrect username or password"
        />
      </>
    ) : (
      <Redirect to="/home" />
    );
  }
}

LogIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LogIn);
