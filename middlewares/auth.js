import jwt from "jsonwebtoken";

function auth(req, res, next) {
	const token = req.cookies.auth;
	if (!token) {
		return res.status(401).json("Access denied. No token provided");
	}
	try {
		const decoded = jwt.verify(token, process.env.JWT);
		req.user = decoded;
		next();
	} catch (e) {
		res.status(400).json("Invalid token.");
	}
}

export default auth;
