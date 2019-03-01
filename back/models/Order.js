const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  id: Number,
  userId: { type: Schema.Types.UserId, ref: "User" },
  customerId: { type: Schema.Types.CustomerId, ref: "Customer" },
  notes: String,
  plantType: String,
  plantVariety: String,
  totalSeeds: Number,
  trayType: Number,
  plantedTrays: Number,
  totalTrays: Number,
  deliveredTrays: Number,
  state: String
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
