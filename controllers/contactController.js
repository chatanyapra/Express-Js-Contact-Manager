const asyncHandler = require('express-async-handler');
const Contact = require('../model/contactModel');
// @desc GET all contact
// @route GET api/texts
// @access public
const getContact = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

const createContact = asyncHandler(async (req, res) => {
    console.log("The required body is: ", req.body);
    const {name, email} = req.body;
    if(!name || !email){
        res.status(400);
        throw new Error('All field are required');
    }
    const contact = await Contact.create({
        name, email
    })
    res.status(201).json(contact);
});

module.exports = {getContact, createContact};