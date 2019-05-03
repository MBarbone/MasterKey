var db = require("../models");
const express = require("express");
const router = express.Router();
// const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  let user = await db.User.findOne({ email: req.body.email });
  console.log("DEBUG User check", user);
  if (user) {
    return res.status(409).send("This user already exists");
  }
  await db.User.create(req.body).then(function(dbUser) {
    res.json(dbUser);
  });
});

// let user = await User.findOne({ email: req.body.email });
// console.log("DEBUG user check", user);
// if (user) {
//   return res.status(409).send("A user with this email already exists");
// }
// // if (user.password) return res.status(401).send("Already Registered!");
// const salt = await bcrypt.genSalt(10);
// const hashedPass = await bcrypt.hash(req.body.password, salt);
// await User.create(req.body);
// res.json("success");
// // const token = user.generateAuthToken();
// // res.header("x-auth-token", token).send(token);

// get all users
router.get("/", (req, res) => {
  db.User.findAll({}).then(function(dbUser) {
    res.json(dbUser);
  });
});

router.get("/:id", (req, res) => {
  db.User.findOne({
    where: {
      id: req.params.id
    },
    include: [db.User]
  }).then(function(dbUser) {
    res.json(dbUser);
  });
});

router.put("/:id", (req, res) => {
  db.User.update(req.body, {
    where: {
      id: req.body.id
    }
  }).then(function(dbUser) {
    res.json(dbUser);
  });
});

router.delete("/:id", (req, res) => {
  db.User.destroy({
    where: {
      id: req.body.id
    }
  }).then(function(dbUser) {
    res.json(dbUser);
  });
});

module.exports = router;
