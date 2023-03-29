const location = require("./models/location.js");
const mode = require("./models/mode");

const location_mockup = require("./models/json/location_mockup.json");
const location_mockup2 = require("./models/json/locations_wifi.json");

const bodyParser = require("body-parser");

var jsonParser = bodyParser.json();

module.exports = (app) => {
  //===============================================================================Location==========================================================================================

  app.get("/create_locations_AISSHOP", async (req, res) => {
    try {
      const locationD = await location.create({
        _id: "LM_CCSM_AISSHOP_BKK",
        type: location_mockup.type,
        crs: location_mockup.crs,
        features: location_mockup.features,
      });
      res.send("Add location Success \n" + locationD);
    } catch (error) {
      console.log("err : " + error);
    }
  });

  app.get("/create_locations_wifi", async (req, res) => {
    try {
      const locationD = await location.create({
        _id: "LM_WIFI_AP_BKK",
        type: location_mockup2.type,
        crs: location_mockup2.crs,
        features: location_mockup2.features,
      });
      res.send("Add location Success \n" + locationD);
    } catch (error) {
      console.log("err : " + error);
    }
  });

  app.get("/get_locations_AISSHOP", async (req, res) => {
    try {
      const locationD = await location.findOne({ _id: "LM_CCSM_AISSHOP_BKK" });
      locationD != null ? res.json(locationD) : res.send("Something went wrong");
    } catch (error) {
      console.log("err : " + error);
    }
  });

  app.get("/get_locations_AISWIFI", async (req, res) => {
    try {
      const locationD = await location.findOne({ _id: "LM_WIFI_AP_BKK" });
      locationD != null ? res.json(locationD) : res.send("Something went wrong");
    } catch (error) {
      console.log("err : " + error);
    }
  });

  app.get("/getAllLocation", async (req, res) => {
    const id = ["LM_WIFI_AP_BKK", "LM_CCSM_AISSHOP_BKK"]
    try {
      const locationAll = await location.find({
        _id: { $in: id },
      });
      locationAll != null ? res.json(locationAll) : res.send("Something went wrong");
    } catch (error) {
      console.log("err : " + error);
    }
  });

  //=========================================================================================================================================================================

  //===============================================================================Mode======================================================================================

  app.post("/create_mode", jsonParser, async (req, res) => {
    try {
      const modeRes = await mode.create({
        _id: req.body.msisdn,
        useMode: req.body.useMode,
      });
      res.send("Create mode success \n _id : " + req.body.msisdn);
    } catch (error) {
      console.log("err : " + error);
    }
  });

  app.get("/get_mode/:msisdn", async (req, res) => {
    const userMode = await mode.findById({ _id: req.params.msisdn });
    if (userMode) {
      res.json(userMode);
    } else {
      res.send("Something wrong");
    }
  });
  //=========================================================================================================================================================================

  //===============================================================================Anti-Corrupt======================================================================================
  const token =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjlVeTRLUjlzOEoifQ.eyJpc3MiOiJzcmYuYWlzLmNvLnRoL2FkbWQiLCJzdWIiOiJ0b2tlbl9jbGllbnRfY3JlZGVudGlhbHMiLCJhdWQiOiJTVzhMaUdGd3dqQmJ0eDd0d2c3Z2dhZHVxL2VlZzhFM2c3dmtrVlNCVis5aVpxZkRsbERqMnc9PSIsImV4cCI6MTk4NzI3MTE2MywiaWF0IjoxNjcxNzAxNjQzLCJqdGkiOiI0RjhBaUM1S1VzT3gyeDQ3UzhlOGJKIiwiY2xpZW50IjoiT1RBd01EQXdNREF3TURBd05qWXpMRzE1WVdsemZFSmhZMnRsYm1SOE1TNHdMakE9Iiwic3NpZCI6IjNxNGlmMWVaMTF4NkdDSzRPWGQ4VUIifQ.d64EmMj1NQEE1yciOZwVrdS7gAeD6A-gQb3SOHkAuap2vgcBTi07G_WvX5Q2gVlGlttq-j05S1Qp6LNKl3vo-DqKXhc5PpmYK6pMxDiur_97OBB2ePAdcJJRpMNQUBmLOXIFPKxKN4WP6mRTVCkayqso1G_v0cILtIpPokvFHOc";
  //Authen Token
  const authenToken = require("./models/json/authenToken/authenToken.json");
  const errorAuthenToken = require("./models/json/authenToken/error.json");
  app.post("/AC/v1/authenToken", jsonParser, async (req, res) => {
    if (req.body.ssbToken == null) {
      res.json(errorAuthenToken);
    } else {
      res.json(authenToken);
    }
  });

  //check5GModeProfile
  const check5GModeProfile = require("./models/json/check5GModeProfile/res.json");
  const errCheck5GModeProfile = require("./models/json/check5GModeProfile/error.json");
  app.post("/AC/v1/check5GModeProfile", jsonParser, async (req, res) => {
    if (req.body.accessToken == null) {
      res.json(errCheck5GModeProfile);
    } else {
      res.json(check5GModeProfile);
    }
  });

  //Add Package
  const addPackage = require("./models/json/addPackage/res.json");
  const errorAddPackage = require("./models/json/addPackage/error.json");
  app.post("/AC/v1/addPackage", jsonParser, async (req, res) => {
    if (req.body.accessToken == null) {
      res.json(errorAddPackage);
    } else {
      res.json(addPackage);
    }
  });

  //Delete Package
  const deletePackage = require("./models/json/deletePackage/res.json");
  const errorDeletePackage = require("./models/json/deletePackage/error.json");
  app.post("/AC/v1/deletePackage", jsonParser, async (req, res) => {
    if (req.body.accessToken == null) {
      res.json(errorDeletePackage);
    } else {
      res.json(deletePackage);
    }
  });

  //Get Cell Id
  const cellId = require("./models/cell_id");
  app.get("/AC/v1/cellid", async (req, res) => {
    try {
      const resp = await cellId.findOne({ _id: token });
      resp != null ? res.json(resp) : res.send("Something went wrong");
    } catch (error) {
      console.log("err : " + error);
    }
  });

  //Get Promo
  const promo = require("./models/promo");
  app.get("/AC/v1/promo", async (req, res) => {
    try {
      const resp = await promo.findOne({ _id: token });
      resp != null ? res.json(resp) : res.send("Something went wrong");
    } catch (error) {
      console.log("err : " + error);
    }
  });

  //Get Msisdn
  const msisdn = require("./models/msisdn");
  app.get("/AC/v1/getMsisdn", async (req, res) => {
    try {
      const resp = await msisdn.findOne({ _id: token });
      resp != null ? res.json(resp) : res.send("Something went wrong");
    } catch (error) {
      console.error();
    }
  });
  //Update Msisdn
  app.post("/AC/v1/updateMsisdn", jsonParser, async (req, res) => {
    const filter = { _id: req.body.token };
    const update = {
      _id: req.body.token,
      msisdn: req.body.msisdn,
      package: req.body.package,
      Mode5G: req.body.Mode5G,
    };
    try {
      const resp = await msisdn.findByIdAndUpdate(filter, update, {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      });
      resp != null ? res.json(resp) : res.send("Something went wrong");
    } catch (error) {
      console.error();
    }
  });
};
