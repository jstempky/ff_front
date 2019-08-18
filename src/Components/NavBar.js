import React, { Component } from "react";
import {withRouter} from "react-router-dom";


import logo from "../resources/logo.png";
import hamburger from "../resources/Hamburger_icon.svg";


class NavBar extends Component {
  navigateToDash = () => {
    this.props.history.push("/dashboard");
  }

  navigateToMenu = () => {
    this.props.history.push("/usermenu");
  }

  showBurger = () => {
    if (window.location.pathname === "/login" || window.location.pathname === "/signup"  || window.location.pathname ==="/forgotpw") {
      return (
        <div />
    );
    } else {
      return (
          <img
            className="navBarMenuStyle"
            src={hamburger}
            onClick={this.navigateToMenu} />
      )
    }
  }

  showLogo = () => {
    if (window.location.pathname === "/login" || window.location.pathname === "/signup" || window.location.pathname ==="/forgotpw") {
      return (
        <div />
    );
    } else {
      return (
        <img
          className="navbarIconStyle"
          src={logo}
          onClick={this.navigateToDash}
        />
      )
    }
  }

  render(){
    return (
        <div>
          <div
            className="navBarContainerStyle"
          >
            {this.showBurger()}
            {this.showLogo()}

          </div>
        </div>
    )
  }
}

export default withRouter(NavBar);
