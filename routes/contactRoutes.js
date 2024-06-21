const express = require('express');
const router = express.Router();
const {getContact, createContact, getIDContact, deleteContact, updateContact} = require('../controllers/contactController');

router.route("/").get(getContact);

router.route("/").post(createContact);

router.route("/:id").get(getIDContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

// router.route("/:id").put((req, res) => {
//     res.status(200).json({message: `PUT The id: ${req.params.id}`});
// });

// router.route("/:id").delete((req, res) => {
//     res.status(200).json({message: `DELETE The id: ${req.params.id}`});
// });


module.exports = router; 