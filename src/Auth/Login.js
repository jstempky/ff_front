import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import logo from "../resources/logo.png";

import "../App.css"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  navigateToForgotPW = () => {
    this.props.history.push("/forgotpw");
  }

  navigateToSignUp = () => {
    this.props.history.push("/signup");
  }



  componentDidMount(){}
  componentWillUnmount(){}

  handleEmailChange(event) {this.setState({email: event.target.value})}
  handlePasswordChange(event) {this.setState({password: event.target.value})}
  handleSubmit(event) {this.props.history.push("/dashboard");};

  render() {
    return (
      <div>
        <div className="loginLogoContainer">
          <img
            className="loginLogo"
            src={logo}
          />
        </div>
        <form
          className="loginContainer"
        >
          <input
            className="loginField"
            placeholder="email@example.com"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />

          <input
            className="loginField"
            placeholder="Password"
            secureTextEntry={true}
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <button
            className="loginButton"
            type="submit"
            onClick={this.handleSubmit}>
            Login!
          </button>
          <button
            className="forgetPasswordButton"
            type="submit"
            onClick={this.navigateToForgotPW}>
            Forgot Password?
          </button>
          <button
            className="signUpButton"
            type="submit"
            onClick={this.navigateToSignUp}>
            Join FitFort!
          </button>
        </form>
      </div>
    );
  }
}
export default withRouter(Login);
