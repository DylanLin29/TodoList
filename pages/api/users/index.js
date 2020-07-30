import User from "../../../models/user";
import { validateRegisterUser } from "../../../utils/validate";
import dbConnect from "../../../utils/dbConnect";
const links = require("../../../config/links");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

dbConnect();

export default async (req, res) => {
	const { error } = validateRegisterUser(req.body);
	if (error) {
		return res.status(400).json(error.details[0].message);
	}

	// Check if the user already exists (registered)
	const user = await User.findOne({ email: req.body.email });
	if (user) {
		if (user.confirmed) {
			return res
				.status(400)
				.json({ success: false, message: "User already registered." });
		} else {
			await User.findOneAndDelete({ email: req.body.email });
		}
	}

	// If the user is not existed, create another user and
	// save in the database
	const newUser = await User.create(req.body);

	// Hash password before save in the database
	const salt = await bcrypt.genSalt(10);
	newUser.password = await bcrypt.hash(newUser.password, salt);
	await newUser.save();

	// Email Verification

	const transporter = nodemailer.createTransport({
		service: "Gmail",
		auth: {
			user: process.env.EMAIL_ACCOUNT,
			pass: process.env.EMAIL_PASSWORD,
		},
	});

	jwt.sign(
		{ _id: newUser._id },
		process.env.JWT,
		{
			expiresIn: "1d",
		},
		(err, emailToken) => {
			const verficationUrl = `${links.verification}/${emailToken}`;
			transporter.sendMail({
				from: '"TodoList" <TodoList@no-replay.com>',
				to: newUser.email,
				subject: "TodoList Email Confirmation",
				html: `Hi, ${newUser.username} <br> Please click <a href="${verficationUrl}">Here</a>
				to confirm your email for <a href=https://dylan-todolist.herokuapp.com/>TodoList</a>`,
			});
		}
	);
	return res.status(200).json({
		success: true,
		message: "Verification email has been sent!",
	});
};
