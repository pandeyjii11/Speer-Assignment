const User = require("../Models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async(req, res, next) => {
    try {
        // fetc token
        const token = req.cookies.token || req.header("Authorization").replace("Bearer ", "");


        // console.log("Here");
        // console.log("Token in auth in middleware: ", token);

        if(!token) {
            return res.status(404).json(
                {
                    success: false, 
                    message: "Token is missing"
                }
            );
        }

        // Verify Token
        try {
            const payload = jwt.verify(token, process.env.jwt_secret);
            console.log("Payload received from the token is: ", payload);

            req.user = payload;
        }
        catch(error) {
            return res.status(404).json(
                {
                    success: false,
                    message: "Token is invalid",
                }
            );
        }

        next();
    }
    catch(error) {
        console.error(error);
        console.log(err.message);

        res.status(500).json(
            {
                success: false,
                message: "Innternal Server Error",
            }
        );
    }
}