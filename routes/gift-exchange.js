const express = require("express");
const router = express.Router();
const GiftExchange = require("../model/gift-exchange");

router.get("/pairs", async (req, res, next) => {
  const pairs = await GiftExchange.getPairs();
  res.status(200).json(pairs);
});

router.post("/pairs", async (req, res, next) => {
  const names = req.body.names;
  const pairs = await GiftExchange.pairs(names);
  res.json(pairs);
});

router.get("/traditional", async (req, res, next) => {
  const pairs = await GiftExchange.getTraditional();
  res.status(200).json(pairs);
});

router.post("/traditional", async (req, res, next) => {
  const names = req.body.names;
  const traditional = await GiftExchange.traditional(names);
  res.json(traditional);
});

module.exports = router;
