const cookie = require("cookie");
export default async (req, res) => {
	await res.setHeader(
		"Set-Cookie",
		cookie.serialize("auth", "", {
			maxAge: -1,
			path: "/",
		})
	);
	res.json("Successfully logged out");
};
