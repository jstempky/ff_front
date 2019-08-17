import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import multipleLineChart from "../resources/multipleLineChart.png";
import singleLineChart from "../resources/singleLineChart.png";
import barChart from "../resources/barChart.png";
import circleGraph from "../resources/circleGraph.png";

import "../App.css";

class GraphDash extends Component {
  

  componentDidMount(){
    console.log(this);
  }

  navigateToTimeSeries =  () => {
    this.props.history.push("./graphs")
  }

  render() {
    if (window.location.pathname==="/graphdash") {
      return (
          <div className="graphDashStyle">
            <figure>
              <img
                className ="graphDashIcon"
                onClick={this.navigateToTimeSeries}
                src={singleLineChart}
              />
            <figcaption className="iconTitle">Your Progress</figcaption>
            </figure>
            <figure>
              <img
                className ="graphDashIcon"
                onClick={this.navigateToTimeSeries}
                src={barChart}
              />
            <figcaption className="iconTitle">Set-Rep Data</figcaption>
            </figure>
            <figure>
              <img
                className ="graphDashIcon"
                onClick={this.navigateToTimeSeries}
                src={multipleLineChart}
              />
            <figcaption className="iconTitle">You vs. Friends</figcaption>
            </figure>
            <figure>
              <img
                className ="graphDashIcon"
                onClick={this.navigateToTimeSeries}
                src={circleGraph}
              />
            <figcaption className="iconTitle">Set-Rep Data</figcaption>
            </figure>
          </div>

        )
      }
      else {
        return <div />;
    }
    }
  }

  export default withRouter(GraphDash);
