const mongoose = require("mongoose");
const db = require("../db/createConnection");
const test_db = db.useDb('test')
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

module.exports = test_db.model("performace", performanceSchema);
