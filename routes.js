const living_network = require("./models/living_network.js");
const mobile = require("./models/mobile");
const performance = require("./models/performance");
const location = require("./models/location.js");

const location_mockup = require("./models/json/location_mockup.json");
const location_mockup2 = require("./models/json/locations_wifi.json");

module.exports = (app) => {
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
};
