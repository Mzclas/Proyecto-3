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
    for (let order of orders) {
      order.approximateTrays = (order.totalSeeds / order.trayType).toFixed(2);
    }

    return (
      <VirtualizedTable
        rowCount={orders.length}
        rowGetter={({ index }) => orders[index]}
        columns={[
          {
            width: 120,
            flexGrow: 1.0,
            label: "Type",
            dataKey: "plantType"
          },
          {
            width: 100,
            label: "Total Seeds",
            dataKey: "totalSeeds",
            numeric: true
          },
          {
            width: 100,
            label: "Trays type",
            dataKey: "trayType",
            numeric: true
          },
          {
            width: 100,
            label: "Order date",
            dataKey: "orderDate",
            cellContentRenderer: ({ cellData }) => formatDate(cellData)
          },
          {
            width: 100,
            label: "Delivery date",
            dataKey: "deliveryDate",
            cellContentRenderer: ({ cellData }) => formatDate(cellData)
          },
          {
            width: 100,
            label: "Approximate Trays",
            dataKey: "approximateTrays",
            numeric: true
          }
        ]}
      />
    );
  }
}

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}
