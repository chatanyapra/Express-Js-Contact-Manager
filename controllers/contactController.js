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

const getIDContact = asyncHandler(async (req, res) => {
    const contacts = await Contact.findById(req.params.id);
    if (!contacts) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contacts);
});

const deleteContact = asyncHandler(async (req, res) => {
    const contacts = await Contact.findById(req.params.id);
    console.log(contacts);
    if (!contacts) {
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json(contacts);
});

const updateContact = asyncHandler(async (req, res) => {
    const contacts = await Contact.findById(req.params.id);
    if (!contacts) {
        res.status(404);
        throw new Error("Contact not found");
    }
    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    )
    res.status(200).json(updateContact);
});

module.exports = {getContact, createContact, getIDContact, deleteContact, updateContact};