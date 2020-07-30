import Joi from "joi-browser";
const axios = require("axios");
import Form from "./common/form";
import Router from "next/router";
import { Button } from "semantic-ui-react";
class RegisterForm extends Form {
	state = {
		data: {
			username: "",
			email: "",
			password: "",
		},
		errors: {},
		response: {
			success: true,
			message: "",
		},
	};

	schema = {
		username: Joi.string().min(5).required().label("Username"),
		email: Joi.string().email().min(5).required().label("Email"),
		password: Joi.string().min(5).required().label("Password"),
	};

	doSubmit = async () => {
		// Call the server
		try {
			const { data } = await axios.post("/api/users", this.state.data);
			this.setState({ response: data });
			// Router.push("/");
		} catch (err) {
			this.setState({ response: err.response.data });
		}
	};

	render() {
		const { success, message } = this.state.response;
		return (
			<div className="container appForm">
				<div className="">
					<div className="card-section border rounded p-3">
						<div className="card-header-register pb-5">
							<h2 className="card-header-title text-white pt-3">Register</h2>
						</div>
						<div className="card-body">
							<form onSubmit={this.handleSubmit}>
								{success && message && (
									<div className="register-success-wrapper">
										<Button primary className="register-success">
											{message}
										</Button>
									</div>
								)}
								{this.renderInput("username", "Username", "register-label")}
								{this.renderInput(
									"email",
									"Email",
									"register-label",
									undefined,
									success ? undefined : message
								)}
								{this.renderInput(
									"password",
									"Password",
									"register-label",
									"password"
								)}
								{this.renderButton("Register", " register-button")}
								<hr />
								<p>
									<span className="card-text">Already a member?</span>
									<a href="/login">Login!</a>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default RegisterForm;
