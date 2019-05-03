const Apartment = require("../models/apartmentModel");
const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/userModel");
const { check } = require("express-validator/check");

const router = express.Router();

router.post("/", async (req, res) => {
  let apartment = await Apartment.findOne({ address: req.body.address });
  console.log("DEBUG apartment check", apartment);
  if (apartment) {
    return res.status(409).send("This apartment building already exists");
  }

  await Apartment.create({
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip
  });

  res.json("success");
  // // If User is not a manager, return error.
  // if (!req.user.isManager) res.status(400).json("Invalid token.");
  // Create the apartment
  // apartment = new Apartment({
  //   address: req.body.address,
  //   // unit: req.body.unit,
  //   city: req.body.city,
  //   state: req.body.state,
  //   zip: req.body.zip
  // _manager: req.user._id
});
// Save the apartment to generate an apartment _id
// Create the tenant and associate the aparment id to them
// let tenant = new User({
//   name: req.body.name,
//   email: req.body.email,
//   _apartment: apartment._id
// });
// // Save the user (tenant) so that an _id is generated.
// tenant = await tenant.save();
// // Now add take that user's _id and add it to the apartment._tenant
// apartment._tenant = tenant._id;
// // Now we save
// apartment = await apartment.save();

router.get("/", async (req, res) => {
  const apartments = await Apartment.find({});
  res.json(apartments);
});

router.get("/:id", async (req, res) => {
  let apartment = await Apartment.findById(req.params.id);
  res.json(apartment);
});

router.put("/:id", async (req, res) => {
  await Apartment.findOneAndUpdate({ _id: req.params.id }, req.body);
  let apartment = await Apartment.findById(req.params.id);
  res.json(apartment);
});

router.delete("/:id", async (req, res) => {
  let deletedApartment = await Apartment.findOneAndDelete({
    _id: req.params.id
  });
  res.json(deletedApartment);
});

router.get("/:id/tenants", async (req, res) => {
  let apartment = await Apartment.findById(req.params.id);
  res.json(apartment);

  const tenants = await Apartment.find({ _tenant: req.params._tenant });
  res.json("sucess");
});

module.exports = router;
