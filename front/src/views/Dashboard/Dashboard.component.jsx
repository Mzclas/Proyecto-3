import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Switch, Route, withRouter } from "react-router-dom";

import { styles } from "./Dashboard.styles";
import MenuBar from "./components/MenuBar/MenuBar.component";
import SideBar from "./components/SideBar/SideBar.component";
import OrderList from "./views/OrderList/OrderList.component";
import CreateOrder from "./views/CreateOrder/CreateOrder.component";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBarOpen: false
    };
  }

  openSideBar = () => {
    this.setState({ sideBarOpen: true });
  };
  closeSideBar = () => {
    this.setState({ sideBarOpen: false });
  };

  render() {
    const { classes, match } = this.props;
    const { sideBarOpen } = this.state;
    return (
      <>
        <MenuBar onClickMenu={this.openSideBar} />
        <SideBar
          open={sideBarOpen}
          onOpen={this.openSideBar}
          onClose={this.closeSideBar}
        />
        <div className={classes.container}>
          <Switch>
            <Route path={`${match.url}/create-order`} component={CreateOrder} />
            <Route path={`${match.url}/order-list`} component={OrderList} />
            <Route exact path={`${match.url}/`} component={OrderList} />
          </Switch>
        </div>
      </>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(Dashboard));
