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
    if (window.location.pathname === "/login" || window.location.pathname === "/signup") {
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

  render(){
    return (
        <div>
          <div
            className="navBarContainerStyle"
          >
            {this.showBurger()}
            <img
              className="navbarIconStyle"
              src={logo}
              onClick={this.navigateToDash}
            />
          </div>
        </div>
    )
  }
}

export default withRouter(NavBar);
