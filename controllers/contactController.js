// @desc GET all contact
// @route GET api/texts
// @access public
const getContact = (req, res) => {
    res.status(200).json({message: 'GET the data'});
}

const createContact = (req, res) => {
    res.status(201).json({message: 'POST the data'});
}

module.exports = {getContact, createContact};