const mongoose = require("mongoose");
const db = require("../db/createConnection");
const test_db = db.useDb('test')
const Schema = mongoose.Schema;

const mobileSchema = new Schema(
  {
    _id: String,
    mobile: Object,
  },
  { versionKey: false }
);

module.exports = test_db.model("mobile", mobileSchema);
