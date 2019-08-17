import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import friendPic from "../resources/friendPic.png"

class FriendDetails extends Component {
  navigateToUserProfile = () => {
    this.props.history.push("./userprofile")
  }

  render(){
    console.log(this.state);
    return(
      <div className="friendDetailsContainer">
        <img
          className="friendPic"
          src={friendPic}
          alt=""
          onClick={()=>console.log(this.state)}
        />
        <div className="friendDetailsContainer">
          <p className="friendsName" props={this.props}>{this.props.name}</p>
        </div>
        <div className="friendDetailsContainer">
          <p className="friendsUsername">{this.props.username}</p>
        </div>
        <div className="friendDetailsContainer">
          <button
            onClick={this.navigateToUserProfile}
            className="friendEditDeleteText"
          >
            View
          </button>
        </div>
      </div>
    )
  }
}

export default withRouter(FriendDetails);
