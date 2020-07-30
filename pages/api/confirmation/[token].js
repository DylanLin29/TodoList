import User from "../../../models/user";
import dbConnect from "../../../utils/dbConnect";
const jwt = require("jsonwebtoken");
const links = require("../../../config/links");

dbConnect();

export default async (req, res) => {
	try {
		const decoded = jwt.verify(req.query.token, process.env.JWT);
		await User.findOneAndUpdate({ _id: decoded._id }, { confirmed: true });
	} catch (error) {
		res.send(error);
	}
	res.writeHead(302, {
		Location: links.login,
	});
	res.end();
};
