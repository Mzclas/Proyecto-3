const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.post("/", (req, res, next) => {
  const { trayType, plantType, orderDate, deliveryDate } = req.body;
  Order.create({ trayType, plantType, orderDate, deliveryDate }).then(order => {
    res.json(order);
  });
});

router.get("/", (req, res, next) => {
  Order.find({}).then(orders => {
    res.json(orders);
  });
});

module.exports = router;
