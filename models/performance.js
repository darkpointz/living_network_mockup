const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const performanceSchema = new Schema(
  {
    _id: String,
    dlSpeed: Number,
    ulSpeed: Number,
    latency: Number,
  },
  { versionKey: false }
);

module.exports = mongoose.model("performace", performanceSchema);
