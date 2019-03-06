const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.post("/", (req, res, next) => {
  const { trayType, plantType, orderDate, deliveryDate } = req.body;
  Order.create({ trayType, plantType, orderDate, deliveryDate }).then(order => {
    res.json(order);
  });
});

module.exports = router;
