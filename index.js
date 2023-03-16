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

app.get("/add", async (req, res) => {
  try {
    await living_network.insertMany([
      {
        UserData: {
          msisdn: "08123456789",
          networkType: "5G",
          cellId: "true",
          paymentType: "postpaid",
          modelType: "5G",
          customerState: "active",
          bssrule: "5G package",
          eco: "true",
          alarm: "true",
        },
      },
    ]);
    res.send("Add Success");
  } catch (error) {
    console.log("err : " + error);
  }
});
// app.get("/addToken", async (req, res) => {
//   try {
//     await living_network.insertMany([
//       {
//         UserData: {
//           msisdn: "08123456789",
//           networkType: "5G",
//           cellId: "true",
//           paymentType: "postpaid",
//           modelType: "5G",
//           customerState: "active",
//           bssrule: "5G package",
//           eco: "true",
//           alarm: "true",
//         },
//         token: `${getRandom(10)}`,
//       },
//     ]);
//     res.send("Add Success : \n");
//   } catch (error) {
//     console.log("err : " + error);
//   }
// });
app.get("/addToken", async (req, res) => {
  try {
    await mongoose.lns.insertMany(
      {
        UserData: {
          msisdn: "kokoko",
          networkType: "5G",
          cellId: "true",
          paymentType: "postpaid",
          modelType: "5G",
          customerState: "active",
          bssrule: "5G package",
          eco: "true",
          alarm: "true",
        },
        token: `${getRandom(10)}`,
      },
    );
    res.send("Add Success : \n");
  } catch (error) {
    console.log("err : " + error);
  }
});
// app.get("/add", async (req, res) => {
//   try {
//     await living_network.insertMany([
//       {
//         title: "performance",
//         body: "testPerformance",
//       },
//       {
//         title: "Mode5G",
//         body: "testMode5G",
//       },
//     ]);
//     res.send("Add Success");
//   } catch (error) {
//     console.log("err : " + error);
//   }
// });
app.get("/findToken", async (req,res) => {
  const ln = await living_network.find({_id: "6412bf81b53e5117a222bc80"});
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
        UserData: req.body.userdata,
      },
    );
    console.log(res.json(res.body));
    res.send("Add UserData Success");
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
