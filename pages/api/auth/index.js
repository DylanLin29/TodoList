import User from "../../../models/user";
import { validateLoginUser } from "../../../utils/validate";
import dbConnect from "../../../utils/dbConnect";
const _ = require("lodash");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");

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

	if (user && !user.confirmed) {
		return res
			.status(400)
			.json({ success: false, message: "Please validate this email" });
	}

	const validPassword = await bcrypt.compare(req.body.password, user.password);
	if (!validPassword) {
		return res
			.status(400)
			.json({ success: false, message: "Invalid email or password." });
	}

	const token = jwt.sign({ _id: user._id }, process.env.JWT, {
		expiresIn: "1h",
	});
	res.setHeader(
		"Set-Cookie",
		cookie.serialize("auth", token, {
			httpOnly: true,
			secure: process.env.NODE_ENV !== "development",
			sameSite: "strict",
			maxAge: 3600,
			path: "/",
		})
	);

	res.json("Successfully logging in");
};
