const express = require("express");
const cors = require("cors");
const { login, refreshToken } = require("../controller/login");
const router = express.Router();
router.post("/login", login);
router.post("/refresh-token", refreshToken);

module.exports = router;
