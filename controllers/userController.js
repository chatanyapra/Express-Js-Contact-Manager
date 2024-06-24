const asyncHandler = require('express-async-handler');
const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All field are mandatory!");
    }
    console.log(username, email, password);
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

const loginUser= asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const user= await User.findOne({email});
    // compare the password with hashed password
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken= jwt.sign(
            {
                user:{
                    username: user.username,
                    email: user.email,
                    id: user.id
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: "5m"}
        )
        res.status(200).json({accessToken});
    }else{
        res.status(401);
        throw new Error("Email or Password not valid!");
    }
})

// @desc GET current information
// @route GET api/user/current
// access private
const currentUser = asyncHandler(async(req, res) => {
    res.json(req.user);
})


const getUserDetails = asyncHandler(async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});


module.exports= {registerUser, loginUser, currentUser, getUserDetails};