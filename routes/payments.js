var db = require("../models");
const express = require("express");
const router = express.Router();
// const bcrypt = require("bcryptjs");

router.post("/", (req, res) => {
  db.Payment.create(req.body).then(function(dbPayment) {
    res.json(dbPayment);
  });
});

// get all Payments
router.get("/", (req, res) => {
  db.Payment.findAll({}).then(function(dbPayment) {
    res.json(dbPayment);
  });
});

router.get("/:id", (req, res) => {
  db.Payment.findOne({
    where: {
      id: req.params.id
    },
    include: [db.Payment]
  }).then(function(dbPayment) {
    res.json(dbPayment);
  });
});

router.put("/:id", (req, res) => {
  db.Payment.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(function(dbPayment) {
    res.json(dbPayment);
  });
});

router.delete("/:id", (req, res) => {
  db.Payment.destroy({
    where: {
      id: req.body.id
    }
  }).then(function(dbPayment) {
    res.json(dbPayment);
  });
});

module.exports = router;
