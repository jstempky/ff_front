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
        <h3>Joey Stempky</h3>
        <h3>July 10, 19809 (30 years old)</h3>
        <h3>178lbs as of 8/13/2019</h3>
        <h3>5'10</h3>
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
