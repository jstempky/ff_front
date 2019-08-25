import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import logo from "../resources/logo.png";
import "../App.css";

class MaxReps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFriend: null,
      selectedExercise: null,
    };

    this.handleSelectFriend = this.handleSelectFriend.bind(this);
    this.handleSelectExercise = this.handleSelectExercise.bind(this);

  }

  componentDidMount(){}
  componentWillUnmount(){}


  handleSelectFriend(event) {this.setState({selectedFriend: event.target.value});}
  handleSelectExercise(event) {this.setState({selectedExercise: event.target.value});}



  navigateToDashboard = () => {
    this.props.history.push("/dashboard");
  };

  render() {
    if (window.location.pathname ==="/maxreps") {
      return (
        <div
          className="maxRepsContainer"
        >
          <input
            className="searchFriendField"
            placeholder="Friend"
            value={this.state.selectedFriend}
            onChange={this.handleSelectFriend}
          />
          <input
            className="searchFriendField"
            placeholder="Exercise"
            value={this.state.selectedExercise}
            onChange={this.handleSelectExercise}
          />
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
        </div>
      )
    }
    else {
      return <div />;
    }
    }
  }

export default withRouter(MaxReps);
