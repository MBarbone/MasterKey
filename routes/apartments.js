const db = require("../models");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  let apartment = await db.Apartment.findOne({ address: req.body.address });
  console.log("[DEBUG] POST /api/apartments", apartment);
  if (apartment) {
    return res.status(409).send("This apartment building already exists");
  }
  const newApt = await db.Apartment.create(req.body);
  res.json(newApt);
});

//   // // If User is not a manager, return error.
//   // if (!req.user.isManager) res.status(400).json("Invalid token.");
//   // Create the apartment
//   // apartment = new Apartment({
//   //   address: req.body.address,
//   //   // unit: req.body.unit,
//   //   city: req.body.city,
//   //   state: req.body.state,
//   //   zip: req.body.zip
//   // _manager: req.user._id
// });
// // Save the apartment to generate an apartment _id
// // Create the tenant and associate the aparment id to them
// // let tenant = new User({
// //   name: req.body.name,
// //   email: req.body.email,
// //   _apartment: apartment._id
// // });
// // // Save the user (tenant) so that an _id is generated.
// // tenant = await tenant.save();
// // // Now add take that user's _id and add it to the apartment._tenant
// // apartment._tenant = tenant._id;
// // // Now we save
// // apartment = await apartment.save();

router.get("/", (req, res) => {
  db.Apartment.findAll({
    include: [db.User]
  }).then(function(dbApartment) {
    res.json(dbApartment);
  });
});

router.get("/:id", (req, res) => {
  db.Apartment.findOne({
    where: {
      id: req.params.id
    },
    include: [db.User]
  }).then(function(dbApartment) {
    res.json(dbApartment);
  });
});

router.put("/:id", (req, res) => {
  db.Apartment.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(function(dbApartment) {
    res.json(dbApartment);
  });
});

router.delete("/:id", (req, res) => {
  db.Apartment.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbApartment) {
    res.json(dbApartment);
  });
});

module.exports = router;
