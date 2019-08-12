import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class UserMenu extends Component {
  navigateToAuth = () => {
    this.props.history.push("/login");
  }

  render(){
    return(
      <div>
        <h1>Hi, Joey!</h1>
        <h2
          onClick={this.navigateToAuth}
        >
        Sign Out</h2>
      </div>
    )
  }
}

export default withRouter(UserMenu);
