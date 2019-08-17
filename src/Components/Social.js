import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import friendsIcon from "../resources/friendsIcon.png";


class Social extends Component {
  navigateToDashboard = () => {
    this.props.history.push("/dashboard")
  }

  navigateToFriends = () => {
    this.props.history.push("/friends")
  }

  render(){
    console.log(this.props)
    return(
      <div
        className="socialDashContainer"
      >
        <h1>Social Dash</h1>
        <img
          className="socialDashIcon"
          onClick={this.navigateToFriends}
          src={friendsIcon}
        />
        <h3 className="comment">Needs:</h3>
        <ul className="comment">
          <li>Add Friend</li>
          <li>Edit/Delete Friend</li>
        </ul>
      </div>
    )
  }
}

export default withRouter(Social);
