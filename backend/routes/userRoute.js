const express = require("express");
const { createUser }  = require("../controller/userController");
const router = express.Router();

router.route("/registration").post(createUser);
module.exports = router;