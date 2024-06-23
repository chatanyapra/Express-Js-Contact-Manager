const mongoose = require('mongoose');
const contactSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please enter the name"]
        },
        email: {
            type: String,
            required: [true, "Please enter the email"],
            unique : [true, "Email already exist"]
        },
        password: {
            type: String,
            required: [true, "Please enter the password"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", contactSchema);