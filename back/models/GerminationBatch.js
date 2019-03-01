const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const germinationBatchSchema = new Schema({
  id: Number,
  orderId: { type: Schema.Types.OrderId, ref: "Order" },
  trays: Number,
  entryDate: Date,
  exitDate: Date
});

const GerminationBatch = mongoose.model(
  "GerminationBatch",
  germinationBatchSchema
);

module.exports = GerminationBatch;
