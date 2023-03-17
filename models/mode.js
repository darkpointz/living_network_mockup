const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ModeSchema = new Schema(
  {
    _id: String,
    useMode: Object,
  },
  { versionKey: false }
);

module.exports = mongoose.model("mode", ModeSchema);
