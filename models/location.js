const mongoose = require("mongoose");
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

// module.exports = new mongoose.mongo.GridFSBucket("location", locationSchema);
module.exports = mongoose.model("location", locationSchema);
