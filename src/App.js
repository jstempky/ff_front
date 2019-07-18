import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    if (window.location.pathname === "/") {
      return <div>Hello World</div>;
    } else {
      return <div />;
    }
  }
}
export default withRouter(App);
