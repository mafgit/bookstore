const express = require("express");
const {
  signup,
  login,
  logout,
  check_auth,
  check_admin,
  getUsers,
} = require("../controllers/authController.js");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);

router.get("/check_auth", check_auth, (req, res) => {
  res.json({ msg: "Authenticated", auth: true, user: req.session.user });
});
router.get("/check_admin", check_admin, (req, res) => {
  res.json({ msg: "Admin", admin: true, user: req.session.user });
});
router.get("/get_users", check_admin, getUsers);

module.exports = router;
