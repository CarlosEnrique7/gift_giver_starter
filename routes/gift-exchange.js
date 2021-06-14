const express = require("express");
const router = express.Router();

const voting = {
  tie: 0,
  shirt: 0,
  "gift card": 0,
};

router.get("/", async (req, res, next) => {
  res.status(200).json(voting);
});

router.post("/:giftName", async (req, res, next) => {
  const giftName = req.params.giftName;

  if (voting[giftName] || voting[giftName] === 0) {
    voting[giftName] += 1;
  }

  res.status(200).json(voting);
});

module.exports = router;
