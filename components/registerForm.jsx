import { Component } from 'react';

class RegisterForm extends Component {
    render() {
        return (
            <div className="container loginForm">
                	<div className="">
	                  	<div className="card-section border rounded p-3">
	                  		<div className="card-header-register pb-5">
		                      	<h2 className="card-header-title text-white pt-3">Register</h2>
	                  		</div>
	                    	<div className="card-body">
                                  <form>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input id="username" type="text" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input id="email" type="text" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input id="password" type="text" className="form-control"/>
                                    </div>
                                    <button className="btn btn-primary">Login</button>
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