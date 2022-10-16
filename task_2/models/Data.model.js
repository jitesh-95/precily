const mongoose = require("mongoose");
const DataSchema = mongoose.Schema({
  image: { type: String, required: true },
  description: { type: String, required: true },
});

const DataModel = mongoose.model("data", DataSchema);

module.exports = DataModel;
