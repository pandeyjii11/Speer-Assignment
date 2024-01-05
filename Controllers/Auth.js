const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();


exports.signUp = async(req, res) => {
    try {
        // Fetch Data
        const {firstName, lastName, email, confirmPassword, password} = req.body;

        // validagte data
        if(!firstName || !lastName || !email ||!confirmPassword || !password) {
            return res.status(400).json(
                {
                    success: false,
                    message: "All fields required",
                }
            );
        }

        // Check if user already exists
        const isUserExists = await User.findOne({email: email});

        // console.log(isUserExists);

        if(isUserExists) {
            return res.status(400).json(
                {
                    success: false, 
                    message: "User Already Exists",
                }
            );
        }

        // Check if password matches
        if(confirmPassword !== password) {
            res.status(400).json(
                {
                    success: false,
                    message: "Passwords fo not match",
                }
            );
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);



        // create a DB instance
        const newUser = await User.create(
            {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hashedPassword,
                notes: [],
            }
        );

        // Send a json response
        res.status(200).json(
            {
                success: true,
                message: "User Created Successfully",
                user: newUser,
            }
        );

    }
    catch(error) {
        console.error(error);
        console.log(error.message);

        // Send a json response
        res.status(500).json(
            {
                success: false,
                message: "Internal Server Error",
                errorMessage: error.message,
            }
        );
    }
}

exports.login = async(req, res) => {
    try {
        // Fetch data 
        const {email, password} = req.body;

        // Valodate Data
        if(!email || !password) {
            return res.status(400).json(
                {
                    success: false,
                    message: "All fields required",
                }
            );
        }

        // If user exists find the User
        const user = await User.findOne({email: email});

        // if no user exists
        if(!user) {
            return res.status(404).json(
                {
                    success: false,
                    message: "Np user exists",
                }
            );
        }

        // if user exists then match the password
        if(!(await bcrypt.compare(password, user.password)))
        {
            return res.status(400).json(
                {
                    success: false,
                    message: "Password Incorret"
                }
            );
        }

        // If password match then login the user and create the json web token
        const payload = {
            email: email,
            id: user._id,
        }

        const token = jwt.sign(payload, process.env.jwt_secret,  {
            expiresIn: "2h",
        });

        // Generate cookie
        const options = {
            expiresIn: new Date(Date.now() + 3*24*60*60*1000),
            httpOnly: true,
        }


        // Send a success response with cookie creation
        res.cookie("token", token, options).status(200).json(
            {
                success: true,
                message: "User login Successful",
                token: token
            }
        );
    }
    catch(error) {
        console.error(error);
        console.log(error.message);

        // Send json response
        res.status(500).json(
            {
                success: false,
                message: "Internal Server Error",
            }
        );
    }
}