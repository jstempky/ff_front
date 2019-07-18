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
        <input placeholder="Username" value={this.state.email} />
        <input placeholder="First Name" value={this.state.password} />
        <input placeholder="Last Name" value={this.state.password} />
        <input placeholder="Sex" value={this.state.password} />
        <input placeholder="Birthday" value={this.state.password} />
        <input placeholder="Height" value={this.state.password} />
        <input placeholder="Weight" value={this.state.password} />
      </div>
    );
  }
}
export default withRouter(Login);
