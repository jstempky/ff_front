import React, {Component} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import SetDetail from './SetDetail';


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
              <SetDetail
                exercise="Squat"
                weight="135"
                reps="12"
                dateTime="8/12/19 5:30PM"
              />
          </table>

          <div className="comment">
            <p>-Map over sets(remove multiple Set Details in historic component)</p>
            <p>-Clean table formatting</p>
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
