import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FriendDetails from './FriendDetails';

import "../App.css";

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_value: null
    };

    // this.handleExChange = this.handleExChange.bind(this);
    // this.handleWeightChange = this.handleWeightChange.bind(this);
    // this.handleRepsChange = this.handleRepsChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  navigateToDashboard = () => {
    this.props.history.push("/dashboard");
  }

  render() {
    if (window.location.pathname ==="/friends") {
      return (
        <div>
          <h1>Friends</h1>
          <div className="searchFriendsContainer">
            <input
              className="searchFriends"
              placeholder="Search friends" />
          </div>
          <div
            className="friendsContainer"
          >
            <FriendDetails
              name="Jon Ward"
              username="jw4rd"
            />
            <FriendDetails
              name="Alan Ernst"
              username="goodnplenty5"
            />
            <FriendDetails
              name="Kayla Hutchison"
              username="KaylaHutchison2019"
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

export default withRouter(Friends);
