var db = require("../models");
const express = require("express");
const router = express.Router();
// const bcrypt = require("bcryptjs");

router.post("/", (req, res) => {
  db.Service.create(req.body).then(function(dbService) {
    res.json(dbService);
  });
});

// get all Services
router.get("/", (req, res) => {
  db.Service.findAll({}).then(function(dbService) {
    res.json(dbService);
  });
});

router.get("/:id", (req, res) => {
  db.Service.findOne({
    where: {
      id: req.params.id
    },
    include: [db.Service]
  }).then(function(dbService) {
    res.json(dbService);
  });
});

router.put("/:id", (req, res) => {
  db.Service.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(function(dbService) {
    res.json(dbService);
  });
});

router.delete("/:id", (req, res) => {
  db.Service.destroy({
    where: {
      id: req.body.id
    }
  }).then(function(dbService) {
    res.json("deleted");
  });
});

module.exports = router;
