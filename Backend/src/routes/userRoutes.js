const express = require("express");
const { submitUser, getAllUsers } = require("../controllers/userController");
const authMiddleware = require("../middleware/auth");
const upload = require("../middleware/fileUpload");

const router = express.Router();

// Routes
router.post("/submit", upload.array("images", 10), submitUser);
// router.get("/",authMiddleware, getAllUsers);
router.get("/", getAllUsers);

module.exports = router;
