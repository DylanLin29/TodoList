import User from "../../../models/user";
import { validateLoginUser } from "../../../utils/validate";
import dbConnect from "../../../utils/dbConnect";
const _ = require("lodash");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

dbConnect();

export default async (req, res) => {
	const { error } = validateLoginUser(req.body);
	if (error) {
		return res
			.status(400)
			.json({ success: false, message: error.details[0].message });
	}

	const user = await User.findOne({ email: req.body.email });
	if (!user) {
		return res
			.status(400)
			.json({ success: false, message: "Invalid email or password." });
	}

	const validPassword = await bcrypt.compare(
		req.body.password,
		user.password
	);
	if (!validPassword) {
		return res
			.status(400)
			.json({ success: false, message: "Invalid email or password." });
	}

	const token = jwt.sign({ _id: user._id }, process.env.JWT);

	res.json("Successfully logging in");
};
