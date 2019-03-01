const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const germinationTimesConfigSchema = new Schema({
  id: Number,
  organizationId: { type: Schema.Types.OrganizationId, ref: "Organization" },
  plantType: String,
  plantVariety: String,
  hours: Number
});

const GerminationTimesConfig = mongoose.model(
  "GerminationTimesConfig",
  germinationTimesConfigSchema
);

module.exports = GerminationTimesConfig;
