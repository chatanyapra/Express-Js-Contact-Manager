const express = require('express');
const router = express.Router();
const {getContact, createContact} = require('../controllers/contactController');

router.route("/").get(getContact);

router.route("/").post(createContact);

// router.route("/:id").get((req, res) => {
//     res.status(200).json({message: `Get The id: ${req.params.id}`});
// });

// router.route("/:id").put((req, res) => {
//     res.status(200).json({message: `PUT The id: ${req.params.id}`});
// });

// router.route("/:id").delete((req, res) => {
//     res.status(200).json({message: `DELETE The id: ${req.params.id}`});
// });


module.exports = router; 