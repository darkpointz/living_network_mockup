const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mobileSchema = new Schema(
  {
    _id: String,
    mobile: Object,
  },
  { versionKey: false }
);

module.exports = mongoose.model("mobile", mobileSchema);
