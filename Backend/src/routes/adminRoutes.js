const express = require("express");
const { loginAdmin, createAdmin, logoutAdmin } = require("../controllers/adminController");

const router = express.Router();

// Admin routes
router.post("/login", loginAdmin);
router.post("/logout", logoutAdmin);
// router.post("/create", createAdmin);

module.exports = router;
