import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import friendsIcon from "../resources/friendsIcon.png";
import addfriend from "../resources/addfriend.png";


class Social extends Component {
  navigateToDashboard = () => {
    this.props.history.push("/dashboard")
  }

  navigateToFriends = () => {
    this.props.history.push("/friends")
  }

  navigateToAddFriend = () => {
    this.props.history.push("/addfriend")
  }

  render(){
    console.log(this.props)
    return(
      <div
        className="socialDashContainer"
      >
        <h1>Social Dash</h1>
        <figure>
          <img
            className="socialDashIcon"
            onClick={this.navigateToFriends}
            src={friendsIcon}
          />
          <figcaption
            className="iconTitle"
          >
            Friends
          </figcaption>
        </figure>
        <figure>
          <img
            className="socialDashIcon"
            onClick={this.navigateToAddFriend}
            src={addfriend}
          />
          <figcaption
            className="iconTitle"
          >
            Add Friend
          </figcaption>
        </figure>
      </div>
    )
  }
}

export default withRouter(Social);
