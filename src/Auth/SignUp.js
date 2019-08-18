import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      username: null,
      f_name: null,
      l_name: null,
      bdate: null,
      sex: null,
      weight: null,
      height: null,
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleFNameChange = this.handleFNameChange.bind(this);
    this.handleLNameChange = this.handleLNameChange.bind(this);
    this.handleBDateChange = this.handleBDateChange.bind(this);
    this.handleSexChange = this.handleSexChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){}
  componentWillUnmount(){}

  handleEmailChange(event) {this.setState({email: event.target.value});}
  handlePasswordChange(event) {this.setState({password: event.target.value});}
  handleUsernameChange(event) {this.setState({username: event.target.value});}
  handleFNameChange(event) {this.setState({f_name: event.target.value});}
  handleLNameChange(event) {this.setState({l_name: event.target.value});}
  handleBDateChange(event) {this.setState({bdate: event.target.value});}
  handleSexChange(event) {this.setState({sex: event.target.value});}
  handleWeightChange(event) {this.setState({weight: event.target.value});}
  handleHeightChange(event) {this.setState({height: event.target.value});}

  handleSubmit(event) {
    alert("Welcome to FitFort " + this.state.username + "!")
    console.log(this.state)
  }

  render() {
    return (
      <form
        className="registerContainer"
      >
        <input
          className="registerField"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <input
          className="registerField"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <input
          className="registerField"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleUsernameChange}
        />
        <input
          className="registerField"
          placeholder="First Name"
          value={this.state.f_name}
          onChange={this.handleFNameChange}
        />
        <input
          className="registerField"
          placeholder="Last Name"
          value={this.state.l_name}
          onChange={this.handleLNameChange}
        />
        <input
          className="registerField"
          placeholder="Sex"
          value={this.state.sex}
          onChange={this.handleSexChange}
        />
        <input
          className="registerField"
          placeholder="Birthday"
          value={this.state.bdate}
          onChange={this.handleBDateChange}
        />
        <input
          className="registerField"
          placeholder="Height"
          value={this.state.height}
          onChange={this.handleHeightChange}
        />
        <input
          className="registerField"
          placeholder="Weight"
          value={this.state.weight}
          onChange={this.handleWeightChange}
        />
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
