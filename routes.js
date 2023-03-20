const living_network = require("./models/living_network.js");
const mobile = require("./models/mobile");
const performance = require("./models/performance");
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
};
