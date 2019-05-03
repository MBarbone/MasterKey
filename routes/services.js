const express = require("express");
const Service = require("../models/serviceModel");
const { check } = require("express-validator/check");

const router = express.Router();

router.post("/", async (req, res) => {
  // remember to add input verification here
  const service = new Service({
    requestType: req.body.requestType,
    requestDetails: req.body.requestDetails
  });

  const data = await service.save();

  // removed [ auth ]

  res.send(`Service successfully posted.` + "\n" + `${data}`);
});

router.get("/", async (req, res) => {
  if (manager) {
    const services = await Service.find({});
    res.send(services);
  } else {
    Service.find({ email: req.body.email });
    res.send(services);
  }
});

router.get("/:id", async (req, res) => {
  let service = await Service.findById(req.params.id);
  res.json(service);
});

router.put("/:id", async (req, res) => {
  await Service.findOneAndUpdate({ _id: req.params.id }, req.body);
  let service = await Service.findById(req.params.id);
  res.json(service);
});

router.delete("/:id", async (req, res) => {
  let deletedService = await Service.findOneAndDelete({ _id: req.params.id });
  res.json("Service request removed. Thank You.");
});

module.exports = router;
