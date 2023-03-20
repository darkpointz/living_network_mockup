const mongoose = require("mongoose");
const db = require('../db/createConnection')
const test_db = db.useDb('test')
const Schema = mongoose.Schema;
// const { GridFsStorage } = require("multer-gridfs-storage");
const locationSchema = new Schema(
  {
    _id: String,
    type: {
      type: String,
      default: "FeatureCollection",
      required: true,
    },
    crs: {
      type: Object,
      required: true,
    },
    features: {
      type: Array,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = test_db.model("location", locationSchema);
