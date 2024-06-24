const express = require('express');
const router = express.Router();
const {registerUser, loginUser, currentUser, getUserDetails} = require('../controllers/userController');
const validateToken = require("../middleware/validateTokenHandler");

// router.route("/").get(getContact);

router.post("/register", registerUser);

router.get("/users", getUserDetails);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);
// router.route("/:id").get(getIDContact);

// router.route("/:id").put(updateContact);

// router.route("/:id").delete(deleteContact);

module.exports = router; 