import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "../App.css"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
  }

  navigateToDashboard = () => {
    this.props.history.push("/dashboard");
  }

  navigateToSignUp = () => {
    this.props.history.push("/signup");
  }

  submit = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div
        className="loginContainer"
      >
        <input
          className="loginField"
          placeholder="Email" value={this.state.email} />

        <input
          className="loginField"
          placeholder="Password"
          type="password"
          value={this.state.password}
        />
        <button
          className="loginButton"
          type="submit"
          onClick={this.navigateToDashboard}>
          Login!
        </button>
        <button
          className="forgetPasswordButton"
          type="submit"
          onClick={this.navigateToDashboard}>
          Forgot Password
        </button>
        <button
          className="signUpButton"
          type="submit"
          onClick={this.navigateToSignUp}>
          Join FitFort!
        </button>
      </div>
    );
  }
}
export default withRouter(Login);
