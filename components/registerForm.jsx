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
        email: Joi.string().required().label("Email"),
        password: Joi.string().required().label("Password")
    }

    doSubmit = () => {
        // Call the server
        console.log("Submitted");
    }

    render() {
        return (
            <div className="container loginForm">
                	<div className="">
	                  	<div className="card-section border rounded p-3">
	                  		<div className="card-header-register pb-5">
		                      	<h2 className="card-header-title text-white pt-3">Register</h2>
	                  		</div>
	                    	<div className="card-body">
                                  <form onSubmit={this.handleSubmit}>
                                    {this.renderInput("username", "Username")}
                                    {this.renderInput("email", "Email")}
                                    {this.renderInput("password", "Password", "password")}
                                    {this.renderButton("Register")}
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