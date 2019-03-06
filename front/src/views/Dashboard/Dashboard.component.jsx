import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { DatePicker } from "material-ui-pickers";

import { styles } from "./Dashboard.styles";
import MenuBar from "./components/MenuBar/MenuBar.component";
import OrdersService from "./orders-service";
import Popup from "../../components/Popup/Popup.component";

const PLANT_TYPES = [
  "Tomato",
  "Melon",
  "Pepper",
  "Onion",
  "Cauliflower",
  "Watermelon"
];

const TRAY_TYPES = ["54", "104", "150", "294", "726", "1066"];

const PLANT_OPTIONS = PLANT_TYPES.map(plantType => ({
  value: plantType.toLowerCase(),
  label: plantType
}));

const TRAY_OPTIONS = TRAY_TYPES.map(trayType => ({
  value: trayType.toLowerCase(),
  label: trayType
}));

const initialState = {
  orderDate: new Date(),
  deliveryDate: new Date(),
  plantType: PLANT_OPTIONS[0].value,
  trayType: TRAY_OPTIONS[0].value,
  showError: false,
  showSuccess: false
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
    this.service = new OrdersService();
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleOrderDateChange = date => {
    this.setState({ orderDate: date });
  };

  handleDeliveryDateChange = date => {
    this.setState({ deliveryDate: date });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { trayType, plantType, orderDate, deliveryDate } = this.state;

    this.service
      .create({ trayType, plantType, orderDate, deliveryDate })
      .then(response => {
        this.setState({ ...initialState, showSuccess: true });
      })
      .catch(error => {
        this.setState({ showError: true });
        console.log(error);
      });
  };

  handleCloseSuccessPopup = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ showSuccess: false });
  };

  handleCloseErrorPopup = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ showError: false });
  };

  render() {
    const {
      orderDate,
      deliveryDate,
      plantType,
      trayType,
      showError,
      showSuccess
    } = this.state;
    const { classes } = this.props;
    return (
      <>
        <MenuBar />
        <div className={classes.container}>
          <main className={classes.main}>
            <Paper className={classes.paper}>
              <Typography variant="title" color="primary">
                New Order
              </Typography>
              <form className={classes.form} onSubmit={this.handleFormSubmit}>
                <DatePicker
                  fullWidth
                  margin="normal"
                  label="Order date"
                  value={orderDate}
                  onChange={this.handleOrderDateChange}
                />
                <DatePicker
                  fullWidth
                  margin="normal"
                  label="Delivery date"
                  value={deliveryDate}
                  onChange={this.handleDeliveryDateChange}
                />
                <TextField
                  select
                  fullWidth
                  label="Plant type"
                  value={plantType}
                  onChange={this.handleChange("plantType")}
                  helperText="Please select plant type"
                  margin="normal"
                >
                  {PLANT_OPTIONS.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  select
                  fullWidth
                  label="Tray type"
                  value={trayType}
                  onChange={this.handleChange("trayType")}
                  helperText="Please select tray type"
                  margin="normal"
                >
                  {TRAY_OPTIONS.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Create Order
                </Button>
              </form>
            </Paper>
          </main>
        </div>
        <Popup
          open={showError}
          onClose={this.handleCloseErrorPopup}
          variant="error"
          message="Something went wront when creating the order"
        />
        <Popup
          open={showSuccess}
          onClose={this.handleCloseSuccessPopup}
          variant="success"
          message="Order successfully created"
        />
      </>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);