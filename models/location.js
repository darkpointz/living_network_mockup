const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const locationSchema = new Schema(
  {
    _id: String,
    type: {
      type: String,
      default: "FeatureCollection",
      required:true,
    },
    crs: {
      type: Object,
      required:true,
    },
    features: {
      type: Array,
      required:true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("location", locationSchema);
