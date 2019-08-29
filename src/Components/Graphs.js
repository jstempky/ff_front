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
        </div>
      )
    }
    else {
      return <div />;
    }
    }
  }

export default withRouter(Graphs);
