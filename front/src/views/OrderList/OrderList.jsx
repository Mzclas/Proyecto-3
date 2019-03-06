import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import MenuBar from "../Dashboard/components/MenuBar/MenuBar.component";
import Axios from "axios";

export default class OrderList extends Component {
  state = {
    orders: []
  };

  componentDidMount() {
    Axios.get("http://localhost:5000/orders").then(orders => {
      this.setState({
        ...this.state,
        orders: orders.data
      });
    });
  }

  render() {
    return (
      <>
        <MenuBar />
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="right">Tipo</TableCell>
                <TableCell align="right">Fecha Pedico</TableCell>
                <TableCell align="right">Fecha Entrga</TableCell>
                {/* <TableCell align="right">Variedad</TableCell> */}
                {/* <TableCell align="right">Total semillas</TableCell> */}
                <TableCell align="right">Bandeja</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.orders.map(order => (
                <TableRow key={order._id}>
                  <TableCell align="right">{order.plantType}</TableCell>
                  <TableCell align="right">{order.orderDate}</TableCell>
                  <TableCell align="right">{order.deliveryDate}</TableCell>
                  {/* <TableCell align="right">{order.plantVariety}</TableCell> */}
                  {/* <TableCell align="right">{order.totalSeeds}</TableCell> */}
                  <TableCell align="right">{order.trayType}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </>
    );
  }
}
