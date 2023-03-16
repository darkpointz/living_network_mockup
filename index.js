require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const living_network = require("./models/living_network");

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();
const PORT = process.env.PORT || 3000;

function getRandom(length) {
  return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));
}

mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

app.get("/", (req, res) => {
  res.send({ title: "Living_Network" });
});

app.get("/findToken/:token", async (req,res) => {
  const ln = await living_network.findOne({_id: req.params.token});
  if (ln) {
    res.json(ln);
  } else {
    res.send("Something wrong");
  }
})

app.get("/reset", async (req, res) => {
  try {
    await living_network.deleteMany({});
    res.send("Remove All Data");
  } catch (error) {
    console.log("err : " + error);
  }
});

app.post("/save_userdata", jsonParser, async (req, res) => {
  try {
    await living_network.create(
      {
        _id: req.body.token,
        UserData: req.body.userdata,
      },
    );
    res.send("Add UserData Success \n Token : " + req.body.token);
  } catch (error) {
    console.log(res);
    console.log("err : " + error);
  }
});

app.post("/remove_userdata", jsonParser, async (req, res) => {
  try {
    await living_network.deleteOne({
      _id: req.body.token,
    });
    res.send("Remove UserData Success");
  } catch (error) {
    console.log("err : " + error);
  }
});

app.get("/get", async (req, res) => {
  const ln = await living_network.find();
  if (ln) {
    res.json(ln);
  } else {
    res.send("Something wrong");
  }
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
  });
});
