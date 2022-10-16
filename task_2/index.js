const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());

const connection = require("./config");
const dataRouter = require("./controllers/data.controller");

app.get("/", (req, res) => {
  res.send("use /data url");
});

app.use("/data", dataRouter);

const PORT = process.env.PORT;
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connection established");
  } catch (err) {
    console.log("connection error: " + err);
  }
  console.log("listening on port 8080");
});
