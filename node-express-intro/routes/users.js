const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get Users");
});

router.get("/new", (req, res) => {
  res.send("Make New User");
});

router.post("/new", (req, res) => {
  const name = req.body.firstName ?? "Mark";
  users.push({ name });
  res.redirect("/users");
});

const users = [{ name: "Tim" }, { name: "Mark" }];

router
  .route("/:id")
  .get((req, res) => {
    res.send(`User by id: ${req.user.name}`);
  })
  .put((req, res) => {
    res.send("Update User");
  })
  .delete((req, res) => {
    res.send("Delete User");
  });

router.param("id", (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  if (!isNaN(id) && +id < users.length) {
    const matchedUser = users[id];
    req.user = matchedUser;
  } else {
    req.user = { name: "Anon" };
  }
  next();
});

module.exports = router;
