import Joi from "joi-browser";
import Form from "../components/common/form";
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
        username: Joi.string().required().label("Username"),
        email: Joi.email().required().label("Email"),
        password: Joi.min(5).required().label("Password")
    }

    doSubmit = () => {
        // Call the server
        console.log("Submitted");
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