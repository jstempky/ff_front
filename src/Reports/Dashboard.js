import React, { Component } from "react";
import logo from "../logo.svg";
import { withRouter } from "react-router-dom";

class Dashboard extends Component {
  navigateToGraphs = () => {
    this.props.history.push("/graphs");
  };

  navigateToHistory = () => {
    this.props.history.push("/history");
  };

  navigateToAccount = () => {
    this.props.history.push("/");
  };

  navigateToNewSet = () => {
    this.props.history.push("/newset");
  };

  navigateToMaxReps = () => {
    this.props.history.push("/maxreps");
  };

  navigateToSocial = () => {
    this.props.history.push("/social");
  };

  render() {
    return (
      <div>
        <img onClick={this.navigateToGraphs} src={logo} />
        <img onClick={this.navigateToHistory} src={logo} />
        <img onClick={this.navigateToAccount} src={logo} />
        <img onClick={this.navigateToNewSet} src={logo} />
        <img onClick={this.navigateToMaxReps} src={logo} />
        <img onClick={this.navigateToSocial} src={logo} />
      </div>
    );
  }
}
export default withRouter(Dashboard);
