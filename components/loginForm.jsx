import Joi from "joi-browser";
import Form from "../components/common/form";
import { Router } from "next/router";
import { Button } from "semantic-ui-react";
const axios = require("axios");

class LoginForm extends Form {

    state = {
        data: {
            email: "",
            password: ""
        },
        errors: {},
        response: {
            success: true,
            message: ""
        }
    }

    schema = {
        email: Joi.string().required().label("Email"),
        password: Joi.string().required().label("Password")
    };


    doSubmit =  async() => {
        // Call the server
        try {
            const res = await axios.post("/api/users", this.state.data);
            console.log("Submitted");
            Router.push("/");
        } catch (err) {
            if(err.response.status === 400) {
                this.setState({ response: err.response.data });
            }
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
                            {
                                !this.state.response.success &&
                                <div className="login-warning-wrapper">
                                    <Button negative className="login-warning">Invalid email or password</Button>
                                </div>
                            }
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