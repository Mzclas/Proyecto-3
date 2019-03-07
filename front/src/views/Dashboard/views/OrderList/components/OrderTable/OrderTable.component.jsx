import Axios from "axios";
import React, { Component } from "react";
import VirtualizedTable from "./components/VirtualizedTable/VirtualizedTable.component";

export default class OrderTable extends Component {
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
    const { orders } = this.state;
    return (
      <VirtualizedTable
        rowCount={orders.length}
        rowGetter={({ index }) => orders[index]}
        columns={[
          {
            width: 200,
            flexGrow: 1.0,
            label: "Type",
            dataKey: "plantType"
          },
          {
            width: 120,
            label: "Trays type",
            dataKey: "trayType",
            numeric: true
          },
          {
            width: 120,
            label: "Order date",
            dataKey: "orderDate",
            cellContentRenderer: ({ cellData }) => formatDate(cellData)
          },
          {
            width: 120,
            label: "Delivery date",
            dataKey: "deliveryDate",
            cellContentRenderer: ({ cellData }) => formatDate(cellData)
          }
        ]}
      />
    );
  }
}

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}
