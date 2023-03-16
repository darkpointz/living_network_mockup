const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const LNSchema = new Schema(
  {
    UserData: Object,
    performance: Object,
    _id: String,
  },
  { versionKey: false }
);

module.exports = mongoose.model("ln", LNSchema);
