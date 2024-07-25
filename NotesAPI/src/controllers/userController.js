const userModel = require("models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";

const signup = async(req, res) => {

    // Existing User Check
    // Hashed Password
    // User Creation
    // Token Gerneration

    const {username, email, passowrd} = req.body;
    try {

        const existingUser = await userModel.findOne({email: email});
        if(existingUser) {
            return res.status(400).json({message: "User already exists"});
        }

        const hashedPassword = await bcrypt.hash(passowrd, 10);

        const result = await userModel.create({
            email: email,
            passowrd: hashedPassword,
            username: username
        });

        const token = jwt.sign({email: result.email, id: result._id}, SECRET_KEY);
        res.status(201).json({user: result, token});

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }


} 

const signin = async (req, res) => {

    const {email, password} = req.body;

    try {

        const existingUser = await userModel.findOne({email: email});
        if(!existingUser) {
            return res.status(404).json({message: "User Not Found"});
        }

        const matchPasssword = await bcrypt.compare(password, existingUser.passowrd);

        if(!matchPasssword) {
            return res.status(400).json({message: "Invalid creditianls"});
        }

        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, SECRET_KEY);
        res.status(201).json({user: existingUser, token});



    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }


}

module.exports = { signup, signin };