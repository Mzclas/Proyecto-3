const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  id: Number,
  name: String,
  cif: String
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
