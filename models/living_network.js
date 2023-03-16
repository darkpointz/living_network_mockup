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
  UserData:{
    type: String,
    required: false,
  }
});

module.exports = mongoose.model("LN", LNSchema);
