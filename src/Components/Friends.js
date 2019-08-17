import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FriendDetails from './FriendDetails';

import "../App.css";

class Friends extends Component {
  navigateToDashboard = () => {
    this.props.history.push("/dashboard");
  }

  render() {
    if (window.location.pathname ==="/friends") {
      return (
        <div>
          <h1>Friends</h1>
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
      )
    }
    else {
      return <div />;
    }
    }
  }

export default withRouter(Friends);
