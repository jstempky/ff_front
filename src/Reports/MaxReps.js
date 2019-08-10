import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import logo from "../resources/logo.png";
import "../App.css";

class MaxReps extends Component {
  navigateToDashboard = () => {
    this.props.history.push("/dashboard");
  };

  render() {
    if (window.location.pathname ==="/maxreps") {
      return (
        <div
          className="maxRepsContainer"
        >
          <h1>Deadlift</h1>
          <table>
            <tr>
              <th>Rep</th>
              <th>Record</th>
              <th>Date</th>
            </tr>
            <tr>
              <td>1</td>
              <td>435</td>
              <td>4/20/19 4:24:13PM</td>
            </tr>
            <tr>
              <td>2</td>
              <td>415</td>
              <td>4/20/19 4:20:00PM</td>
            </tr>
            <tr>
              <td>3</td>
              <td>405</td>
              <td>4/20/19 4:16:40PM</td>
            </tr>
            <tr>
              <td>4</td>
              <td>405</td>
              <td>4/20/19 4:16:40PM</td>
            </tr>
            <tr>
              <td>5</td>
              <td>405</td>
              <td>4/20/19 4:16:40PM</td>
            </tr>
            <tr>
              <td>6</td>
              <td>315</td>
              <td>4/20/19 4:16:40PM</td>
            </tr>
            <tr>
              <td>7</td>
              <td>275</td>
              <td>4/20/19 4:16:40PM</td>
            </tr>
            <tr>
              <td>8</td>
              <td>225</td>
              <td>4/20/19 4:16:40PM</td>
            </tr>
          </table>
          <h1 className="pageTitle">
            Max Reps!
          </h1>
          <h3 className="devToDoStyle">Needs:</h3>
          <ul className="devToDoStyle">
            <li>Max Reps table</li>
            <li>Max Reps table, filter and view friend's data side by side</li>
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

export default withRouter(MaxReps);
