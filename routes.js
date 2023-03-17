const living_network = require("./models/living_network.js");
const mobile = require("./models/mobile");
const performance = require("./models/performance");
const location = require("./models/location.js");

const location_mockup = require("./models/json/location_mockup.json");

module.exports = (app) => {
  app.get("/create_locations", async (req, res) => {
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

  app.get("/get_locations", async (req, res) => {
    try {
      const locationD = await location.findOne({ _id: "LM_CCSM_AISSHOP_BKK" });
      locationD != null ? res.json(locationD) : res.send("Something went wrong");
    } catch (error) {
      console.log("err : " + error);
    }
  });
};
