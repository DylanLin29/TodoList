import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import cookie from "cookie";
const Navbar = ({ authenticated }) => {
	return (
		<nav className="navbar navbar-expand-lg">
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

			<div
				className="collapse navbar-collapse"
				id="navbarSupportedContent"
			>
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<a className="nav-link" href="/todo">
							Todo<span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/timeline">
							Timeline
						</a>
					</li>
				</ul>
				<ul className="navbar-nav ml-auto">
					{!authenticated ? (
						<>
							<li className="nav-item">
								<a className="nav-link" href="/login">
									Login
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link register"
									href="/register"
								>
									Register
								</a>
							</li>
						</>
					) : (
						<li className="nav-item">
							<a
								className="nav-link"
								style={{ cursor: "pointer" }}
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
