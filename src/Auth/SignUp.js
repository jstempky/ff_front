import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
  }

  submit = () => {
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div
        className="registerContainer"
      >
        <input
          className="registerField"
          placeholder="Username"
          value={this.state.email} />
        <input
          className="registerField"
          placeholder="First Name" value={this.state.password} />
        <input
          className="registerField"
          placeholder="Last Name" value={this.state.password} />
        <input
          className="registerField"
          placeholder="Sex" value={this.state.password} />
        <input
          className="registerField"
          placeholder="Birthday" value={this.state.password} />
        <input
          className="registerField"
          placeholder="Height" value={this.state.password} />
        <input
          className="registerField"
          placeholder="Weight" value={this.state.password} />
        <button
          className="signUpButton"
          type="submit"
          onClick={this.submit}>
          Join FitFort!
        </button>
      </div>
    );
  }
}
export default withRouter(Login);
