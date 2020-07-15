import { Component } from 'react';
import Input from "../components/common/formInput";

class LoginForm extends Component {

    state = {
        account: {
            username: "",
            password: ""
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
    }

    handleChange = ({ currentTarget: input }) => {
        const account = { ...this.state.account };
        account[input.name] = input.value;
        this.setState({ account });
    }

    render() {
        return (
            <div className="container loginForm">
                <div className="card-section border rounded p-3">
                    <div className="card-header-login pb-5">
                        <h2 className="card-header-title text-white pt-3">Login</h2>
                    </div>
                    <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                            <Input
                                name="username"
                                value={this.state.account.username}
                                label="Username"
                                onChange={this.handleChange}
                            />
                            <Input
                                name="password"
                                value={this.state.account.password}
                                label="Password"
                                onChange={this.handleChange}
                            />
                            <button className="btn btn-primary">Login</button>
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