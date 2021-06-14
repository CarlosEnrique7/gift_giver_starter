const express = require("express");
const morgan = require("morgan");
const giftRouter = require("./routes/gift-exchange");
const { NotFoundError } = require("./utils/errors");

const app = express();

app.use(morgan("tiny"));
app.use(express.json()); // this lets us use req.body

app.use("/gift-exchange", giftRouter);

app.get("/", async (req, res, next) => {
  res.status(200).json({ ping: "pong" });
});

// Handle all 404 errors that weren't matched by a route
app.use((req, res, next) => {
  return next(new NotFoundError());
});

// Generic error handler
app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message;

  return res.status(status).json({
    error: { message, status },
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
