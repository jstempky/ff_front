import React, {Component} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import logo from "../resources/logo.png";
import "../App.css";

class History extends Component {
  navigateToDashboard = () => {
    this.props.history.push("/dashboard");
  };

  render() {
    if (window.location.pathname ==="/history") {
      return (
        <div>
          <h1 className="pageTitle">
            JStemp12
          </h1>
          <h2
            className="historicSubTitle"
          >
            Previous Sets</h2>
          <table>
            <tr>
              <th>Exercise</th>
              <th>Weight</th>
              <th>Reps</th>
              <th>Date</th>
            </tr>
            <tr>
              <td>Bench Press</td>
              <td>225</td>
              <td>6</td>
              <td>4/20/19 4:24:13PM</td>
            </tr>
            <tr>
              <td>Bench Press</td>
              <td>185</td>
              <td>8</td>
              <td>4/20/19 4:20:00PM</td>
            </tr>
            <tr>
              <td>Bench Press</td>
              <td>135</td>
              <td>15</td>
              <td>4/20/19 4:16:40PM</td>
            </tr>
          </table>
          <h3 className="devToDoStyle">Needs:</h3>
          <ul className="devToDoStyle">
            <li>Sets by user; Joey may need to add in python-flask backend</li>
          </ul>
          <div className="navBarStyle">
            <img
              className="directToDashButton"
              onClick={this.navigateToDashboard}
              src={logo}
            />
          </div>
        </div>
      )
    }
    else {
      return <div />;
    }
    }
  }

export default withRouter(History);
