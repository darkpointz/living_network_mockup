const mongoose = require("mongoose");
const db = require("../db/createConnection");
const ln_mu = db.useDb('living_network_mockup')
const Schema = mongoose.Schema;
const promoSchema = new Schema(
  {
    _id: String,
  },
  {
    collection: "Promos",
  }
);

module.exports = ln_mu.model("Promos", promoSchema);
