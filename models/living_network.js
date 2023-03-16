const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const LNSchema = new Schema({
  title: {
    type: String,
    required: false,
  },
  body: {
    type: String,
    required: false,
  },
  token : {
    type: String,
    required: false,
  },
  UserData: Object,
  _id: String,
});

module.exports = mongoose.model("LN", LNSchema);
