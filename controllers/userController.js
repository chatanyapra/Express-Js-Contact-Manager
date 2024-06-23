const asyncHandler = require('express-async-handler');
const User = require('../model/userModel');
const bcrypt = require('bcrypt');

const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All field are mandatory!");
    }
    const userAvaliable= await User.findOne({email});
    if(userAvaliable){
        res.status(400);
        throw new Error("User already exist");
    }
    // Hash Password---------
    const hashedPassword= await bcrypt.hash(password, 10);
    console.log("hashed password of user",hashedPassword);
    const user = await User.create({
        username, email, password: hashedPassword
    })
    if(user){
        res.status(201).json({_id: user.id, email: user.email});
    }else{
        res.status(400);
        throw new Error("User data is not valid");
    }
    res.json({message: "Register the user"});
})

module.exports= registerUser;