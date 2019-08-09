import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import logo from '../resources/logo.png';

class Social extends Component {
  navigateToDashboard = () => {
    this.props.history.push("/dashboard")
  }

  render(){
    return(
      <div>
        <h1 className="pageTitle">
          Social
        </h1>
        <h3 className="devToDoStyle">Needs:</h3>
        <ul className="devToDoStyle">
          <li>Figure out CRUD process for friends</li>
        </ul>
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
}

export default withRouter(Social);
