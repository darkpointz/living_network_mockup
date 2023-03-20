const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cellIdSchema = new Schema(
  {
    _id: String,
  },
  {
    collection: "Cell_Id",
  }
);

module.exports = mongoose.model("Cell_Id", cellIdSchema);
