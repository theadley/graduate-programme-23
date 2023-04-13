const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", logger1, logger2, (req, res) => {
  res.status(200).render("index", { firstName: "Tim" });
});

// Order matters
// app.use(logger);

const userRouter = require("./routes/users");
app.use("/users", userRouter);

function logger1(req, res, next) {
  console.log(`Logger 1: ${req.originalUrl}`);
  next();
}

function logger2(req, res, next) {
  console.log(`Logger 2: ${req.originalUrl}`);
  next();
}

app.listen(3000);
