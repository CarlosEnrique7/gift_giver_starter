const express = require("express");
const morgan = require("morgan");
const giftRouter = require("./routes/gift-exchange");

const app = express();

app.use(morgan("tiny"));
app.use(express.json()); // this lets us use req.body

app.use("/gift-exchange", giftRouter);

app.get("/", async (req, res, next) => {
  res.status(200).json({ ping: "pong" });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
