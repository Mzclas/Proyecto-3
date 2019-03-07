import React, { Component } from "react";
import VirtualizedTable from "./components/VirtualizedTable/VirtualizedTable.component";
import OrdersService from "../../../../orders-service";

export default class OrderTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
    this.service = new OrdersService();
  }

  componentDidMount() {
    this.service.get().then(orders => {
      this.setState({ ...this.state, orders });
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
