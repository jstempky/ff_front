import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import "../App.css";

class Settings extends Component {
  render(){
    return(
      <div>
        <h1>Settings!</h1>
      </div>
    )
  }
}

export default withRouter(Settings);
