const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vegetablesSchema = new Schema({
  id: Number,
  name: String
});

const Vegetables = mongoose.model("Vegetables", vegetablesSchema);

module.exports = Vegetables;
