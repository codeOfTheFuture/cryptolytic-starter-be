const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Trading = require("./tradingModel");
const ArbitrageModel = require("./arbitrageModel");

const Trade = mongoose.model("trading");
const Arbitrage = mongoose.model("arbitrage");

const app = express();

app.use(cors());
app.use(express.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Its working");
});

app.get("/trading", async (req, res) => {
  try {
    const result = await Trade.find();

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: `Internal Server Error`, err });
  }
});

app.post("/trading", async (req, res) => {
  const data = req.body;
  try {
    const tradingData = new Trading(data);

    const result = await tradingData.save();

    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ message: `Internal Server Error`, err });
  }
});

app.get("/arbitrage", async (req, res) => {
  try {
    const result = await Arbitrage.find();

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: `Internal Server Error`, err });
  }
});

app.post("/arbitrage", async (req, res) => {
  const data = req.body;
  try {
    const arbitrageData = new ArbitrageModel(data);

    const result = await arbitrageData.save();

    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ message: `Internal Server Error`, err });
  }
});

module.exports = app;
