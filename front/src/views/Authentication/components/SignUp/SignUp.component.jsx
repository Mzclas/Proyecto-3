import React, { Component } from "react";
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
import AuthService from "../../auth-service";
import { Link as RouterLink, Redirect } from "react-router-dom";
import Link from "@material-ui/core/Link";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      email: "",
      password: "",
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
    const { name, surname, email, password } = this.state;

    this.service
      .signup(name, surname, email, password)
      .then(response => {
        this.setState({
          name: "",
          surname: "",
          email: "",
          password: "",
          redirect: true
        });
        // this.props.getUser(response)
      })
      .catch(error => console.log(error));
  };

  render() {
    const { classes } = this.props;
    const { name, surname, email, password } = this.state;
    return !this.state.redirect ? (
      <>
        <Avatar className={classes.avatar}>
          <Icon path={mdiAccountPlus} size={1} color="white" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} onSubmit={this.handleFormSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
              onChange={this.handleChange}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="surname">Surname</InputLabel>
            <Input
              id="surname"
              name="surname"
              autoComplete="surname"
              value={surname}
              onChange={this.handleChange}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input
              id="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={this.handleChange}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={this.handleChange}
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
          <Link component={RouterLink} to={"/login"}>
            or signup with your account
          </Link>
        </div>
      </>
    ) : (
      <Redirect to="/login" />
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUp);
