import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import "../App.css";

class UserMenu extends Component {
  navigateToAuth = () => {
    this.props.history.push("/login");
  }

  navigateToSettings = () => {
    this.props.history.push("/settings");
  }

  render(){
    return(
      <div>
        <h1>Hi, Joey!</h1>
        <h3
          onClick={this.navigateToSettings}
        >Settings</h3>
        <h3
          onClick={this.navigateToAuth}
        >
        Sign Out</h3>
      </div>
    )
  }
}

export default withRouter(UserMenu);
