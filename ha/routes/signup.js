const express = require('express');
const signController = require("../controller/signup");
const router = express.Router();

router.post("/register", signController.createUser);

module.exports = router;
