import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import Router from "next/router";
const links = require("../config/links");
const axios = require("axios");
const Navbar = ({ authenticated, currentPage }) => {
	const handleLogout = async () => {
		await axios.post(links.logout);
		Router.push("/");
	};
	return (
		<nav
			className={
				currentPage === "index"
					? "navbar navbar-expand-lg fixed-top"
					: "navbar navbar-expand-lg"
			}
		>
			<a className="navbar-brand" href="/">
				<FontAwesomeIcon icon={faListAlt} size="2x" />
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						{authenticated && (
							<a
								className={
									currentPage === "todo" ? "nav-link nav-todos" : "nav-link"
								}
								href="/todo"
							>
								Todos<span className="sr-only">(current)</span>
							</a>
						)}
					</li>
					<li className="nav-item">
						{authenticated && (
							<a
								className={
									currentPage === "timeline"
										? "nav-link nav-timeline"
										: "nav-link"
								}
								href="/timeline"
							>
								Timeline
							</a>
						)}
					</li>
				</ul>
				<span>TODOLIST</span>
				<ul className="navbar-nav ml-auto">
					{!authenticated ? (
						<>
							<li className="nav-item">
								<a className="nav-link nav-auth-button" href="/login">
									Login
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link nav-auth-button" href="/register">
									Register
								</a>
							</li>
						</>
					) : (
						<li className="nav-item">
							<a
								className="nav-link nav-auth-button nav-logout"
								style={{ cursor: "pointer" }}
								onClick={handleLogout}
							>
								Logout
							</a>
						</li>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
