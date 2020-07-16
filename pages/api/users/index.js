import { User, validate } from "../../../models/user";
import dbConnect from "../../../utils/dbConnect";
const _ = require("lodash");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

dbConnect();

export default async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    // Check if the user already exists (registered)
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send("User already registered.");
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
    const token = jwt.sign({ _id: newUser._id }, process.env.JWT);
    res.send(_.pick(newUser, ['_id', 'username', 'email']));
}