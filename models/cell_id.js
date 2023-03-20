const db = require("../db/createConnection");
const mongoose = require("mongoose");
const ln_mu = db.useDb('living_network_mockup')
const Schema = mongoose.Schema;
const cellIdSchema = new Schema(
  {
    _id: String,
  },
  {
    collection: "Cell_Id",
  }
);

module.exports = ln_mu.model("Cell_Id", cellIdSchema);
