const express = require("express");
const router = express.Router();
const GiftExchange = require("../model/gift-exchange");

router.get("/pairs", async (req, res, next) => {
  try {
    const pairs = await GiftExchange.getPairs();
    res.status(200).json(pairs);
  } catch (err) {
    next(err);
  }
});

router.post("/pairs", async (req, res, next) => {
  try {
    const names = req.body.names;
    const pairs = await GiftExchange.pairs(names);
    res.json(pairs);
  } catch (err) {
    next(err);
  }
});

router.get("/traditional", async (req, res, next) => {
  try {
    const pairs = await GiftExchange.getTraditional();
    res.status(200).json(pairs);
  } catch (err) {
    next(err);
  }
});

router.post("/traditional", async (req, res, next) => {
  try {
    const names = req.body.names;
    const traditional = await GiftExchange.traditional(names);
    res.json(traditional);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
