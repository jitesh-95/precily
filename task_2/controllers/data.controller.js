const express = require("express");

const DataModel = require("../models/Data.model");
const dataRouter = express.Router();

dataRouter.get("/", async (req, res) => {
  try {
    const data = await DataModel.find({ _id: req.query.id });

    return res.status(201).json({ message: "success", data });
  } catch (err) {
    return res.status(500).json({ message: "internal server error" });
  }
});

dataRouter.post("/add", async (req, res) => {
  try {
    const { image, description } = req.body;
    if (!image || !description) {
      return res.status(500).json({ message: "invalid credentials" });
    }
    const newData = DataModel({
      image,
      description,
    });
    await newData.save();

    return res.status(201).json({ message: "success", data: newData });
  } catch (err) {
    return res.status(500).json({ message: "internal server error" });
  }
});

dataRouter.patch("/update", async (req, res) => {
  try {
    const { image, description } = req.body;
    const _id = req.query.id;

    if (!image || !description) {
      return res.status(500).json({ message: "invalid credentials" });
    }
    const newData = await DataModel.findByIdAndUpdate(
      { _id },
      { image, description },
      { returnDocument: "after" }
    );

    return res.status(201).json({ message: "success", data: newData });
  } catch (err) {
    return res.status(500).json({ message: "internal server error" });
  }
});

module.exports = dataRouter;
