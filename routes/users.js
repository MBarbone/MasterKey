var db = require("../models");
const express = require("express");
const router = express.Router();
// const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  let user = await db.User.findOne({ email: req.body.email });
  console.log("DEBUG apartment check", user);
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

// router.get("/:id", async (req, res) => {
//   const user = await User.findById(req.params.id);
//   res.json(user);
// });

// router.put("/:id", async (req, res) => {
//   await User.findOneAndUpdate({ _id: req.params.id }, req.body);
//   const newUser = await User.findById(req.params.id);
//   res.json(newUser);
// });

// router.delete("/:id", async (req, res) => {
//   const deletedUser = await User.findOneAndDelete({ _id: req.params.id });
//   res.json(deletedUser);
// });

module.exports = router;
