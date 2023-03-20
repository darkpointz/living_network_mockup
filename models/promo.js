const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const promoSchema = new Schema(
  {
    _id: String,
  },
  {
    collection: "Promos",
  }
);

module.exports = mongoose.model("Promos", promoSchema);
