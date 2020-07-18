import User from "../../../models/user";
import { validateRegisterUser } from "../../../utils/validate";
import dbConnect from "../../../utils/dbConnect";
const _ = require("lodash");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
import cookie from "cookie";

dbConnect();

export default async (req, res) => {
    const { error } = validateRegisterUser(req.body);
    if (error) {
        return res.status(400).json(error.details[0].message);
    }

    // Check if the user already exists (registered)
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).json({ success: false, message: "User already registered." });
    }

    // If the user is not existed, create another user and 
    // save in the database
    const newUser = await User.create(req.body);

    // Hash password before save in the database
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    await newUser.save();

    // only get the 'username' and 'email' property to 
    // hide user's password
    const token = jwt.sign({ _id: newUser._id }, process.env.JWT, { expiresIn: '1h' });
    // res.setHeader("x-auth-token", token);
    res.setHeader("Set-Cookie", cookie.serialize('auth', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 3600,
        path: '/'
    }));
    res.status(200).json({ success: true, message: "Successfully Registered!" });
}