import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import logo from "../resources/logo.png";
import "../App.css";
import axios from 'axios';

import SetDetail from './SetDetail';

class Sets extends Component {
  navigateToDashboard = () => {
    this.props.history.push("/dashboard");
  };

  state = {
    sets: []
  }

  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://fitfort.herokuapp.com/sets`)
      .then(res => {
        const sets = res.data;
        this.setState({ sets });
      })
  }

  render() {
    if (window.location.pathname ==="/usersets") {
      return (
        <div
          className="setscontainer"
        >
           <ul>
           <h1>All Sets</h1>
           <table>
           <tr>
             <th>Exercise</th>
             <th>Weight</th>
             <th>Reps</th>
             <th>Date</th>
             <th>Location</th>
            </tr>
            <SetDetail
              exercise="Squat"
              weight="135"
              reps="12"
              dateTime="8/12/19 5:30PM"
            />
            {this.state.sets.map(set => (
              <tr>
                <td>{set.ex_desc}</td>
                <td>{set.weight}</td>
                <td>{set.reps}</td>
                <td>{set.set_datetime}</td>
                <td>LA Fitness, Plymouth, MI</td>
              </tr>
            ))}
           </table>
      </ul>
          <h1 className="pageTitle">
            Rep's from Heroku
          </h1>
        </div>
      )
    }
    else {
      return <div />;
    }
    }
  }

export default withRouter(Sets);
