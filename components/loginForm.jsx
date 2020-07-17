import Joi from "joi-browser";
import Form from "../components/common/form";
import { Router } from "next/router";
const axios = require("axios");

class LoginForm extends Form {

    state = {
        data: {
            email: "",
            password: ""
        },
        errors: {}
    }

    schema = {
        email: Joi.string().required().label("Email"),
        password: Joi.string().required().label("Password")
    };


    doSubmit =  async() => {
        // Call the server
        try {
            const res = await axios.post("/api/users", this.state.data);
            console.log(res);
            console.log("Submitted");
            Router.push("/");
        } catch (e) {
            console.log(e);
        }
    }

    render() {

        return (
            <div className="container appForm">
                <div className="card-section border rounded p-3">
                    <div className="card-header-login pb-5">
                        <h2 className="card-header-title text-white pt-3">Login</h2>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            {this.renderInput("email", "Email", "login-label")}
                            {this.renderInput("password", "Password", "login-label", "password")}
                            {this.renderButton("Login", " login-button")}
                            <hr />
                            <p>
                                <span className="card-text">Not a member?</span>
                                <a href="/register">Sign up!</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;