import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Link } from "react-router-dom";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class SideBar extends React.Component {
  render() {
    const { classes, open, onClose, onOpen } = this.props;

    return (
      <SwipeableDrawer open={open} onClose={onClose} onOpen={onOpen}>
        <div
          tabIndex={0}
          role="button"
          // onClick={this.toggleDrawer("left", false)}
          // onKeyDown={this.toggleDrawer("left", false)}
        >
          <div className={classes.list}>
            <List>
              <ListItem
                button
                component={props => <Link to="/home/order-list" {...props} />}
                onClick={onClose}
              >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Order list" />
              </ListItem>
              <ListItem
                button
                component={props => <Link to="/home/create-order" {...props} />}
                onClick={onClose}
              >
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Create order" />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem
                button
                component={props => <Link to="/login" {...props} />}
                onClick={onClose}
              >
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </div>
        </div>
      </SwipeableDrawer>
    );
  }
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideBar);
