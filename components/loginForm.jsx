import Joi from "joi-browser";
import Form from "../components/common/form";

class LoginForm extends Form {

    state = {
        data: {
            username: "",
            password: ""
        },
        errors: {}
    }

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    };


    doSubmit = () => {
        // Call the server
        console.log("Submitted");
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
                            {this.renderInput("username", "Username", "login-label")}
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