const express = require("express");
const Payment = require("../models/paymentModel");
const auth = require("../middleware/auth");
const { check } = require("express-validator/check");

const router = express.Router();

router.post("/", async (req, res) => {
  // remember to add input verification here
  const payment = new Payment(
    { amount: req.body.amount },
    { _apartment: req.body._apartment }
  );

  const data = await payment.save();

  // removed [ auth ]

  res.send(`Payment successfully posted.` + "\n" + `${data}`);
});

// manager payment get
router.get("/", async (req, res) => {
  if (manager) {
    const payments = await Payment.find({});
    res.send(payments);
  } else {
    Payment.find({ email: req.body.email });
    res.send(payments);
  }
});

router.get("/:id", async (req, res) => {
  let payment = await Payment.findById(req.params.id);
  res.json(payment);
});

router.put("/:id", async (req, res) => {
  await Payment.findOneAndUpdate({ _id: req.params.id }, req.body);
  let payment = await Payment.findById(req.params.id);
  res.json(payment);
});

router.delete("/:id", async (req, res) => {
  let deletedPayment = await Payment.findOneAndDelete({ _id: req.params.id });
  res.json(deletedPayment);
});

module.exports = router;
