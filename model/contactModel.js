const mongoose= require('mongoose');
const contactSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter the name"]
        },
        email: {
            type: String,
            required: [true, "Please enter the email"]
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Contact", contactSchema);