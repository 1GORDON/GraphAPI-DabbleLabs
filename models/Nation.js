const { model, Schema } = require("mongoose");

const nationSchema = new Schema({
  country: String,
  year: String,
  squareKilometres: Number,
  totalPopulation: Number,
});

module.exports = model("Nation", nationSchema);
