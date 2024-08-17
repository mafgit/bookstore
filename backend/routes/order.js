const express = require("express");
const {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder,
} = require("../controllers/ordersController");

const router = express.Router();

// GIVE ORDER
router.post("/", createOrder);

// GET ALL ORDERS
router.get("/", getOrders);

// GET ORDER BY ID
router.get("/:id", getOrderById);

// UPDATE ORDER STATUS
router.put("/:id/status", updateOrderStatus);

// DELETE ORDER 
router.delete("/:id", deleteOrder);

module.exports = router;
