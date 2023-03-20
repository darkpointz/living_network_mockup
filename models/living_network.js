const mongoose = require("mongoose");
const db = require("../db/createConnection");
const test_db = db.useDb('test')

const Schema = mongoose.Schema;
const LNSchema = new Schema(
  {
    UserData: Object,
    performance: Object,
    _id: String,
  },
  { versionKey: false }
);

module.exports = test_db.model("ln", LNSchema);
