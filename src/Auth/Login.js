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
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <input placeholder="Email" value={this.state.email} />
        <input
          placeholder="Password"
          type="password"
          value={this.state.password}
        />
        <button type="submit" onClick={this.navigateToSocial}>
          {" "}
          Login!{" "}
        </button>
        <button type="submit" onClick={this.navigateToSocial}>
          {" "}
          Forgot Password{" "}
        </button>
      </div>
    );
  }
}
export default withRouter(Login);
