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

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  navigateToDashboard = () => {
    this.props.history.push("/dashboard");
  }

  navigateToSignUp = () => {
    this.props.history.push("/signup");
  }

  componentDidMount(){}
  componentWillUnmount(){}

  handleEmailChange(event) {this.setState({email: event.target.value})}
  handlePasswordChange(event) {this.setState({password: event.target.value})}
  handleSubmit(event) {this.props.history.push("/");};

  render() {
    return (
      <form
        className="loginContainer"
      >
        <input
          className="loginField"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />

        <input
          className="loginField"
          placeholder="Password"
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
          onClick={this.navigateToDashboard}>
          Forgot Password
        </button>
        <button
          className="signUpButton"
          type="submit"
          onClick={this.handleSubmit}>
          Join FitFort!
        </button>
      </form>
    );
  }
}
export default withRouter(Login);
