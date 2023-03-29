const mongoose = require("mongoose");
const db = require("../db/createConnection");
const ln_mu = db.useDb("living_network_mockup");
const Schema = mongoose.Schema;

const mode = "5GMode";

const msisdnSchema = new Schema(
  {
    _id: {
      type: String,
      default:
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjlVeTRLUjlzOEoifQ.eyJpc3MiOiJzcmYuYWlzLmNvLnRoL2FkbWQiLCJzdWIiOiJ0b2tlbl9jbGllbnRfY3JlZGVudGlhbHMiLCJhdWQiOiJTVzhMaUdGd3dqQmJ0eDd0d2c3Z2dhZHVxL2VlZzhFM2c3dmtrVlNCVis5aVpxZkRsbERqMnc9PSIsImV4cCI6MTk4NzI3MTE2MywiaWF0IjoxNjcxNzAxNjQzLCJqdGkiOiI0RjhBaUM1S1VzT3gyeDQ3UzhlOGJKIiwiY2xpZW50IjoiT1RBd01EQXdNREF3TURBd05qWXpMRzE1WVdsemZFSmhZMnRsYm1SOE1TNHdMakE9Iiwic3NpZCI6IjNxNGlmMWVaMTF4NkdDSzRPWGQ4VUIifQ.d64EmMj1NQEE1yciOZwVrdS7gAeD6A-gQb3SOHkAuap2vgcBTi07G_WvX5Q2gVlGlttq-j05S1Qp6LNKl3vo-DqKXhc5PpmYK6pMxDiur_97OBB2ePAdcJJRpMNQUBmLOXIFPKxKN4WP6mRTVCkayqso1G_v0cILtIpPokvFHOc",
    },
    msisdn: {
      type: String,
      default: "0889081797",
    },
    package: {
      type: Object,
    },
    Mode5G: {
      type: Object,
    },
  },
  { collection: "Msisdn", versionKey: false, minimize: false }
);

module.exports = ln_mu.model("Msisdn", msisdnSchema);
