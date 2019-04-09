const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.post("/", (req, res, next) => {
  const {
    orderDate,
    deliveryDate,
    plantType,
    trayType,
    totalSeeds,
    notes
  } = req.body;
  Order.create({
    orderDate,
    deliveryDate,
    plantType,
    trayType,
    totalSeeds,
    notes
  }).then(order => {
    res.json(order);
  });
});

router.get("/", (req, res, next) => {
  Order.find({}).then(orders => {
    res.json(orders);
  });
});

module.exports = router;
