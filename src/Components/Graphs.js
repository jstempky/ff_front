import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import logo from "../resources/logo.png";

import LineDemo from "../Graphs/LineDemo";
import "../App.css";

class Graphs extends Component {
  navigateToDashboard = () => {
    this.props.history.push("/dashboard");
  }

  render() {
    if (window.location.pathname ==="/graphs") {
      return (
        <div>
          <h1 className="pageTitle">
            Time Series
          </h1>
          <div className="graphContainer">
            <LineDemo />
          </div>
          <div className="navBarStyle">
            <img
              className="directToDashButton"
              onClick={this.navigateToDashboard}
              src={logo}
            />
          </div>
          <h3 className="devToDoStyle">Needs:</h3>
          <ul className="devToDoStyle">
            <li>Y: Weight, X: Time; Filters on exercise and rep</li>
            <li>Alan's Circle Graphs</li>
          </ul>
        </div>
      )
    }
    else {
      return <div />;
    }
    }
  }

export default withRouter(Graphs);
