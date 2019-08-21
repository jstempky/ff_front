import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import logo from "../resources/logo.png";
import "../App.css";
import axios from 'axios';

class Sets extends Component {
  navigateToDashboard = () => {
    this.props.history.push("/dashboard");
  };

  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://fitfort.herokuapp.com/sets`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    if (window.location.pathname ==="/usersets") {
      return (
        <div
          className="setscontainer"
        >
           <ul>
           <h1>Deadlift</h1>
           <table>
           <tr>
              <th>Rep</th>
              <th>Record</th>
              <th>Date</th>
            </tr>
            <tr>
            { this.state.persons.map(person => <li>Rep: {person.set_id}, 
            Amount of Reps: {person.reps}, Date: {person.set_datetime}</li>)}
            </tr>
           </table>
      </ul>
          <h1 className="pageTitle">
            Rep's from Heroku
          </h1>
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

export default withRouter(Sets);
