const mongoose = require("mongoose");
const db = require("../db/createConnection");
const test_db = db.useDb('test')

const Schema = mongoose.Schema;
const ModeSchema = new Schema(
  {
    _id: String,
    useMode: Object,
  },
  { versionKey: false }
);

module.exports = test_db.model("mode", ModeSchema);
