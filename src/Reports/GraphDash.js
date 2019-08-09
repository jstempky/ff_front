import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import logo from "../resources/logo.png";


import "../App.css";

class GraphDash extends Component {
  navigateToTimeSeries =  () => {
    this.props.history.push("./graphs")
  }

  render() {
    if (window.location.pathname==="/graphdash") {
      return (
          <div className="graphDashStyle">
              <h3
                className ="graphDashHeader"
                onClick={this.navigateToTimeSeries}
              >
              Time Series</h3>
              <h3
                className ="graphDashHeader"
                onClick={this.navigateToTimeSeries}
              >
              Histogram</h3>
            <h3
              className ="graphDashHeader"
              onClick={this.navigateToTimeSeries}
            >
            Other graph</h3>
            <h3
              className ="graphDashHeader"
              onClick={this.navigateToTimeSeries}
            >
            Other graph</h3>
          </div>

        )
      }
      else {
        return <div />;
    }
    }
  }

  export default withRouter(GraphDash);
