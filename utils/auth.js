import cookie from "cookie";
import jwt from "jsonwebtoken";
export function requiredAuth({ req, res }) {
	const { auth } = cookie.parse(req.headers.cookie || "");
	try {
		const decoded = jwt.verify(auth, process.env.JWT);
		return decoded;
	} catch (err) {
		console.log(err);
		res.writeHead(302, {
			Location: "http://localhost:3000/login",
		});
		res.end();
		return "";
	}
}

export function optionalAuth({ req, res }) {
	const { auth } = cookie.parse(req.headers.cookie || "");
	try {
		const decoded = jwt.verify(auth, process.env.JWT);
		return decoded;
	} catch (err) {
		return "";
	}
}
