const express = require('express');
const cors = require('cors');
const userController = require("../controller/user");
const authMiddleware = require("../utils/authmiddleware");
const router = express.Router();

router.use(cors());
router.get("/users", authMiddleware, userController.getUsers);

module.exports = router;
