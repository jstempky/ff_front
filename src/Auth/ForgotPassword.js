import React, {Component} from "react";
import {withRouter} from 'react-router-dom';

import logo from "../resources/logo.png";

import "../App.css"

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  handleSubmit(event) {this.props.history.push("/login");};

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
          <button
            className="loginButton"
            type="submit"
            onClick={this.handleSubmit}>
            Reset Password
          </button>
        </form>
      </div>
    );
  }
}
export default withRouter(ForgotPassword);
