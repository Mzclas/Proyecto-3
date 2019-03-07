import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

import { styles } from "./OrderList.styles";
import OrderTable from "./components/OrderTable/OrderTable.component";

class OrderList extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <main className={classes.main}>
          <Paper className={classes.paper}>
            <Typography
              variant="title"
              color="primary"
              className={classes.title}
            >
              Orders list
            </Typography>
            <OrderTable />
          </Paper>
        </main>
      </>
    );
  }
}

OrderList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OrderList);
