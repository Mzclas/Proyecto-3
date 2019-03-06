import background from "../../assets/images/fondo.jpg";

const gradientOpacity = 0.9;
export const styles = theme => ({
  container: {
    overflow: "auto",
    minHeight: "100vh",
    backgroundImage:
      `linear-gradient(` +
      `rgba(255,255,255,${gradientOpacity}), ` +
      `rgba(255,255,255,${gradientOpacity})` +
      `), url(${background})`,
    backgroundSize: "cover"
  },
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});
