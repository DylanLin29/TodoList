import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faListAlt,
	faChevronDown,
	faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Router from "next/router";
const links = require("../config/links");
const axios = require("axios");
import _ from "lodash";

const Navbar = ({ authenticated, currentPage }) => {
	const [todoItems, setTodoItems] = useState([]);
	const [dropdownOpen, setdropDownOpen] = useState(false);

	const handleLogout = async () => {
		await axios.post(links.logout);
		Router.push("/");
	};

	useEffect(() => {
		if (authenticated) {
			const today = new Date();
			const date = String(today.getDate()).padStart(2, "0");
			const month = String(today.getMonth() + 1).padStart(2, "0");
			const year = today.getFullYear();
			const currentDate = `${month}-${date}-${year}`;
			const fetchData = async () => {
				const { data } = await axios.get(links.notes);
				const todayTodos = _.filter(data.notes, { date: currentDate });
				todayTodos &&
					setTodoItems(
						todayTodos.length > 4 ? todayTodos.slice(0, 4) : todayTodos
					);
			};
			fetchData();
		}
	}, []);

	return (
		<nav
			className={
				currentPage === "index"
					? "navbar navbar-expand fixed-top"
					: "navbar navbar-expand"
			}
		>
			<a className="navbar-brand" href="/">
				<FontAwesomeIcon icon={faListAlt} size="2x" />
			</a>
			{/* <button
				className="navbar-toggler navbar-nav ml-auto"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon">
					<FontAwesomeIcon icon={faBars} />
				</span>
			</button> */}

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
						<>
							{currentPage === "index" && (
								<>
									<li className="nav-item">
										<a
											className="nav-link nav-auth-button"
											style={{ cursor: "pointer" }}
											onClick={() => setdropDownOpen(!dropdownOpen)}
										>
											Today's Due <FontAwesomeIcon icon={faChevronDown} />
										</a>
									</li>
									{dropdownOpen && (
										<div className="nav-dropdown-content">
											{todoItems.length ? (
												<>
													{todoItems.map(({ title }) => {
														return <p key={title}>{title}</p>;
													})}
													<hr />
													<p>
														<a href="/todo">More Details</a>
													</p>
												</>
											) : (
												<p style={{ color: "grey" }}>None</p>
											)}
										</div>
									)}
								</>
							)}
							<li className="nav-item">
								<a
									className="nav-link nav-auth-button nav-logout"
									style={{ cursor: "pointer" }}
									onClick={handleLogout}
								>
									Logout
								</a>
							</li>
						</>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
