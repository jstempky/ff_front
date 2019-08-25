import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import "../App.css";

import friendPic from "../resources/friendPic.png";
import friendsIcon from "../resources/friendsIcon.png";

class UserProfile extends Component {

  testFunction = () => {
    console.log(this);
  }

  navigateToFriends = () => {
    this.props.history.push("/friends");
  }

  displayWelcome = (props) => {
    return <h1>Welcome, {props.name} </h1>
  }

  render() {
    console.log(this.props);
    return(
      <div className="userProfileContainer">
        {this.displayWelcome(this.props)}
        <img
          className="userProfilePic"
          src={friendPic}
          onClick={this.testFunction}
        />
        <div
        >
          <h2>Joey Stempky</h2>
          <p className="personInfo">July 10, 1989 (30 years old)</p>
          <p className="personInfo">178lbs as of 8/13/2019</p>
          <p className="personInfo">5'10</p>
        </div>
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

        <img
          className="friendsPic"
          src={friendsIcon}
          onClick={this.navigateToFriends}
        />
      </div>
    )
  }
}

export default withRouter(UserProfile);
