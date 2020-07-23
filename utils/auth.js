import React from "react";

const AuthContext = React.createContext({
	isAuthenticated: false,
	setAuthenticated: () => {},
});

export const AuthProvider = ({ childrenComponents, authenticated }) => {
	const [isAuthenticated, setAuthenticated] = React.useState(authenticated);
	return (
		<AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
			{childrenComponents}
		</AuthContext.Provider>
	);
};

export function userAuth() {
	const context = React.useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}

export function userIsAuthenticated() {
	const context = userAuth();
	return context.isAuthenticated;
}
