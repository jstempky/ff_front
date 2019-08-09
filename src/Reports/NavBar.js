import React, { Component } from "react";
import {withRouter} from "react-router-dom";


import logo from "../resources/logo.png";


class NavBar extends Component {
  navigateToDash = () => {
    this.props.history.push("/dashboard");
  }

  render(){
    return (
      <div className="navBarStyle">
        <img
          className="navbarIconStyle"
          src={logo}
          onClick={this.navigateToDash}
        />
      </div>
    )
  }
}

export default withRouter(NavBar);
