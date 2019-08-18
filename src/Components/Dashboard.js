import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "../App.css"

import icon_data from "../resources/icon_data.png";
import icon_History from "../resources/icon_History.png";
import icon_Me from "../resources/icon_Me.png";
import icon_Records from "../resources/icon_Records.png";
import icon_NewSet from "../resources/icon_NewSet.png";
import icon_Social from "../resources/icon_Social.png";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: 1,
      auth_token: "",
      date: "4/20/2019",
    }
  }

  componentDidMount(){
    console.log(this);
  }

  navigateToGraphDash = () => {
    this.props.history.push("/graphdash");
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
    if (window.location.pathname==="/dashboard") {
      return (
          <div className="dashboardStyle">
            <figure>
              <img
                className="dash_icon"
                onClick={this.navigateToGraphDash}
                src={icon_data}
              />
              <figcaption className="iconTitle">Graphs</figcaption>
            </figure>
            <figure>
              <img
                className="dash_icon"
                onClick={this.navigateToHistory}
                src={icon_History}
              />
              <figcaption
                className="iconTitle"
              >Historical</figcaption>
            </figure>
            <figure>
              <img
                className="dash_icon"
                onClick={this.navigateToAccount}
                src={icon_Me} />
              <figcaption
                className="iconTitle"
              >Me</figcaption>
            </figure>
            <figure>
              <img
                className="dash_icon"
                onClick={this.navigateToNewSet}
                src={icon_NewSet} />
              <figcaption
                className="iconTitle"
              >New Set</figcaption>
            </figure>
            <figure>
              <img
                className="dash_icon"
                onClick={this.navigateToMaxReps}
                src={icon_Records} />
              <figcaption
                className="iconTitle"
              >Records</figcaption>
            </figure>
            <figure>
              <img
                className="dash_icon"
                onClick={this.navigateToSocial}
                src={icon_Social} />
              <figcaption
                className="iconTitle"
              >Social</figcaption>
            </figure>
          </div>
        )
      }
      else {
        return <div />;
    }
    }
  }

export default withRouter(Dashboard);
