const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const organizationSchema = new Schema({
  id: Number,
  name: String
});

const Organization = mongoose.model("Organization", organizationSchema);

module.exports = Organization;
