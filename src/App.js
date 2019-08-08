import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    if (window.location.pathname === "/") {
      return (
        <div>
          <h1>Hello Joey</h1>
          <h3>To Do's:</h3>
          <ul>
            <li>Register</li>
            <li>Login/Authentication</li>
            <li>Dashboard for User</li>
          </ul>
        </div>
    );
    } else {
      return <div />;
    }
  }
}
export default withRouter(App);
