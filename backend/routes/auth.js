const express = require("express");
const {
  signup,
  login,
  logout,
  check_auth,
} = require("../controllers/authController.js");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);

module.exports = router;
