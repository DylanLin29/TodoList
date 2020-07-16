import { User } from "../../../models/user";
import dbConnect from "../../../utils/dbConnect";
const _ = require("lodash");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

dbConnect();

export default async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send("Invalid email or password.");
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(400).send("Invalid email or password.");
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT);

    res.send(token);
}

function validate(user) {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    }
    return Joi.validate(user, schema);
}