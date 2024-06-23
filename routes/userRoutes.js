const express = require('express');
const router = express.Router();
const registerUser = require('../controllers/userController');

// router.route("/").get(getContact);

router.route("/").post(registerUser);

// router.route("/:id").get(getIDContact);

// router.route("/:id").put(updateContact);

// router.route("/:id").delete(deleteContact);

module.exports = router; 