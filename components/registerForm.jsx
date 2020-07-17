import Joi from "joi-browser";
const axios = require("axios");
import Form from "./common/form";
import Router from "next/router";
class RegisterForm extends Form {
    state = {
        data: {
            username: "",
            email: "",
            password: ""
        },
        errors: {}
    }

    schema = {
        username: Joi.string().min(5).required().label("Username"),
        email: Joi.string().email().min(5).required().label("Email"),
        password: Joi.string().min(5).required().label("Password")
    }

    doSubmit = async () => {
        // Call the server
        const res = await axios.post("/api/users", this.state.data);
        console.log("Submitted");
        Router.push("/");
    }

    render() {
        return (
            <div className="container appForm">
                	<div className="">
	                  	<div className="card-section border rounded p-3">
	                  		<div className="card-header-register pb-5">
		                      	<h2 className="card-header-title text-white pt-3">Register</h2>
	                  		</div>
	                    	<div className="card-body">
                                  <form onSubmit={this.handleSubmit}>
                                    {this.renderInput("username", "Username", "register-label")}
                                    {this.renderInput("email", "Email", "register-label")}
                                    {this.renderInput("password", "Password", "register-label", "password")}
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